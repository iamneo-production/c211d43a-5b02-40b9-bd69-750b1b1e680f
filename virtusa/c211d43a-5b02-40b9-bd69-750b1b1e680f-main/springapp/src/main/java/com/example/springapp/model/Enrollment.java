package com.example.springapp.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "enrollment")
public class Enrollment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int enrollmentId;
    private int userId;
    private int courseId;

    public Enrollment() {
    }

	public Enrollment(int enrollmentId, int userId, int courseId) {
		super();
		this.enrollmentId = enrollmentId;
		this.userId = userId;
		this.courseId = courseId;
	}

	public int getEnrollmentId() {
		return enrollmentId;
	}


	public void setEnrollmentId(int enrollmentId) {
		this.enrollmentId = enrollmentId;
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	@Override
	public String toString() {
		return "Enrollment [enrollmentId=" + enrollmentId + ", userId=" + userId + ", courseId=" + courseId + "]";
	}

}
