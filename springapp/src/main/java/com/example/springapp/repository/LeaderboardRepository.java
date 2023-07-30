package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springapp.model.Leaderboard;

public interface LeaderboardRepository extends JpaRepository<Leaderboard, Long> {

}