package com.example.springapp.service;

import java.util.List;

import com.example.springapp.model.Admin;

public interface InstructorService {

    public List<Admin> getAdmins();

    public Admin getAdmin(long adminId);

    public Admin addAdmin(Admin admin);

    public Admin updateAdmin(Admin admin);

    public void deleteAdmin(long parseLong);
}
