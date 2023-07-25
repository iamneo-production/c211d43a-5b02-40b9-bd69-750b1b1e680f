package com.example.springapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.springapp.model.Quiz;
import com.example.springapp.model.QuizSet;
import com.example.springapp.repository.QuizRepository;
import com.example.springapp.repository.QuizSetRepository;

@Service
public class QuizService {
    private final QuizRepository quizRepository;
    private final QuizSetRepository quizSetRepository;

    public QuizService(QuizRepository quizRepository, QuizSetRepository quizSetRepository) {
        this.quizRepository = quizRepository;
        this.quizSetRepository = quizSetRepository;
    }

    public void saveQuiz(Quiz quiz) {
        quizRepository.save(quiz);
    }

    public QuizSet saveQuizSet(QuizSet quizSet) {
        return quizSetRepository.save(quizSet);
    }
    
    public List<QuizSet> getQuizset()
    {
    	return quizSetRepository.findAll();
    }
    

    public void deleteQuizSetById(Long id) {
        quizSetRepository.deleteById(id);
    }
}
