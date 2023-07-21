package com.example.springapp.controller;

import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.User;
import com.example.springapp.service.UserService;

@RestController
@RequestMapping("/candidate")
public class UserController {
    
    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "https://8081-bbcbbfdbbaaeabaccffcffeaeaadbdbabf.project.examly.io/")
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.saveDetail(user);
    }

    @CrossOrigin(origins = "https://8081-bbcbbfdbbaaeabaccffcffeaeaadbdbabf.project.examly.io/")
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        User u = userService.login(user);
        if (u != null) {
            String authToken = Base64.getEncoder().encodeToString((System.currentTimeMillis() + ":" + u.getId()).getBytes());
            userService.insertAuth(authToken, u.getId());
            return new ResponseEntity<>(authToken, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Auth Failed", HttpStatus.OK);
        }
    }

  	
}
