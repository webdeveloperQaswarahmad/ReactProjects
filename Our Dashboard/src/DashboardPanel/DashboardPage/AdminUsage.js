import React from "react";
import "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
// import ListGroup from "react-bootstrap/ListGroup";
import "./admin_usage.css";
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
            <div className="mt-4 ms-3  ">
              <div>
                <div className="userusagelogout">Log out</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-10 bg-white">
          <div>
            <div className="row  bg-white ">
              <div>
                <p className="yourdashboard ms-5 ">Users </p>
                <span className=" ms-5 active">Active users</span>
              </div>
            </div>
            <div className="row mt-2 bg-white justify-content-start">
                <div className="col-md-4  ms-5 mb-1 rounded text-center activeusers " style={{ width: "12rem",height:"17vh" }}>
                <p className=" fs-5 fw-1 mt-1 ">7 days </p>
                <span className=" fs-2 fw-5 ">100</span>
                </div>
                <div className="col-md-4 text-center rounded activeusers ms-5 mb-1  " style={{ width: "12rem",height:"17vh" }}>
                <p className=" fs-5 fw-1 mt-1 ">30 days </p>
                <span className="fs-2 fw-5 ">100</span>
                </div>
                <div className="col-md-4 ms-5  text-center rounded activeusers mb-1" style={{ width: "12rem",height:"17vh" }}>
                <p className="fs-5 fw-1 mt-1  ">3 months </p>
                <span className="fs-2 fw-5 ">100</span>
                </div>

            </div>
            <div className="row mt-2 mb-2 bg-white">
                <div>
                <span className=" ms-5 active">Inactive users</span>
                </div>
            <div className="col-md-4  ms-5 rounded text-center activeusers mb-1 " style={{ width: "12rem",height:"17vh" }}>
                <p className=" fs-5 fw-1 mt-1 ">7 days </p>
                <span className=" fs-2 fw-5 ">100</span>
                </div>
                <div className="col-md-4 text-center rounded activeusers ms-5 mb-1 " style={{ width: "12rem",height:"17vh" }}>
                <p className=" fs-5 fw-1 mt-1 ">30 days </p>
                <span className="fs-2 fw-5 ">100</span>
                </div>
                <div className="col-md-4 ms-5 text-center rounded activeusers mb-1 " style={{ width: "12rem",height:"17vh" }}>
                <p className="fs-5 fw-1 mt-1  ">3 months </p>
                <span className="fs-2 fw-5 ">100</span>
                </div>

            </div>
            <div className="row mt-2 mb-2 bg-white">
            <div>
                <span className=" ms-5 active">Accounts expiring</span>
                </div>
            <div className="col-md-4  ms-5 rounded text-center   activeusers mb-1" style={{ width: "12rem",height:"17vh" }}>
                <p className=" fs-5 fw-1 mt-1 ">7 days </p>
                <span className=" fs-2 fw-5 ">100</span>
                </div>
                <div className="col-md-4 text-center rounded activeusers ms-5 mb-1 " style={{ width: "12rem",height:"17vh" }} >
                <p className=" fs-5 fw-1 mt-1 ">30 days </p>
                <span className="fs-2 fw-5 ">100</span>
                </div>
                <div className="col-md-4  ms-5 text-center rounded activeusers mb-1 " style={{ width: "12rem",height:"17vh" }}>
                <p className="fs-5 fw-1 mt-1  ">3 months </p>
                <span className="fs-2 fw-5 ">100</span>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminDash;
