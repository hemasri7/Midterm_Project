import { useEffect,React, useState } from 'react';
import axios from 'axios';
import {Navigate, useParams,useNavigate} from "react-router-dom";
import  { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const EditCourse = () => {
    const navigate=useNavigate();
    const{courseId}=useParams();
    const [course,setCourse]=useState({

        courseName:"",
        startDate:"",
        endDate:"",
        payment:"",
    });
    const{courseName,startDate,endDate,payment}=course;
    const onInputChange=e=>{
        setCourse({...course,[e.target.name]: e.target.value});
    };
    useEffect(()=>{
        loadCourse();
    },[]);

    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:9006/api/v1/update/${courseId}`,course);
        alert(" Course Details Updated Successfully");
        navigate("/adminhome");
    }
    const loadCourse=async () =>{
        const result=await axios.get(`http://localhost:9006/api/v1/course/${courseId}`);
       setCourse(result.data);
    };
    function register(){
        alert("You are in the Admin View Please login as Student User");
    }

    return(
        <body>
            <div>
            <Navbar expand="lg" id="color" >
            <Container fluid>
            <Navbar.Brand ><Button type="button" onClick={()=>register()} variant="outline-dark">Course Registration</Button></Navbar.Brand>
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
                <Nav.Link href="/studentlist">Student</Nav.Link>
                {/* <Nav.Link href="/courselist">Course</Nav.Link> */}
            </Nav>
            <Nav>
                <Button variant="dark"><Link id="link" to="/login">Logout</Link></Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
        <div id="card" className="container">
                <div className="w-50 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Update Course Details</h2>
                    <div >
                        
                        <div className="form-group">
                            <input type="text"className="form-control form-control-lg"   name="courseName" value={courseName} onChange={e=>onInputChange(e)}/><br/>
                        </div>
                        <div className="form-group">
                            <input type="text"className="form-control form-control-lg"  name="startDate" value={startDate} onChange={e=>onInputChange(e)}/><br/>
                        </div>
                        <div className="form-group">
                            <input type="text"className="form-control form-control-lg"name="endDate" value={endDate} onChange={e=>onInputChange(e)}/><br/>
                        </div>
                        <div className="form-group">
                            <input type="text"className="form-control form-control-lg"  name="payment" value={payment} onChange={e=>onInputChange(e)}/><br/>
                        </div>
                        <center><Link to="/courselist"><button className="btn btn-primary btn-block" onClick={onSubmit}> Update </button></Link></center>
                    </div>

                </div>
            </div>
        
        </body>
    );

}
export default EditCourse;