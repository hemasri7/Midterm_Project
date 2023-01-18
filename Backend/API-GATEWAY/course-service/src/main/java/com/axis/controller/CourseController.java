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

import com.axis.dto.CourseDto;
import com.axis.model.Course;
import com.axis.service.CourseService;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1")
public class CourseController {
	@Autowired
	private CourseService courseService;
	@PostMapping("/addCourse")
	public ResponseEntity<CourseDto> addCourse(@RequestBody CourseDto courseDto){
		CourseDto courseDto1=courseService.addCourse(courseDto);
		return new ResponseEntity<CourseDto>(courseDto1,HttpStatus.CREATED);
	}
	@GetMapping("/courses")
	public ResponseEntity<List<CourseDto>> getAllCourses(){
		List<CourseDto>courses=courseService.getAllCourses();
		return new ResponseEntity<List<CourseDto>>(courses,HttpStatus.OK);
	}
	@GetMapping("/course/{courseId}")
	public ResponseEntity<CourseDto> getCourseById(@PathVariable("courseId") String courseId){
		CourseDto course=courseService.getCourseById(courseId);
		return new ResponseEntity<CourseDto>(course,HttpStatus.OK);
	}
	@DeleteMapping("/delete/{courseId}")
	public ResponseEntity<String> deleteCourseById(@PathVariable("courseId") String courseId){
		String message=courseService.deleteByCourseId(courseId);
		return new ResponseEntity<String>(message,HttpStatus.OK);
		
	}
	@PutMapping("/update/{courseId}")
	public ResponseEntity<Course> updateCourse(@PathVariable("courseId") String courseId,@RequestBody Course course){
		Course course2=courseService.updateCourse(courseId, course);
		return new ResponseEntity<Course>(course2,HttpStatus.OK);
	}
	@PostMapping("/add")
	public ResponseEntity<String> add(@RequestBody Course course){
		String course3=courseService.add(course);
		return new ResponseEntity<String>(course3,HttpStatus.CREATED);
	}
}
