import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";


function AddStudent1(){
    const[id,setId]=useState('');
    const[fname,setFname]=useState('');
    const[lname,setLname]=useState('');
    const[email,setemail]=useState('');
    const[phno,setPhno]=useState('');
    const navigate=useNavigate();

    const register =() =>{
        let data={
            id:id,
            firstName:fname,
            lastName:lname,
            email:email,
            phoneNumber:phno,
            
            

        }
        fetch('http://localhost:9005/api/v1/add',
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

            if(text==='Student details added success'){
                alert("Student details Added Successfull");
                navigate('/courselist');
            }else{
                alert("Student details added failed");
            }
        })
        
    }

    return(
        <body>
            <div id="main">
            <div id="form">
            <h2 id="headding">Add Course Details</h2><br/><br/>
            <input type="text" placeholder=" Enter courseid"  onChange={(e)=> setId(e.target.value)}/><br/><br/>
            <input type="text" placeholder=" Enter coursename"  onChange={(e)=> setFname(e.target.value)}/><br/><br/>
            <input type="text" placeholder=" Enter startdate" onChange={(e)=> setLname(e.target.value)}/><br/><br/>
            <input type="text" placeholder=" Enter enddate" onChange={(e)=> setemail(e.target.value)}/><br/><br/>
            <input type="text" placeholder=" Enter payment" onChange={(e)=> setPhno(e.target.value)}/><br/><br/>
            <div id="btnn">
            <Link id="font" to="/studentlist"> <button id="btnn" onClick={()=>register()}>Add</button></Link><br/><br/>
            </div>
            
            </div>
            </div>
        </body>
        
    );
}
export default AddStudent1;