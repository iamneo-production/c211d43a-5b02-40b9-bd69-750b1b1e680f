package com.example.springapp.controller;


import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.access.prepost.PreAuthorize;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.dto.AuthRequest;
import com.example.springapp.dto.Token;
import com.example.springapp.dto.Token;
import com.example.springapp.model.UserInfo;
import com.example.springapp.service.JwtService;
import com.example.springapp.service.JUserService;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
@RestController
@RequestMapping("/users")
public class JUserController {

	@Autowired
	private JUserService service;

	@Autowired
	private JwtService jwtService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@GetMapping("/welcome")
	public String welcome() {
		return "Welcome this endpoint is not secure";
	}

	@GetMapping("/all")
//	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public String getAllTheUserDto() {
		return "Iam ALl";
//	        return service.getUserDto();
	}
	
	@CrossOrigin(origins = "https://8081-bbcbbfdbbaaeabaccffcffeaeaadbdbabf.project.examly.io/")
	@PostMapping("/new")
	public String addNewUser(@RequestBody UserInfo userInfo) {
		userInfo.setRoles("ROLE_USER"); 
		return service.addUser(userInfo);
	}

	@GetMapping("/usernew")
//	@PreAuthorize("hasAuthority('ROLE_USER')")
	public String getUserDtoById() {
		return "Iam userr";
	}

	@CrossOrigin(origins = "https://8081-bbcbbfdbbaaeabaccffcffeaeaadbdbabf.project.examly.io/")
	@PostMapping("/login")
	public Map<Object,Object> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
		if (authentication.isAuthenticated()) {
			return jwtService.generateToken(authRequest.getEmail());
		} else {
			throw new UsernameNotFoundException("invalid user request !");
		}

	}
}