package com.example.springapp.service;

import com.example.springapp.model.InstructorSettings;
import java.util.List;
import java.util.Optional;

public interface InstructorSettingsService {
    List<InstructorSettings> getAllInstructors();

    Optional<InstructorSettings> getInstructorById(Long instructorId);

    List<InstructorSettings> saveInstructor(List<InstructorSettings> instructorAccounts);

    void deleteInstructor(Long instructorId);


}
