package com.example.springapp.controller;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.springapp.service.CourseService;
import com.example.springapp.service.EnrollmentService;
//import com.example.springapp.model.Course;
import com.example.springapp.model.Enrollment;

//import java.util.ArrayList;
import java.util.List;
//import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
public class EnrollmentController {
    private EnrollmentService enrollmentService;
    private CourseService courseService;

//    @Autowired
    public EnrollmentController(EnrollmentService enrollmentService,CourseService courseService) {
        this.enrollmentService = enrollmentService;
        this.courseService = courseService;
        
    }

    @PostMapping
    public ResponseEntity<Enrollment> enrollUserToCourse(@RequestBody Enrollment enrollment) {
        Enrollment createdEnrollment = enrollmentService.enrollUserToCourse(enrollment);
        return new ResponseEntity<>(createdEnrollment, HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "https://8081-bbcbbfdbbaaeabaccffcffeaeaadbdbabf.project.examly.io/")
    @GetMapping("/{id}")
    public ResponseEntity getEnrolledCourses(@PathVariable("id") int id){
    	List<Integer> courseId = enrollmentService.getEnrollmentByUserId(id).stream().map(Enrollment -> Enrollment.getCourseId()).collect(Collectors.toList());
    	return ResponseEntity.accepted().body(courseService.getCoursesById(courseId));
    }

    @CrossOrigin(origins = "https://8081-bbcbbfdbbaaeabaccffcffeaeaadbdbabf.project.examly.io/")
    @GetMapping("/enrollment")
    public ResponseEntity<List<Enrollment>> getAllEnrollments() {
        List<Enrollment> enrollments = enrollmentService.getAllEnrollments();
        return new ResponseEntity<>(enrollments, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> unenrollUserFromCourse(@PathVariable("id") int id) {
        enrollmentService.unenrollUserFromCourse(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

