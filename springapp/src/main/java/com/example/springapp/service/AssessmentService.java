package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Assessment;

import com.example.springapp.repository.AssessmentRepository;

@Service
public class AssessmentService {

	private AssessmentRepository rep;
	
	@Autowired
	public AssessmentService(AssessmentRepository rep) {
		this.rep=rep;
	}
	
	public Assessment createAssessment(Assessment assessment) {
		return rep.save(assessment);
	}
	
	 public List<Assessment> getAssessmentAll(Assessment assessment) {
	        return rep.findAll();
	    }
	 
	 public Assessment getAssessmentById(int id) {
	        return rep.findById(id)
	                .orElseThrow(() -> new IllegalArgumentException("Assessment not found with ID: " + id));
	    }
	 
	 public Assessment updateassessment(Assessment updatedAssessment)
	 {
		 Assessment existingassessment =rep.findById(updatedAssessment.getId()).orElse(null);
		
			 existingassessment.setQuestiontitle(updatedAssessment.getQuestiontitle());
			 existingassessment.setOptiona(updatedAssessment.getOptiona());
			 existingassessment.setOptionb(updatedAssessment.getOptionb());
			 existingassessment.setOptionc(updatedAssessment.getOptionc());
			 existingassessment.setOptiond(updatedAssessment.getOptiond());
			 existingassessment.setCorrectans(updatedAssessment.getCorrectans());
			 
		 
		 return rep.save(existingassessment);
	 
	  
	 }
	 
	 public void deleteAssessment(int id) {
		 rep.deleteById(id);
	 }
	 
}
