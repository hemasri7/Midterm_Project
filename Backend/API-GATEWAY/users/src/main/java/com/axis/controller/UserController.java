package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.User;
import com.axis.service.UserService;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1")
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/addUser")
	public ResponseEntity<User> addUser(@RequestBody User user){
		User user1=userService.addUser(user);
		return new ResponseEntity<User>(user1,HttpStatus.OK);
	}
	@GetMapping("/users")
	public ResponseEntity<List<User>> getAllUsers(){
		List<User> user2=userService.getAllUsers();
		return new ResponseEntity<List<User>>(user2,HttpStatus.OK);
	}
	@GetMapping("/user/{userName}")
	public ResponseEntity<String> getByUsername(@PathVariable("userName") String userName){
		String user3=userService.findByuserName(userName);
		return new ResponseEntity<String>(user3,HttpStatus.OK);
	}
	@PostMapping("/addUser1")
	public ResponseEntity<String> addUser1(@RequestBody User user){
		String user4=userService.addUser1(user);
		return new ResponseEntity<String>(user4,HttpStatus.OK);
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable("id") int id){
		return new ResponseEntity<String>(userService.deleteUser(id),HttpStatus.OK);
	}

}
