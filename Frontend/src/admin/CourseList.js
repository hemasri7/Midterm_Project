import { useEffect,React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import  { Link } from 'react-router-dom';
// import EditCourse from './EditCourse';
import axios from 'axios';
import '../App.css';


import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     CardTitle,
//     Row,
//     Col
//   } from "reactstrap";

const CourseList=()=>{
    
    const deleteCourse=(courseId)=>{
        const urll=`http://localhost:9006/api/v1/delete/${courseId}`;
        axios.delete(urll).then(()=>{
            alert("Course Details Deleted Successfully!!!");
            axios.get("http://localhost:9006/api/v1/courses").then( res => {           
                setCourseList(res.data);            
            })
        })
    }
   
    const [CourseList,setCourseList] = useState([]);
    const url = 'http://localhost:9006/api/v1/courses';

  
    useEffect( () => {
        axios.get(url).then( res => {           
            setCourseList(res.data);            
        })
   }, []);

   function register(){
    alert("You are in the Admin View Please login as Student User");
  }


    return(
        
        <div id="courselist-div">
        <div>
        <Navbar expand="lg" id="color" >
            <Container fluid>
            <Navbar.Brand ><Button type="button" onClick={()=>register()} variant="outline-dark">Course Register</Button></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="/courselist">Home</Nav.Link>
                <NavDropdown title="Course Category" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/java">Java</NavDropdown.Item>
                <NavDropdown.Item href="/c">C</NavDropdown.Item>
                <NavDropdown.Item href="/python">Python</NavDropdown.Item>
                <NavDropdown.Item href="/springboot">Spring Boot</NavDropdown.Item>
                <NavDropdown.Item href="/reactjs"> ReactJs</NavDropdown.Item>
                <NavDropdown.Item href="/kotlin">Kotlin</NavDropdown.Item>
                <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link href="studentlist">Student</Nav.Link>
                {/* <Nav.Link href="/courselist">Course</Nav.Link> */}
            </Nav>
            <Nav>
                <Button variant="dark"><Link id="link" to="/login">Logout</Link></Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
            </div>
       
        <div>
            
         {/* <CardBody>
           <Col> <h1  id="caption1">Courses </h1></Col> */}
           {/* <Col lg="10" md="4"> */}
            
            {/* </Col> */}
            {/* </CardBody> */}
            <Button id="create1" variant="outline-primary" size="lg"> <Link to="/addCourse1">Create</Link></Button>

            <center><table>
                <tr>
                    <td><th>ID</th></td>
                    <td><th>CourseName</th></td>
                    <td><th>Course StartDate</th></td>
                    <td><th>Course EndDate</th></td>
                    <td><th>Course Payment</th></td>
                    <td><th>EDIT</th></td>
                    <td><th>DELETE</th></td>
                </tr> 
               

                 {CourseList.map( course => 
                                <tr>
                                    <td>{course.courseId}</td>
                                    <td>{course.courseName}</td>
                                    <td>{course.startDate}</td>
                                    <td>{course.endDate} </td>
                                    <td>{course.payment}</td>
                                    <td><Link to={`/editCourse/${course.courseId}`}>
                                          <Button id="btn1" variant="success"  type="Submit" >Edit</Button>
                                        </Link></td>
                                    <td><Button id="btn1"   variant="danger" onClick={()=>deleteCourse(course.courseId)}>Delete</Button> </td>
                                    </tr>
                                    )}
                                   
                                        
                                </table></center>
                               
        </div>
    </div>    
    )
}
export default CourseList;

