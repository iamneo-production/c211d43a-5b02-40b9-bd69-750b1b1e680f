package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.Admin;
import com.example.springapp.services.InstructorService;

@RestController
public class InstructorController {

    @Autowired
    private InstructorService instructorService;

    @GetMapping("/home")
    public String home() {
        return "this is home page";
    }

    @GetMapping("/admins")
    public List<Admin> getAdmins() {
        return this.instructorService.getAdmins();
    }

    @GetMapping("/admins/{adminId}")
    public Admin getAdmin(@PathVariable String adminId) {
        return this.instructorService.getAdmin(Long.parseLong(adminId));
    }

    @PostMapping("/admins")
    public Admin addAdmin(@RequestBody Admin admin) {
        return this.instructorService.addAdmin(admin);
    }

    @PutMapping("/admins/{adminId}")
    public Admin updateAdmin(@PathVariable String adminId, @RequestBody Admin admin) {
        admin.setId(Long.parseLong(adminId));
        return this.instructorService.updateAdmin(admin);
    }

    @DeleteMapping("/admins/{adminId}")
    public ResponseEntity<HttpStatus> deleteAdmin(@PathVariable String adminId) {
        try {
            this.instructorService.deleteAdmin(Long.parseLong(adminId));
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
