package com.example.springapp.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.QuizSet;
import com.example.springapp.service.QuizService;



@RestController
@RequestMapping("/event")
public class EventController {




	private final QuizService quizService;

	    public EventController(QuizService quizService) {
	        this.quizService = quizService;
	    }

	  
	    @CrossOrigin(origins = "http://localhost:3000")
	    @PostMapping("/save")
	    public ResponseEntity<QuizSet> saveQuizSet(@RequestBody QuizSet quizSet) {
	    	QuizSet createQuizSet =    quizService.saveQuizSet(quizSet);
	        return new ResponseEntity<>(createQuizSet,HttpStatus.CREATED);
	    }
	    
	    @CrossOrigin(origins = "http://localhost:3000")
	    @GetMapping("/getall")
	    public ResponseEntity<List<QuizSet>> okquizset()
	    {
	     return new ResponseEntity<>(quizService.getQuizset(),HttpStatus.OK);
	    }
	    
	    
	    @CrossOrigin(origins = "http://localhost:3000")
	    @DeleteMapping("/delete/{id}")
	    public ResponseEntity<Void> deleteLesson(@PathVariable("id") Long id) {
	    	quizService.deleteQuizSetById(id);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }
	    
	}


