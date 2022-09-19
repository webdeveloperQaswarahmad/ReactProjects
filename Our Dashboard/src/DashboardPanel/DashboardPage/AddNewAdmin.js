import React, { useState,useEffect } from "react";
import "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

// import "./LoginForm.css";
function AddNewAdmin() {
    const[email,setEmail]=useState("")
  

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
      
     
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/AdminDash");
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-5 heading1 "
            style={{ backgroundColor: "#36EB89" }}
          >
            <p className="fs-3 fw-bold">
              Kwik<span className="bg-opacity-50">trust</span>
            </p>
          </div>
          <div className="col-md-7 mt-5  mx-auto">
            <div className=" mt-5 ">
              <div className="col-md-10 mt-5 mx-auto ">
                <div>
                  <h4 className="text-center text-dark mt-5 mb-1">
                    Add New Admin Here
                  </h4>
                  <Form className="w-25 mx-auto mt-5 h-100  ">
                
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddNewAdmin;
