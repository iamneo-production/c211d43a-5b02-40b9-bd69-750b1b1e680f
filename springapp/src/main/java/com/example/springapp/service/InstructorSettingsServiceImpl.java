package com.example.springapp.service;

import com.example.springapp.model.InstructorSettings;
import com.example.springapp.repository.InstructorSettingsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InstructorSettingsServiceImpl implements InstructorSettingsService {

    private final InstructorSettingsRepo instructorRepository;

    @Autowired
    public InstructorSettingsServiceImpl(InstructorSettingsRepo instructorRepository) {
        this.instructorRepository = instructorRepository;
    }

    @Override
    public List<InstructorSettings> getAllInstructors() {
        return instructorRepository.findAll();
    }

    @Override
    public Optional<InstructorSettings> getInstructorById(Long instructorId) {
        return instructorRepository.findById(instructorId);
    }

    @Override
    public List<InstructorSettings> saveInstructor(List<InstructorSettings> instructorAccounts) {
        return instructorRepository.saveAll(instructorAccounts);
    }

    @Override
    public void deleteInstructor(Long instructorId) {
        instructorRepository.deleteById(instructorId);
    }
}
