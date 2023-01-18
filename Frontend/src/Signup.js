import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import './App.css'

function Signup(){

    const[user,setUser]=useState('');
    const[pwd,setPwd]=useState('');
    const navigate=useNavigate();

    const register =() =>{
        let data={
            userName:user,
            password:pwd,
            

        }
        fetch('http://localhost:8006/api/v1/addUser1',
        {
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        } )
        .then(response=>{return response.text()})
        .then((text)=>{

            if(text==='User Added Sucessfully !!'){
                alert("Registration Successfull");
                navigate('/login');
            }else{
                alert("User already existed ");
            }
        })
        
    }

    return(
        <body>
            <div id="main">
            <div id="form">
            <h2 id="headding">Signup</h2><br/><br/>
            <input id="inpu" placeholder=" Enter username" type="text" onChange={(e)=> setUser(e.target.value)}/><br/><br/>
            <input type="Password" placeholder=" Enter Password" onChange={(e)=> setPwd(e.target.value)}/><br/><br/>
            <div id="btnn">
                <button id="btnn" onClick={()=>register()}>Register</button><br/><br/>
            </div>
            <Link   id="font" to="/login"> Already Registred !!!<br/>
            <a href="/signup">Login here </a></Link>
            </div>
            </div>
        </body>
        
    );
}
export default Signup