import React from "react";
import "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import download2  from './download2.png'
// import ListGroup from "react-bootstrap/ListGroup";
import "./admindash.css";
function Location() {
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
  return (
    <div className="container-fluid bg-light">
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
        <div className="col-md-10 bg-light">
          <div>
            <div className="row bg-light ">
              <div>
                <p className="yourdashboard ms-5">Your Dashboard</p>
              </div>
              <div className=" col-md bg-light">
              <img className="ms-5" style={{width:"45rem", height:"70vh"}} src={download2}  alt="Avatar"/> 
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Location;
