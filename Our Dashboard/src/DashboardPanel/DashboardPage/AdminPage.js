import React, { useEffect, useState } from "react";
import "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";

// import ListGroup from "react-bootstrap/ListGroup";
import "./admindash.css";
function AdminPage() {
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
  const [userId,setUserId]=useState(null)
  useEffect(() => {
    getList()
  }, []);
  console.warn(data);
  function getList(){
    fetch("http://localhost:3000/users").then((result) => {
      result.json().then((response) => {
        // console.warn("result",response)
        setData(response);
        
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
            <div className="mt-5 ms-3  ">
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
                <p className="yourdashboard ms-5">Admins</p>
              </div>
              <div className="row">
                <div >
                  <div className="col-md-10">
                    <Table striped className="ms-5" style={{width:"100%"}}>
                      <thead>
                        <tr
                          className="bg-dark text-white w-25"

                        >
                          <th>#</th>
                          <th>Email</th>
                          
                          <th>Password</th>
                          
                          <th>Actions</th>
                          
                        </tr>
                      </thead>
                      {data.map((item) => (
                        <tbody>
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            
                            <td ><span className="mt-3 text-dark rounded p-2 " style={{ backgroundColor: "#36EB89" }}>change password</span></td>
                            
                            <td> <Button onClick={()=>deleteUser(item.id)}>Delete</Button></td>
                            
                          </tr>
                        </tbody>
                      ))}
                    </Table>
                    <div className="col-md  ms-5">
                    <Nav.Link href="/AddNewAdmin" className="text-dark float-end  ms-5 p-2 rounded w-25 text-center " style={{ backgroundColor: "#36EB89",marginTop:"200px" }}>Add new Admin</Nav.Link>
                    <Nav.Link href="/UpdateUserData" className="text-dark float-end  ms-5 p-2 rounded w-25 text-center" style={{ backgroundColor: "#36EB89",marginTop:"200px" }}>Add new User</Nav.Link>

                </div>
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
export default AdminPage;
