import { useState } from 'react';
import {Button} from 'react-bootstrap';
import {Link, Navigate, redirect, useNavigate}from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function Login(){
    const [userName,setusername]  =useState(''); 
    const [password,setpassword]=useState(''); 
    const navigate=useNavigate();
    const [redirect,setRedirect]=useState(false);


    // let data={
    //     userName:userName,
    //     password:password
    // }

    // console.log(email+password+data.name)

    const Logins=()=>{
        fetch( `http://localhost:8006/api/v1/user/${userName}`,
        {
            method:"GET",
         }) .then(response=>{return response.text()})
            .then((text)=>{
            console.log(text)
            if(text==='Valid User'){
                alert(" Login Successfull");
                navigate("/adminhome");
            }
            else{
                alert("Enter valid Details");
            }
           })
    }
    
    return(
        <>
        <body>

            <div id="main">
            <div id="form">
                <h2 id="headding"> Login </h2><br/><br/>
                <input id="inpu" type="text" name="text" placeholder=" Enter Username" onChange={(e)=> setusername(e.target.value)}/><br/><br/>
                <input type="password" name="password" placeholder=" Enter password" onChange={(e)=> setpassword(e.target.value)}/><br/><br/>
                <div id="btnn">
                    <button id="btnn"><a href="#" onClick={Logins}> Submit </a></button><br/>
                </div>
                    <p id="font" >Don't have an account<br/>
                    <a href="/signup">Signup here</a></p>
            </div>
            </div>
    </body>
    </>
    );
}

export default Login;