package com.example.springapp.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Quiz")
public class Assessment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String questiontitle;
	private String optiona;
	private String optionb;
	private String optionc;
	private String optiond;
	private String correctans;
	
	

	
	
	
	public Assessment() {
	
	}


	public Assessment(int id, String questiontitle, String optiona, String optionb, String optionc, String optiond,
			String correctans) {
	
		this.id = id;
		this.questiontitle = questiontitle;
		this.optiona = optiona;
		this.optionb = optionb;
		this.optionc = optionc;
		this.optiond = optiond;
		this.correctans = correctans;
	}


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getQuestiontitle() {
		return questiontitle;
	}
	public void setQuestiontitle(String questiontitle) {
		this.questiontitle = questiontitle;
	}
	public String getOptiona() {
		return optiona;
	}
	public void setOptiona(String optiona) {
		this.optiona = optiona;
	}
	public String getOptionb() {
		return optionb;
	}
	public void setOptionb(String optionb) {
		this.optionb = optionb;
	}
	public String getOptionc() {
		return optionc;
	}
	public void setOptionc(String optionc) {
		this.optionc = optionc;
	}
	public String getOptiond() {
		return optiond;
	}
	public void setOptiond(String optiond) {
		this.optiond = optiond;
	}
	public String getCorrectans() {
		return correctans;
	}
	public void setCorrectans(String correctans) {
		this.correctans = correctans;
	}
	
	
	
	
}
