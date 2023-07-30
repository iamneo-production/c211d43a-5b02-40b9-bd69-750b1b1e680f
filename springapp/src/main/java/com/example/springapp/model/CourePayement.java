package com.example.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "allcourseId")
public class CourePayement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public Long getCourseId() {
	return courseId;
}

public void setCourseId(Long courseId) {
	this.courseId = courseId;
}

public Long courseId;


}
