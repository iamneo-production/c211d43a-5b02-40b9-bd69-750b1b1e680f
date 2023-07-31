package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.springapp.model.Leaderboard;
import com.example.springapp.service.LeaderboardService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin(origins = "https://8081-eefedbbaeeaaeabaccffcffeaeaadbdbabf.project.examly.io")
public class LeaderboardController {

    @Autowired
    private LeaderboardService leaderboardService;

    @GetMapping("/userleaderboard")
    public List<Leaderboard> getLeaderboard() {
        return this.leaderboardService.getLeaderboard();
    }

    @GetMapping("/userleaderboard/{userleaderboardId}")
    public Leaderboard getLeaderboard(@PathVariable String userleaderboardId) {
        return this.leaderboardService.getLeaderboard(Long.parseLong(userleaderboardId));
    }

    @PostMapping("/userleaderboard")
    public Leaderboard addLeaderboard(@RequestBody Leaderboard leaderboard) {
        return this.leaderboardService.addLeaderboard(leaderboard);
    }
}