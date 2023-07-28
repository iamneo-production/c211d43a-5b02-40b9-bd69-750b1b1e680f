package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springapp.model.InstructorSettings;

public interface InstructorSettingsRepo extends JpaRepository<InstructorSettings, Long> {

}
