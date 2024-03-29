package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springapp.model.Quiz;


@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {
}