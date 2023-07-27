package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springapp.model.Trainee;

public interface TraineeRepository extends JpaRepository<Trainee, Long> {

}
