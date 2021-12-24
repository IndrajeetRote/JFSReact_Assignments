package com.shruti.spring.jwt.mongodb.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shruti.spring.jwt.mongodb.models.User;
import com.shruti.spring.jwt.mongodb.repository.UserRepository;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class UserController {
	
	private final UserRepository userRepository;
	public UserController(UserRepository userRepository) {
		this.userRepository=userRepository;
	}
	
	@GetMapping("/all")
	public String allAccess() {
		return "Welcome";
	}
	
	
	@GetMapping("/user")
	@PreAuthorize("hasRole('USER') or  hasRole('ADMIN')")
	public String userAccess() {
		return "Welcome Customer";
	}

	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return "Welcome Admin";
	}
			

	@GetMapping("/allUsers")
	public List<User> getUsers(){
		return userRepository.findAll();
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteProduct(@PathVariable String id) {
		  userRepository.deleteById(id);
		
	}
	
}
