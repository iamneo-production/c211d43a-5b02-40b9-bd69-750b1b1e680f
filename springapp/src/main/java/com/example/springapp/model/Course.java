package com.example.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "course")
public class Course {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	

	private String title;
	

	private String description;
	
	
	private Long instructorId;


	public Course(Long id, String title, String description, Long instructorId) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.instructorId = instructorId;
	}


	public Course() {
		super();
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public Long getInstructorId() {
		return instructorId;
	}


	public void setInstructorId(Long instructorId) {
		this.instructorId = instructorId;
	}
	

	

}


