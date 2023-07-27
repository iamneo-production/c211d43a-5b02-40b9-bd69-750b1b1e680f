package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.springapp.model.Auth;
import com.example.springapp.model.User;

@EnableJpaRepositories
public interface AuthRepository extends JpaRepository<Auth,Integer>{

	Auth save(Auth auth);
	
}
