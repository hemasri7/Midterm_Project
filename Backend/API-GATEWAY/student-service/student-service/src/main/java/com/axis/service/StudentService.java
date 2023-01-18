package com.axis.service;


import java.util.List;

import com.axis.dto.StudentDto;
import com.axis.model.Student;

public interface StudentService {
	public StudentDto addStudent(StudentDto studentDto); 
	public List<StudentDto> getAllStudents();
	public StudentDto getStudentById(int id);
	public Student updateStudent(int id,Student student);
	public String deleteById(int id);
	public String add(Student student);

}
