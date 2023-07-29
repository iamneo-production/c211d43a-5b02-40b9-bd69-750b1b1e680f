package com.example.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.example.springapp.repository.LessonRepository;
import com.example.springapp.model.Lesson;

@Service
public class LessonService {
    private LessonRepository lessonRepository;

//    @Autowired
    public LessonService(LessonRepository lessonRepository) {
        this.lessonRepository = lessonRepository;
    }

    public Lesson createLesson(Lesson lesson) {
        return lessonRepository.save(lesson);
    }

    public List<Lesson> getLessonAll() {
        return lessonRepository.findAll();
    }

    public Lesson getLessonById(int id) {
        return lessonRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Lesson not found with ID: " + id));
    }

    public Lesson updateLesson(Lesson lesson) {
        Lesson existingLesson = lessonRepository.findById(lesson.getId()).orElse(null);
        if (existingLesson != null) {
            existingLesson.setTitle(lesson.getTitle());
            existingLesson.setDescription(lesson.getDescription());
//            existingLesson.setcourseId(lesson.getcourseId());
            return lessonRepository.save(existingLesson);
        }
        return null; // or handle the case when the lesson is not found
    }

    public void deleteLesson(int id) {
        lessonRepository.deleteById(id);
    }
}
