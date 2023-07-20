package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springapp.model.Notes;

public interface NotesRepository extends JpaRepository<Notes, Long> {

}
