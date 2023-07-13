package com.example.learningportal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.learningportal.entity.UserInfo;
import com.example.learningportal.repository.UserInfoRepository;

@Service
public class UserService {

	@Autowired
	private UserInfoRepository repository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	
//	 List<UserDto> userDtoList = new ArrayList<>();

//	    @PostConstruct
//	    public void loadUsersFromDB() {
//	    	for (int i = 1; i <= 100; i++) {
//	    	    UserDto userDto = new UserDto();
//	    	    userDto.setId(i);
//	    	    userDto.setName("user " + i);
//	    	    userDtoList.add(userDto);
//	    	}
//	    }


//	    public List<UserDto> getUserDto() { return userDtoList; }

//	    public UserDto getUserDto(int id) {
//	        return userDtoList.stream()
//	                .filter(userDto -> userDto.getId() == id)
//	                .findAny()
//	                .orElseThrow(() -> new RuntimeException("user " + id + " not found"));
//	    }

	    public String addUser(UserInfo userInfo) {
	        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
	        repository.save(userInfo);
	        return "user added to system ";
	    }
	}
	   