import React, { useState,useEffect } from "react";
import 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function AddAdmin(){
    
    const[email,setEmail]=useState("")
    // const[kyc,setKyc]=useState("")
    // const[date,setDate]=useState("")
    // const[active,setActive]=useState("")
    // const[number,setNumber]=useState("")
    // const[subscription,setSubscription]=useState("")
    // const[action,setAction]=useState("")

    // useEffect(()=>{
    //   getUsers();
    // },[])

    // function getUsers(){
    //   fetch("http://localhost:3000/users").then((result)=>{
    //     result.json().then((response)=>{
    //       setSub
    //     })
    //   })
    // }



    function saveUser(){
      console.warn({email});
      let data ={email}
      fetch(" http://localhost:3000/users",{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }).then((result)=>{
        // console.warn("result",result);
        result.json().then((response)=>{
                console.warn("response",response);
        })
      })
    }
    
    

    return(
        <div className="mt-5">
            <h4 className="text-center text-dark mt-3 mb-3" >Add Admin Here</h4>
            <Form className="w-25 mx-auto h-100  ">
                
      <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicPassword">
        <Form.Label>Admin Email</Form.Label>
        <Form.Control type="email" required name="email" value={email} placeholder="email@gmail.com" onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>
      {/* <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicEmail">
        <Form.Label>KYC`d</Form.Label>
        <Form.Control type="text" required name="name" value={kyc} placeholder="Here Only Enter Yes or No" onChange={(e)=>{setKyc(e.target.value)}} />
        
      </Form.Group>

     
      <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicPassword">
        <Form.Label>Date joined</Form.Label>
        <Form.Control type="date" required name="rating" value={date} placeholder="Date joined" onChange={(e)=>{setDate(e.target.value)}} />
      </Form.Group>



      <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicPassword">
        <Form.Label>Last Active</Form.Label>
        <Form.Control type="date" required name="rating" value={active} placeholder="Date joined" onChange={(e)=>{setActive(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicPassword">
        <Form.Label>User Number</Form.Label>
        <Form.Control type="number" required name="rating" value={number} placeholder="#12345" onChange={(e)=>{setNumber(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicPassword">
        <Form.Label>Subscription</Form.Label>
        <Form.Control type="text" required name="rating" value={subscription} placeholder="Subscriptoin Enter Yes or No" onChange={(e)=>{setSubscription(e.target.value)}} />
      </Form.Group>
 */}

      {/* <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicPassword">
        <Form.Label>Date joined</Form.Label>
        <Form.Control type="number" required name="rating" value={date} placeholder="Date joined" onChange={(e)=>{setDate(e.target.value)}} />
      </Form.Group> */}


      <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicPassword">
        {/* <Form.Label>Actions</Form.Label>
        <Form.Control type="text" required name="address" value={action} placeholder="Write text Delete" onChange={(e)=>{setAction(e.target.value)}} /> */}
        <Button onClick={saveUser} variant="primary" type="submit" className="mt-3 mb-5">
        Add Admin 
      </Button>
      </Form.Group>
      
      
    </Form>
        </div>
    )
}
export default AddAdmin;