package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Notes;
import com.example.springapp.repository.NotesRepository;

@Service
public class NotesServiceImpl implements NotesService {

    @Autowired
    private NotesRepository notesRepository;

    public NotesServiceImpl() {
        // Default constructor
    }

    @Override
    public List<Notes> getNotes() {
        return notesRepository.findAll();
    }

    @Override
    public Notes addNotes(Notes notes) {
        notesRepository.save(notes);
        return notes;
    }

    @Override
    public void deleteNotes(long parseLong) {
        Notes entity = notesRepository.findById(parseLong).orElse(null);
        if (entity != null) {
            notesRepository.delete(entity);
        }
    }
}
