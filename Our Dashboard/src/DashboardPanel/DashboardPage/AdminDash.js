import React from "react";
import "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
// import ListGroup from "react-bootstrap/ListGroup";
import "./admindash.css";
function AdminDash() {
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
  const handleLocation=()=>{
    navigate('/Location')
  }
  const handleDocument=()=>{
    navigate('/Document')
  }
  const handleUsage=()=>{
    navigate('/AdminUsage')
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
        <div className="col-md-10 bg-light">
          <div>
            <div className="row bg-white ">
              <div>
                <p className="yourdashboard ms-5">Your Dashboard</p>
              </div>
              <div className="row">
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3  ">
                  <p>Total Users</p>
                  <p>100</p>
                </div>
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                  <p>Total KYC approved users</p>
                  <p>100</p>
                </div>
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                  <p>Total active users</p>
                  <p>100</p>
                </div>
                <div className="col text-center pt-4 totalusers rounded ms-5  mt-3">
                  <p>Total churned</p>
                  <p>100</p>
                </div>
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                  <p>Incomplete KYC</p>
                  <p>100</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                  <p>No.packages sold</p>
                  <p>100</p>
                </div>
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3  ">
                  <p>Total USD earned</p>
                  <p>100</p>
                </div>
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                  <p>No.files Approved</p>
                  <p>100</p>
                </div>
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                  <p>No.files pending</p>
                  <p>100</p>
                </div>
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                  <p>Total sign ups</p>
                  <p>1000</p>
                </div>
              </div>
              <div className="row ">
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3  ">
                  <p>No.signatories approved</p>
                  <p>100</p>
                </div>
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                  <p>No.NFTs Minted</p>
                  <p>100</p>
                </div>
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                  <p>No.SNFTs Minted</p>
                  <p>100</p>
                </div>
                <div className="col text-center pt-4 totalusers rounded ms-5  mt-3">
                  <p>No.organisations</p>
                  <p>100</p>
                </div>
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                  <p>Total verified users</p>
                  <p>100</p>
                </div>
              </div>
              <div className="row">
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3  ">
                <Nav.Link
                    className="active w-75 ms-4 fs-5 text-center"
                    onClick={()=>handleLocation()}
                  >
                    User Locations
                  </Nav.Link>
                  
                </div>
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                  <p>No.User plans</p>
                  <p>100</p>
                </div>
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3 ">
                <Nav.Link
                    className="active w-75 ms-4 fs-5 text-center"
                    onClick={()=>handleDocument()}
                  >
                    No.Document types
                  </Nav.Link>
                </div>
                <div className="col text-center pt-4 totalusers rounded ms-5  mt-3">
                  <p>Total storage used</p>
                  <p>1000GB</p>
                </div>
                <div className="col text-center pt-4 totalusers rounded ms-5 mt-3  ">
                  <Nav.Link
                    className="active w-75 ms-4 fs-5 text-center"
                    onClick={()=>handleUsage()}
                  >
                    Total active users
                  </Nav.Link>
                  {/* <Nav.Link href="/AdminUsage">Total active users</Nav.Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminDash;
