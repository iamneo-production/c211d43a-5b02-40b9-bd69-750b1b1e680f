package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.Notes;
import com.example.springapp.service.NotesService;

@RestController
// @CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin(origins = "https://8081-eefedbbaeeaaeabaccffcffeaeaadbdbabf.project.examly.io")
public class NotesController {

    @Autowired
    private NotesService notesService;

    @GetMapping("/home")
    public String home() {
        return "this is home";
    }

    @GetMapping("/notes")
    public List<Notes> getNotes() {
        return this.notesService.getNotes();
    }

    @PostMapping("/notes")
    public Notes addNotes(@RequestBody Notes notes) {
        return this.notesService.addNotes(notes);
    }

    @DeleteMapping("/notes/{notesId}")
    public ResponseEntity<HttpStatus> deleteNotes(@PathVariable String notesId) {
        try {
            this.notesService.deleteNotes(Long.parseLong(notesId));
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
