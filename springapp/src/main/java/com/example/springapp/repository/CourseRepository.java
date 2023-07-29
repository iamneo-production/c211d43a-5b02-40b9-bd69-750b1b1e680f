package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.springapp.model.Course;



@EnableJpaRepositories
public interface CourseRepository extends JpaRepository<Course, Long> {
  
}

