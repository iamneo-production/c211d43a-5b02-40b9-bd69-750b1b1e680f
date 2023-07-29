package com.example.springapp.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "enrollment")
public class Enrollment {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long userId;
	private Long courseId;


	public Enrollment(Long id, Long userId, Long courseId) {
		super();
		this.id = id;
		this.userId = userId;
		this.courseId = courseId;
	}

	public Enrollment() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getuserId() {
		return userId;
	}


	public void setuserId(Long userId) {
		this.userId = userId;
	}


	public Long getcourseId() {
		return courseId;
	}


	public void setcourseId(Long courseId) {
		this.courseId = courseId;
	}
	
}

