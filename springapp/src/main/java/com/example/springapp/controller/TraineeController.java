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

import com.example.springapp.model.Trainee;
import com.example.springapp.service.TraineeService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin(origins = "https://8081-eefedbbaeeaaeabaccffcffeaeaadbdbabf.project.examly.io")
public class TraineeController {

	@Autowired
	private TraineeService traineeService;

	@GetMapping("/trainee")
	public List<Trainee> getTrainee() {
		return this.traineeService.getTrainee();
	}

	@GetMapping("/trainee/{traineeId}")
	public Trainee getTrainee(@PathVariable String traineeId) {
		return this.traineeService.getTrainee(Long.parseLong(traineeId));
	}

	@PostMapping("/trainee")
	public Trainee addTrainee(@RequestBody Trainee trainee) {

		return this.traineeService.addTrainee(trainee);
	}

	@PutMapping("/trainee/{traineeId}")
	public Trainee updateTrainee(@PathVariable String traineeId, @RequestBody Trainee trainee) {
		trainee.setId(Long.parseLong(traineeId));
		return this.traineeService.updateTrainee(trainee);
	}

	@DeleteMapping("/trainee/{traineeId}")
	public ResponseEntity<HttpStatus> deleteTrainee(@PathVariable String traineeId) {
		try {
			this.traineeService.deleteTrainee(Long.parseLong(traineeId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
