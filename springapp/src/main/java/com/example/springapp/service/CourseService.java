package com.example.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Course;
import com.example.springapp.repository.CourseRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    private final CourseRepository courseRepo;

    @Autowired
    public CourseService(CourseRepository courseRepo) {
        this.courseRepo = courseRepo;
    }

    public Course saveDetail(Course course) {
        return courseRepo.save(course);
    }

    public List<Course> showAll() {
        return courseRepo.findAll();
    }

    public Course getById(int courseId) {
        return courseRepo.findById(courseId).orElse(null);
    }

    public String deleteCourse(int courseId) {
        courseRepo.deleteById(courseId);
        return "Course Id " + courseId + " deleted Successfully";
    }

    public Course updateCourse(Course course) {
        Optional<Course> existingCourseOptional = courseRepo.findById(course.getId());

        if (existingCourseOptional.isPresent()) {
            Course existingCourse = existingCourseOptional.get();
            existingCourse.setTitle(course.getTitle());
            existingCourse.setDescription(course.getDescription());
            existingCourse.setInstructorId(course.getInstructorId());

            return courseRepo.save(existingCourse);
        } else {
            throw new IllegalArgumentException("Course not found with ID: " + course.getId());
        }
    }

}
