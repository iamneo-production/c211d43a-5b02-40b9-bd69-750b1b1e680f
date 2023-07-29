package com.example.springapp.service;

import com.example.springapp.model.UserSettings;
import com.example.springapp.repository.UserSettingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserSettingsServiceImpl implements UserSettingsService {

    private final UserSettingsRepository userRepository;

    @Autowired
    public UserSettingsServiceImpl(UserSettingsRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<UserSettings> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public UserSettings getUserById(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    @Override
    public UserSettings saveUser(UserSettings user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}
