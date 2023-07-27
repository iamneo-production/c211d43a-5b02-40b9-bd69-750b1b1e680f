package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Admin;
import com.example.springapp.repository.InstructorRepository;

@Service
public class InstructorServiceImpl implements InstructorService {

    @Autowired
    private InstructorRepository instructorRepository;

    public InstructorServiceImpl() {

    }

    @Override
    public List<Admin> getAdmins() {
        return instructorRepository.findAll();
    }

    @Override
    public Admin getAdmin(long adminId) {
        return instructorRepository.findById(adminId).orElse(null);
    }

    @Override
    public Admin addAdmin(Admin admin) {
        instructorRepository.save(admin);
        return admin;
    }

    @Override
    public Admin updateAdmin(Admin admin) {
        instructorRepository.save(admin);
        return admin;
    }

    @Override
    public void deleteAdmin(long parseLong) {
        Admin entity = instructorRepository.getOne(parseLong);
        instructorRepository.delete(entity);
    }
}
