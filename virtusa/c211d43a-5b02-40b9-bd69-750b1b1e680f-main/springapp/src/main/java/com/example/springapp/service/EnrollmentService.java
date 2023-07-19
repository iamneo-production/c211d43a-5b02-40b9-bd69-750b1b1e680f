package com.example.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import com.example.springapp.repository.EnrollmentRepository;
import com.example.springapp.model.Enrollment;

@Service
public class EnrollmentService {
    private EnrollmentRepository enrollmentRepository;

    @Autowired
    public EnrollmentService(EnrollmentRepository enrollmentRepository) {
        this.enrollmentRepository = enrollmentRepository;
    }

    public Enrollment enrollUserToCourse(Enrollment enrollment) {
        return enrollmentRepository.save(enrollment);
    }

    public ArrayList<Enrollment> getEnrollmentByUserId(int id) {
        return enrollmentRepository.findByUserId(id);
    }

    public List<Enrollment> getAllEnrollments() {
        return enrollmentRepository.findAll();
    }

    public void unenrollUserFromCourse(int id) {
        enrollmentRepository.deleteById(id);
    }
}
