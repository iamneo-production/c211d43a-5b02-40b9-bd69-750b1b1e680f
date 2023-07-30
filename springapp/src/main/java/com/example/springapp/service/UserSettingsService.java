package com.example.springapp.service;

import com.example.springapp.model.UserSettings;

import java.util.List;

public interface UserSettingsService {

    List<UserSettings> getAllUsers();

    UserSettings getUserById(Long userId);

    UserSettings saveUser(UserSettings user);

    void deleteUser(Long userId);

    // Static factory method for finding by Id (if required)
    static UserSettings findById(Long userId) {
        return null; // Implement the method as needed
    }
}
