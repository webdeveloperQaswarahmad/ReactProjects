import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "react-bootstrap";
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import "./randompasswodgenerator.css";
import Button from "react-bootstrap/Button";

function ResendEmail() {
  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="text-center  p-1 color-dark">
          <p className="fs-2 fw-bold">
            {" "}
            Kwik<span className="opacity-50">trust</span>
          </p>
        </div>
        <div className="col-md">
          <div className="mx-auto w-50 bg-white p-3 rounded">
            <div className="card-body ">
              <p className="card-text fs-5 ms-5">Hi Name,</p>
              <p className="card-text w-50 ms-5 ">
                You`ve requested a new password. Below is your randomly
                generated new password Use this to login. You can change this in
                the admin date.
              </p>
              <div className="row bg-white ">
                <div className="col-md text-center mt-2 ">
                  <a
                    href="#"
                    className="btn w-50 fs-6"
                    style={{ backgroundColor: "#E5ECEF" }}
                  >
                    AWknjbn*9a@
                  </a>
                </div>
              </div>
              <div className="row   ">
                <div className="col-md text-center mt-5 ">
                  <a
                    href="#"
                    class="btn w-50 bg-dark text-white  "
                    style={{ borderRadius: "100px" }}
                  >
                    <Nav.Link className="border-bottom-2" href="/">Back to KwikTrust Admin</Nav.Link>
                    
                  </a>
                </div>
              </div>
              <div
                className="row rounded-bottom mt-3"
                style={{ backgroundColor: "#36EB89" }}
              >
                <div className="col-md">
                  <p class="card-text p-3 fs-5 fw-bold mx-auto">
                    You`re receiving this message because this email is
                    associated with an account with KwikTrust
                  </p>
                </div>
                <div className="row">
                  <div className="col-md mb-4">
                    
                    <span className="text-start opacity-75 " style={{fontSize:"10px"}}>
                      2022©KwikT Ltd. All Rights Reserved
                    </span>
                    <span className="d-flex float-end ">
                    <  CheckIcon/>
                      <DeleteIcon/>
                    </span>
                    <hr></hr>
                    <p>
                      <Nav.Link className="border-bottom-2" href="/ContactUs">Contact Us</Nav.Link>
                    </p>
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
export default ResendEmail;
