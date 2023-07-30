package com.example.springapp.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "payment")
public class Paymentmodel {
  
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name= "payment_id")
		private Long id;
	    private Long userId;
	    
		@OneToMany(cascade = CascadeType.ALL)
		@JoinColumn(name="allcourse_id",referencedColumnName = "payment_id")
	    private List<CourePayement> allCourseId = new ArrayList<>();
    public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}


	public List<CourePayement> getAllCourseId() {
		return allCourseId;
	}


	public void setAllCourseId(List<CourePayement> allCourseId) {
		this.allCourseId = allCourseId;
	}




    
    



 

	
}
