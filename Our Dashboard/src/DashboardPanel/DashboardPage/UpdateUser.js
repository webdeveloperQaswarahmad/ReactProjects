// import React, { useState,useEffect } from "react";
// import "react-bootstrap";
// import { Link } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
// import { useNavigate } from "react-router-dom";
// import Form from "react-bootstrap/Form";

// import './updateuser.css'
// function UpdateUser() {
//     const[subscription,setSubscription]=useState("")
//     const[id,setId]=useState("")
  

//     function getUsers() {
//       fetch("http://localhost:4000/todo").then((result) => {
//         result.json().then((resp) => {
//           // console.warn(resp)
//           setUser(resp)
//           setName(resp[0].name)
//           setMobile(resp[0].mobile)
//           setEmail(resp[0].email)
//           setUserId(resp[0].id)
//         })
//       })
//     }





//     function selectUser(id)
//     {
//       let item=subscription[id-1];
//       setSubscription(item.subscription)

//     }

//     function updateUser()
//     {
//       let item={subscription}
//       console.warn("item",item)
//       fetch(`http://localhost:3000/users/${id}`, {
//         method: 'PUT',
//         headers:{
//           'Accept':'application/json',
//           'Content-Type':'application/json'
//         },
//         body:JSON.stringify(item)
//       }).then((result) => {
//         result.json().then((resp) => {
//           console.warn(resp)
//           getUsers()
//         })
//       })
//     }
       
      
     
//   const navigate = useNavigate();
//   const handleLogin = () => {
//     navigate("/AdminDash");
//   };

//   return (
//     <div>
//       <div className="container-fluid">
//         <div className="row">
//           <div
//             className="col-md-5 heading1 "
//             style={{ backgroundColor: "#36EB89" }}
//           >
//             <p className="fs-3 fw-bold">
//               Kwik<span className="bg-opacity-50">trust</span>
//             </p>
//           </div>
//           <div className="col-md-7 mt-5  mx-auto">
//             <div className=" mt-5 ">
//               <div className="col-md-10 mt-5 mx-auto ">
//                 <div>
//                   <h4 className=" edituser text-center text-dark mt-5 mb-1">
//                     Change customer subscription
//                   </h4>
//                   <p className="mx-auto edituser1   text-dark w-50 ">
                    
//                     You can change a customers subscription to either upgrade or downgrade
//                   </p>
                  
//                   <Form className=" text-start w-50 mx-auto mt-4 h-100  ">
                
//       <Form.Group className="text-start mb-3 mt-1 text-dark" controlId="formBasicPassword">
//         <Form.Label className="edituser2">Subscription type</Form.Label>
//         <Form.Control className="edituser3" type="text" required name="subscription" value={subscription} placeholder="Enterprise"  onChange={(e)=>{setSubscription(e.target.value)}} />
//       </Form.Group>
//       {/* <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicEmail">
//         <Form.Label>KYC`d</Form.Label>
//         <Form.Control type="text" required name="name" value={kyc} placeholder="Here Only Enter Yes or No" onChange={(e)=>{setKyc(e.target.value)}} />
        
//       </Form.Group>

     
//       <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicPassword">
//         <Form.Label>Date joined</Form.Label>
//         <Form.Control type="date" required name="rating" value={date} placeholder="Date joined" onChange={(e)=>{setDate(e.target.value)}} />
//       </Form.Group>



//       <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicPassword">
//         <Form.Label>Last Active</Form.Label>
//         <Form.Control type="date" required name="rating" value={active} placeholder="Date joined" onChange={(e)=>{setActive(e.target.value)}} />
//       </Form.Group>
//       <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicPassword">
//         <Form.Label>User Number</Form.Label>
//         <Form.Control type="number" required name="rating" value={number} placeholder="#12345" onChange={(e)=>{setNumber(e.target.value)}} />
//       </Form.Group>

//       <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicPassword">
//         <Form.Label>Subscription</Form.Label>
//         <Form.Control type="text" required name="rating" value={subscription} placeholder="Subscriptoin Enter Yes or No" onChange={(e)=>{setSubscription(e.target.value)}} />
//       </Form.Group>
//  */}

//       {/* <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicPassword">
//         <Form.Label>Date joined</Form.Label>
//         <Form.Control type="number" required name="rating" value={date} placeholder="Date joined" onChange={(e)=>{setDate(e.target.value)}} />
//       </Form.Group> */}


//       <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicPassword">
//         {/* <Form.Label>Actions</Form.Label>
//         <Form.Control type="text" required name="address" value={action} placeholder="Write text Delete" onChange={(e)=>{setAction(e.target.value)}} /> */}
//         <Button onClick={saveUser} variant="primary" type="submit" className="edituser4 text-dark mt-2 w-100 mb-5" style={{ backgroundColor: "#36EB89" }}>
//         Save 
//       </Button>
//       </Form.Group>
      
      
//     </Form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default UpdateUser;
