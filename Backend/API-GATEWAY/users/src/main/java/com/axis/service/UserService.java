package com.axis.service;

import java.util.List;

import com.axis.model.User;

public interface UserService {
	public User addUser(User user);
	public List<User> getAllUsers();
	public String findByuserName(String userName);
	public String addUser1(User user);
	public String deleteUser(int id);

}
