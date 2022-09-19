import React from "react";
import "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
// import ListGroup from "react-bootstrap/ListGroup";
import "./admindash.css";
function Document() {
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
                <p className="yourdashboard ms-5">Document types(12,000)</p>
              </div>
              <div className="row">
              <div className="col text-center pt-4 totalusers rounded ms-5 mt-3  ">
                <p>Total Users</p>
                <p>100</p>
              </div>
              <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                <p>No.PNG</p>
                <p>100</p>
              </div>
              <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                <p>No.JPG</p>
                <p>100</p>
              </div>
              <div className="col text-center pt-4 totalusers rounded ms-5  mt-3">
                <p>No.MP3</p>
                <p>100</p>
              </div>
              <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                <p>No.MP4</p>
                <p>100</p>
              </div>
              
              </div>

              <div className="row">
              <div className="col text-center pt-4 totalusers rounded ms-5 mt-3  ">
                <p>No.PPT</p>
                <p>100</p>
              </div>
              <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                <p>No.XLS</p>
                <p>100</p>
              </div>
              <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                <p>No.XML</p>
                <p>100</p>
              </div>
              <div className="col text-center pt-4 totalusers rounded ms-5  mt-3">
                <p>No.MOV</p>
                <p>100</p>
              </div>
              <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                <p>No.PDF</p>
                <p>1000</p>
              </div>
              
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Document;
