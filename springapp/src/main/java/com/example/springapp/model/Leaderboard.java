package main.java.com.example.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Leaderboard {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String name;
	private String score;
	private String email;
	private String location;
	public long getId() {
		return id;
	}
	
	public Leaderboard() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getScore() {
		return score;
	}
	public void setScore(String score) {
		this.score = score;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Leaderboard(long id, String name, String score, String email, String location) {
		super();
		this.id = id;
		this.name = name;
		this.score = score;
		this.email = email;
		this.location = location;
	}
	@Override
	public String toString() {
		return "Leaderboard [id=" + id + ", name=" + name + ", score=" + score + ", email=" + email + ", location="
				+ location + "]";
	}	
}