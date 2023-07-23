package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Trainee;
import com.example.springapp.repository.TraineeRepository;

@Service
public class TraineeServiceImpl implements TraineeService {

    @Autowired
    private TraineeRepository traineeRepository;

    public TraineeServiceImpl() {
    }

    @Override
    public List<Trainee> getTrainee() {
        return traineeRepository.findAll();
    }

    @Override
    public Trainee getTrainee(long traineeId) {
        return traineeRepository.findById(traineeId).orElse(null);
    }

    @Override
    public Trainee addTrainee(Trainee trainee) {
        traineeRepository.save(trainee);
        return trainee;
    }

    @Override
    public Trainee updateTrainee(Trainee trainee) {
        traineeRepository.save(trainee);
        return trainee;
    }

    @Override
    public void deleteTrainee(long parseLong) {
        Trainee entity = traineeRepository.getOne(parseLong);
        traineeRepository.delete(entity);
    }
}
