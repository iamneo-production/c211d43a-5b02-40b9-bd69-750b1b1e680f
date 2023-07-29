package com.example.springapp.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "lesson")
public class Lesson {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private String description;
	private Long courseId;

	public Lesson(Long id, String title, String description, Long courseId) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.courseId = courseId;
	}


	public Lesson() {
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


	public Long getcourseId() {
		return courseId;
	}


	public void setcourseId(Long courseId) {
		this.courseId = courseId;
	}
	

	

}
