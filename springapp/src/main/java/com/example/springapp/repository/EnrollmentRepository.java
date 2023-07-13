package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.springapp.model.Enrollment;

import java.util.Optional;

@EnableJpaRepositories
public interface EnrollmentRepository extends JpaRepository<Enrollment, Integer> {
    
}
