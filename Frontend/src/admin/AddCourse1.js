import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";


function AddCourse1(){
    const[id,setId]=useState('');
    const[name,setname]=useState('');
    const[startDate,setStartDate]=useState('');
    const[endDate,setEndDate]=useState('');
    const[payment,setPayment]=useState('');
    const navigate=useNavigate();

    const register =() =>{
        let data={
            courseId:id,
            courseName:name,
            startDate:startDate,
            endDate:endDate,
            payment:payment,
            
            

        }
        fetch('http://localhost:9006/api/v1/add',
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

            if(text==='Course details added success'){
                alert("Course details Added Successfull");
                navigate('/courselist');
            }else{
                alert("Course details added failed");
            }
        })
        
    }

    return(
        <body>
            <div id="main">
            <div id="form">
            <h2 id="headding">Add Course Details</h2><br/><br/>
            <input type="text" placeholder=" Enter courseid"  onChange={(e)=> setId(e.target.value)}/><br/><br/>
            <input type="text" placeholder=" Enter coursename"  onChange={(e)=> setname(e.target.value)}/><br/><br/>
            <input type="text" placeholder=" Enter startdate" onChange={(e)=> setStartDate(e.target.value)}/><br/><br/>
            <input type="text" placeholder=" Enter enddate" onChange={(e)=> setEndDate(e.target.value)}/><br/><br/>
            <input type="text" placeholder=" Enter payment" onChange={(e)=> setPayment(e.target.value)}/><br/><br/>
            <div id="btnn">
            <Link id="font" to="/courselist"> <button id="btnn" onClick={()=>register()}>Add</button></Link><br/><br/>
            </div>
            
            </div>
            </div>
        </body>
        
    );
}
export default AddCourse1;