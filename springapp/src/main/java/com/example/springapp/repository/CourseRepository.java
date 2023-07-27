package com.example.springapp.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.springapp.model.Course;

import java.util.*;
import java.util.Optional;

@EnableJpaRepositories
public interface CourseRepository extends JpaRepository<Course, Integer> {
    ArrayList<Course> findByIdIn(List<Integer> ids);
}

