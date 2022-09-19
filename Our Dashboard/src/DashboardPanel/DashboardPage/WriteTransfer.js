import React, { useEffect, useState } from "react";
import "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

// import ListGroup from "react-bootstrap/ListGroup";
import "./admindash.css";
function WriteTransfer() {
    const navigate = useNavigate();
    const handlePages=()=>{
      navigate('/User')
    }
    const handleDash=()=>{
      navigate('/AdminDash')
    }
    const handleAdmin=()=>{
      navigate('/AdminPage')
    }
    const handleTransfer=()=>{
      navigate('/WriteTransfer')
    }

  const [data, setData] = useState([]);
  const[subscription,setSubscription]=useState([])
    const [id,setId]=useState(null)



    
  useEffect(() => {
    getList()
  }, []);
  console.warn(data);

  function getList(){
    fetch("http://localhost:3000/users").then((result) => {
      result.json().then((response) => {
        // console.warn("result",response)
        setData(response);
        setSubscription(response[0].subscription)
      });
    });
  }

   function deleteUser(id){
    fetch(`http://localhost:3000/users/${id}`,{
      method:'DELETE'
    }).then((result)=>{
    result.json().then((response)=>{
      console.warn(response);
      getList()
    })
    })
   }


   function selectUser(id)
   {
     let item=[id-1];

         setSubscription(item.subscription);
         setId(item.id)
   }



   function updateUser()
   {
     let item={subscription}
     console.warn("item",item)
     fetch(`http://localhost:3000/users/${id}`, {
       method: 'PUT',
       headers:{
         'Accept':'application/json',
         'Content-Type':'application/json'
       },
       body:JSON.stringify(item)
     }).then((result) => {
       result.json().then((resp) => {
         console.warn(resp)
         getList()
       })
     })
   }




  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-2 sidebar"
          style={{ backgroundColor: "#36EB89" }}
        >
          <div>
            <div className="mt-3 mb-5 text-center">
              <div>
                <div>
                  <p className="fs-3 fw-bold ">
                    Kwik<span className="opacity-75">trust</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4  ms-3">
              <div>
              <Nav.Link className="mb-2 users" onClick={()=>handleDash()}>Dashboard</Nav.Link>
                <Nav.Link className="mb-2 users" onClick={()=>handlePages()}>Users</Nav.Link>
                {/* <Nav.Link
                    className="active mb-2 admins"
                    href="/User"
                  >
                    Admins
                  </Nav.Link> */}
                <Nav.Link className="mb-2 admins" onClick={()=>handleAdmin()}>Admins</Nav.Link>
                <Nav.Link className="mb-2 admins" onClick={()=>handleTransfer()}>Write Transfer</Nav.Link>
              </div>
            </div>
            <div className="mt-1 ms-3  ">
              <div>
                <div className="logout">Log out</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-10 bg-white">
          <div>
            <div className="row bg-white ">
              <div>
                <p className="yourdashboard ms-1">Write  Transfer</p>
              </div>
              <div className="row">
                <div>
                  <div>
                    <Table striped>
                      <thead>
                        <tr
                          className="bg-dark userheading"
                          style={{ width: "30%" }}
                        >
                          <th>#</th>
                          <th> Account Name</th>
                          <th>Bank Name</th>
                          <th>Sort Code </th>
                          <th>Account no.</th>
                          <th>IBAN</th>
                          <th colSpan={1}></th>
                          <th>Actions</th>
                          <th colSpan={3}></th>
                        </tr>
                      </thead>
                      {data.map((item) => (
                        <tbody>
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.kyc}</td>
                            <td>{item.date}</td>
                            <td>{item.active}</td>
                            <td>{item.number}</td>
                            <td>{item.subscription}</td>
                            <td> <Button href="/UpdateUser" onClick={() => selectUser(item.id)}>Edit</Button></td>
                            <td> <Button onClick={()=>deleteUser(item.id)}>Delete</Button></td>
                         
                            <td>Block{item.block}</td>
                          </tr>
                        </tbody>
                        
                      ))}
                      
                      <thead className="mt-5">
                      <h4>Subscription Plans</h4>
                      <tr
                          className="bg-dark userheading"
                          style={{ width: "30%" }}
                        >
                          <th>#</th>
                          <th> Plan name</th>
                          <th>Monthly Amount</th>
                          <th>Storage alloance(GB)</th>
                          <th colSpan={3}></th>
                          <th>actions </th>
                          
                          
                          
                          <th colSpan={3}></th>
                        </tr>
                      </thead>
                      
                        {data.map((item) => (
                        <tbody>
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            {/* <td>{item.kyc}</td> */}
                            
                            <td>{item.number}</td>
                            <td>{item.number}</td>
                            <td colSpan={3}></td>
                            <td> <Button href="/UpdateUser" onClick={() => selectUser(item.id)}>Edit</Button></td>
                            <td> <Button onClick={()=>deleteUser(item.id)}>Delete</Button></td>
                         
                            <td>Block{item.block}</td>
                          </tr>
                        </tbody>
                        
                      ))}
                      
                      <thead>
                      <h4>Plan details</h4>
                        <tr
                          className="bg-dark userheading"
                          style={{ width: "30%" }}
                        >
                          
                          <th>#</th>
                          <th> Plan name</th>
                          <th>No.users</th>
                          <th>Pending account </th>
                          
                          <th colSpan={3}></th>
                          <th>Action</th>
                          <th colSpan={3}></th>
                          
                        </tr>
                      </thead>
                        {data.map((item) => (
                        <tbody>
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.kyc}</td>
                            <td>{item.date}</td>
                            <td colSpan={3}></td>
                            {/* <td>{item.active}</td>
                            <td>{item.number}</td>
                            <td>{item.subscription}</td> */}
                           <td> <Button href="/UpdateUser" onClick={() => selectUser(item.id)}>Edit</Button></td>
                            <td> <Button onClick={()=>deleteUser(item.id)}>Delete</Button></td>                            <td>Block{item.block}</td>
                          </tr>
                        </tbody>
                        
                      ))}
                      
                    </Table>
           
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WriteTransfer;
