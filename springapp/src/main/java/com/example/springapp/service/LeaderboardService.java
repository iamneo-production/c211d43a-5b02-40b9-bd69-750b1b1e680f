package com.example.springapp.service;

import java.util.List;

import com.example.springapp.model.Leaderboard;

public interface LeaderboardService {

    public List<Leaderboard> getLeaderboard();

    public Leaderboard getLeaderboard(long userleaderboardId);

    public Leaderboard addLeaderboard(Leaderboard leaderboard);

}