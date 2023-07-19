package com.example.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.springapp.service.LessonService;
import com.example.springapp.model.Course;
import com.example.springapp.model.Lesson;

import java.util.List;



@RestController
@RequestMapping("/lesson")
public class LessonController {
    private LessonService lessonService;

    @Autowired
    public LessonController(LessonService lessonService) {
        this.lessonService = lessonService;
    }

    @PostMapping
    public ResponseEntity<Lesson> createLesson(@RequestBody Lesson lesson) {
        Lesson createdLesson = lessonService.createLesson(lesson);
        return new ResponseEntity<>(createdLesson, HttpStatus.CREATED);
    }

//    @GetMapping
//    public ResponseEntity<List<Lesson>> getLessonAll(@RequestBody Lesson lesson) {
//        List<Lesson> lessons = lessonService.getLessonAll(lesson);
//        return new ResponseEntity<>(lessons, HttpStatus.OK);
//    }
    
    @GetMapping("/getlesson")
    public List<Lesson> getLesson() {
    	List<Lesson> les=lessonService.getLessonAll();
        return les;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Lesson> getLessonById(@PathVariable("id") int id) {
        try {
            Lesson lesson = lessonService.getLessonById(id);
                return new ResponseEntity<>(lesson, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Lesson> updateLesson(@PathVariable("id") int id, @RequestBody Lesson lesson) {
        Lesson updatedLesson = lessonService.updateLesson(lesson);
        if (updatedLesson != null) {
            return new ResponseEntity<>(updatedLesson, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLesson(@PathVariable("id") int id) {
        lessonService.deleteLesson(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}


