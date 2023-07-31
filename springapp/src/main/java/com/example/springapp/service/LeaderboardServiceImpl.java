package main.java.com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Leaderboard;
import com.example.springapp.repository.LeaderboardRepository;

@Service
public class LeaderboardServiceImpl implements LeaderboardService {

	@Autowired
	private LeaderboardRepository leaderboardRepository;
	
	public LeaderboardServiceImpl() {
		
		
	}
	
	
	@Override
	public List<Leaderboard> getLeaderboard() {
		return leaderboardRepository.findAll();
	}


	@Override
	public Leaderboard getLeaderboard(long userleaderboardId) {
	    return leaderboardRepository.findById(userleaderboardId).orElse(null);
	}


	@Override
	public Leaderboard addLeaderboard(Leaderboard leaderboard) {
		leaderboardRepository.save(leaderboard);
		return leaderboard;
	}
}