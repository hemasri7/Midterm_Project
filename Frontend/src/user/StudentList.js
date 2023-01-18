import { useEffect,React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import  { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const StudentList=()=>{
    
    const deleteStudent=(id)=>{
        const urll=`http://localhost:9005/api/v1/delete/${id}`;
        axios.delete(urll).then(()=>{
            alert("Student Details Deleted Successfully!!!");
            axios.get("http://localhost:9005/api/v1/students").then( res => {           
                setStudentList(res.data);            
            })
        })
    }
   
    const [StudentList,setStudentList] = useState([]);
    const url = 'http://localhost:9005/api/v1/students';

  
    useEffect( () => {
        axios.get(url).then( res => {           
            setStudentList(res.data);            
        })
   }, []);

   function register(){
    alert("You are in the Student View ");
  }


    return(
        
        <div id="studentlist-div">
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
                <Nav.Link href="/studentlist">Home</Nav.Link>
                <NavDropdown title="Course Category" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/java">Java</NavDropdown.Item>
                <NavDropdown.Item href="/c">C</NavDropdown.Item>
                <NavDropdown.Item href="/python">Python</NavDropdown.Item>
                <NavDropdown.Item href="/springboot">Spring Boot</NavDropdown.Item>
                <NavDropdown.Item href="/reactjs"> ReactJs</NavDropdown.Item>
                <NavDropdown.Item href="/kotlin">Kotlin</NavDropdown.Item>
                <NavDropdown.Divider />
                </NavDropdown>
                {/* <Nav.Link href="studentlist">Student</Nav.Link> */}
            </Nav>
            <Nav>
                <Button variant="dark"><Link id="link" to="/login">Logout</Link></Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
            </div>
       
        <div>
            
         <Button id="create1" variant="outline-primary" size="lg"> <Link to="/addStudent1">Create</Link></Button>

            

            <center><table>
                <tr>
                    <td><th>ID</th></td>
                    <td><th>FirstName</th></td>
                    <td><th>LastName</th></td>
                    <td><th>Email</th></td>
                    <td><th>PhoneNumber</th></td>
                    <td><th>EDIT</th></td>
                    <td><th>DELETE</th></td>
                </tr> 
               

                 {StudentList.map( student => 
                                <tr>
                                    <td>{student.id}</td>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.email}</td>
                                    <td>{student.phoneNumber}</td>
                                    <td><Link to={`/editStudent/${student.id}`}>
                                          <Button id="btn1" variant="success"  type="Submit" >Edit</Button>
                                        </Link></td>
                                    <td><Button id="btn1"   variant="danger" onClick={()=>deleteStudent(student.id)}>Delete</Button> </td>
                                    </tr>
                                    )}
                                   
                                        
                                </table></center>
                               
        </div>
    </div>    
    )
}
export default StudentList;

