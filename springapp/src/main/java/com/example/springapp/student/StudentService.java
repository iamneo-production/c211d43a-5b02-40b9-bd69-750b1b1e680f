package com.example.springapp.student;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.Month;
import java.util.*;


@Service
public class StudentService {
    public List<Student> getStudents(){
		return List.of(
			new Student(
				1L,
				"Vignesh",
				"Vignesh@gmail.com",
				LocalDate.of(2000,Month.JUNE,2),
				23
			)
		);
	}
    
}
