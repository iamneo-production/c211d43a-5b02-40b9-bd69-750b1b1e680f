package com.example.springapp.service;

import java.util.List;
import com.example.springapp.model.Notes;

public interface NotesService {

    List<Notes> getNotes();

    Notes addNotes(Notes notes);

    void deleteNotes(long parseLong);
}
