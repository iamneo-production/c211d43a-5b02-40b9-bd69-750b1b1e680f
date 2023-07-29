package com.example.springapp.controller;

import com.example.springapp.model.InstructorSettings;
import com.example.springapp.repository.InstructorSettingsRepo;
import com.example.springapp.service.InstructorSettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.Optional;

@RestController
@RequestMapping("api/instructors/settings")
@CrossOrigin("*")
public class InstructorSettingsController {

    private final InstructorSettingsService instructorService;
    private final InstructorSettingsRepo instructorRepository;

    @Autowired
    public InstructorSettingsController(InstructorSettingsService instructorService, InstructorSettingsRepo instructorRepository) {
        this.instructorService = instructorService;
        this.instructorRepository = instructorRepository;
    }

    @PostMapping
    public List<InstructorSettings> createInstructor(@RequestBody List<InstructorSettings> instructorAccounts) {
        return instructorService.saveInstructor(instructorAccounts);
    }

    @GetMapping("/{instructorId}")
    public ResponseEntity<InstructorSettings> getInstructorById(@PathVariable Long instructorId) {
        Optional<InstructorSettings> instructorOptional = instructorService.getInstructorById(instructorId);
        if (instructorOptional.isPresent()) {
            return new ResponseEntity<>(instructorOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    


    @PutMapping("/{instructorId}")
    public ResponseEntity<InstructorSettings> updateInstructor(@PathVariable Long instructorId, @RequestBody InstructorSettings instructor) {
        Optional<InstructorSettings> optionalInstructor = instructorRepository.findById(instructorId);
        if (optionalInstructor.isPresent()) {
            InstructorSettings existingInstructor = optionalInstructor.get();
            // Update the existing instructor with the new data
            existingInstructor.setFirstName(instructor.getFirstName());
            existingInstructor.setLastName(instructor.getLastName());
            existingInstructor.setMobile(instructor.getMobile());
            existingInstructor.setEmail(instructor.getEmail());
            existingInstructor.setPassword(instructor.getPassword());

            InstructorSettings updatedInstructor = instructorRepository.save(existingInstructor);
            return new ResponseEntity<>(updatedInstructor, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    

    @DeleteMapping("/{instructorId}")
    public ResponseEntity<Void> deleteInstructor(@PathVariable Long instructorId) {
        var optionalInstructor = instructorRepository.findById(instructorId);
        if (optionalInstructor.isPresent()) {
            instructorRepository.deleteById(instructorId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
