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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.dto.StudentDto;
import com.axis.model.Student;
import com.axis.service.StudentService;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1")
public class StudentController {
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/addStudent")
	public ResponseEntity<StudentDto> addStudent(@RequestBody StudentDto studentDto){
		StudentDto studentDto1=studentService.addStudent(studentDto);
		return new ResponseEntity<StudentDto>(studentDto1,HttpStatus.CREATED);
	}
	
	@GetMapping("/students")
	public ResponseEntity<List<StudentDto>> getAllStudents(){
		List<StudentDto>students=studentService.getAllStudents();
		return new ResponseEntity<List<StudentDto>>(students,HttpStatus.OK);
	}
	@GetMapping("/student/{id}")
	public ResponseEntity<StudentDto> getStudentById(@PathVariable("id") int id){
		StudentDto studentDto2=studentService.getStudentById(id);
		return new ResponseEntity<StudentDto>(studentDto2,HttpStatus.OK);
	}
	@PutMapping("/update/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable("id") int id,@RequestBody Student student){
		Student student3=studentService.updateStudent(id, student);
		return new ResponseEntity<Student>(student3,HttpStatus.OK);
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteStudentById(@PathVariable("id") int id){
		String message=studentService.deleteById(id);
		return new ResponseEntity<String>(message,HttpStatus.OK);
	}
	@PostMapping("/add")
	public ResponseEntity<String> add(@RequestBody Student student){
		String student1=studentService.add(student);
		return new ResponseEntity<String>(student1,HttpStatus.CREATED);
	}
}
