package com.axis.service;



import java.util.List;

import org.apache.commons.lang.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.model.User;
import com.axis.repository.UserRepository;
@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserRepository userRepository;
	@Override
	public User addUser(User user) {
		User user1=userRepository.save(user);
		return user1;
	}
	@Override
	public List<User> getAllUsers() {
		List<User> user2=userRepository.findAll();
		return user2;
	}
	@Override
	public String findByuserName(String userName) {
		User user3=userRepository.findByUserName(userName);
		if(org.springframework.util.ObjectUtils.isEmpty(user3)) {
			return "Invalid User";
		}
		else {
			return "Valid User";
		}
	}
	@Override
	public String addUser1(User user) {
		User user4=userRepository.save(user);
		if(true) {
			return " User Added Sucessfully !!";
		}
		else {
			return "User already existed";
		}
	}
	@Override
	public String deleteUser(int id) {
		userRepository.deleteById(id);
		return "Delete Successfully !!";
	}
	

}
