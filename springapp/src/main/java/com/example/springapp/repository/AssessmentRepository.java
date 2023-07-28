package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Assessment;

public interface AssessmentRepository extends JpaRepository<Assessment,Integer>{

}
