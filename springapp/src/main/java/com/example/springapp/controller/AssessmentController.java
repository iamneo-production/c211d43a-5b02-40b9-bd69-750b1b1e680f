package com.example.springapp.controller;


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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.Assessment;
import com.example.springapp.service.AssessmentService;



@RestController
@RequestMapping("/assessment")
public class AssessmentController {

	
	private AssessmentService ser;
	
	@Autowired
	public AssessmentController(AssessmentService ser) {
		this.ser=ser;
	}
	 @CrossOrigin(origins = "http://localhost:3000")
	@PostMapping
	public ResponseEntity<Assessment> createAssessment(@RequestBody Assessment assessment){
		Assessment createdAssessment = ser.createAssessment(assessment);
		return new ResponseEntity<>(createdAssessment,HttpStatus.CREATED);
	}
	 @CrossOrigin(origins = "http://localhost:3000")
	@GetMapping
	public java.util.List<Assessment> getAssessmentAll(Assessment assessment){
		return ser.getAssessmentAll(assessment);
	
	}
	 @CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/{id}")
	public ResponseEntity <Assessment> getAssessmentById(@PathVariable("id")int id){
		Assessment assessment=ser.getAssessmentById(id);
		if(assessment!=null) {
			return new ResponseEntity<>(HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/{id}")
	public ResponseEntity<Assessment> updateAssessment(@PathVariable("id")int id, @RequestBody Assessment assessment){
		Assessment updatedAssessment=ser.updateassessment(assessment);
		if(updatedAssessment!=null) {
			return new ResponseEntity<>(updatedAssessment,HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteAssessment(@PathVariable("id") int id){
		ser.deleteAssessment(id);
		
			return new ResponseEntity<>(HttpStatus.OK);
		}
	
	
	
}
