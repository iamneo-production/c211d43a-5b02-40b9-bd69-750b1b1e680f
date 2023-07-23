package com.example.springapp.service;

import java.util.List;

import com.example.springapp.model.Trainee;

public interface TraineeService {

    public List<Trainee> getTrainee();

    public Trainee getTrainee(long traineeId);

    public Trainee addTrainee(Trainee trainee);

    public Trainee updateTrainee(Trainee trainee);

    public void deleteTrainee(long traineeId);
}
