package com.example.springapp.controller;

import com.example.springapp.model.UserSettings;
import com.example.springapp.repository.UserSettingsRepository;
import com.example.springapp.service.UserSettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/UserSettings")
@CrossOrigin("https://8081-eebedaabaacaaeabaccffcffeaeaadbdbabf.project.examly.io")
public class UserSettingsController {

    private final UserSettingsService userService;
    private final UserSettingsRepository userRepository;

    @Autowired
    public UserSettingsController(UserSettingsService userService, UserSettingsRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @PostMapping
    public List<UserSettings> createUser(@RequestBody List<UserSettings> userAccounts) {
        return userRepository.saveAll(userAccounts);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserSettings> getUserById(@PathVariable Long userId) {
        Optional<UserSettings> optionalUser = userRepository.findById(userId);
        return optionalUser.map(user -> new ResponseEntity<>(user, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{userId}")
    public ResponseEntity<UserSettings> updateUser(@PathVariable Long userId, @RequestBody UserSettings user) {
        Optional<UserSettings> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            UserSettings existingUser = optionalUser.get();
            // Update the existing user with the new data
            existingUser.setFirstName(user.getFirstName());
            existingUser.setLastName(user.getLastName());
            existingUser.setMobile(user.getMobile());
            existingUser.setEmail(user.getEmail());
            existingUser.setPassword(user.getPassword());

            UserSettings updatedUser = userService.saveUser(existingUser);
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long userId) {
        Optional<UserSettings> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            userService.deleteUser(userId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
