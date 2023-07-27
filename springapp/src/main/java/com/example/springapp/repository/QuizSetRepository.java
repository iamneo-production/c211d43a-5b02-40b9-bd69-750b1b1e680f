package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springapp.model.QuizSet;



@Repository
public interface QuizSetRepository extends JpaRepository<QuizSet, Long> {
}