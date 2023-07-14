package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.springapp.model.User;

@EnableJpaRepositories
public interface UserRepository extends JpaRepository<User,Integer> {
	User findByEmailAndPasswordAndRole(String email,String password,String role);
}
