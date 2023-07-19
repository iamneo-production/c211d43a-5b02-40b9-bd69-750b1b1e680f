package com.example.springapp.service;
import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Auth;
import com.example.springapp.model.User;
import com.example.springapp.repository.AuthRepository;
import com.example.springapp.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthRepository authRepository;

    public User saveDetail(User user) {
        return userRepository.save(user);
    }

    public User login(User user) {
        return userRepository.findByEmailAndPasswordAndRole(user.getEmail(), user.getPassword(), user.getRole());
    }

    public User adminLogin(User user) {
        return userRepository.findByEmailAndPasswordAndRole(user.getEmail(), user.getPassword(), "admin");
    }

    public Auth insertAuth(String token, int id) {
        return authRepository.save(new Auth(id, token, new Timestamp(System.currentTimeMillis() + 600)));
    }

}
