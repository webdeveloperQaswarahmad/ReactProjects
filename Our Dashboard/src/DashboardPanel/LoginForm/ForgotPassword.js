import React from "react";
import "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./LoginForm.css";
function LoginForm() {
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
          <div className="col-md-7 mt-5 mx-auto">
            <div className=" mt-5 ">
              <div className="col-md-10 mt-5 mx-auto ">
                <div className=" mt-5 mx-auto" style={{ width: "22rem" }}>
                  <div>
                    <p className="temporarypassword ">
                      We`ve sent you an email to (email) with a temporary
                      password
                    </p>
                  </div>

                  <div>
                    <Nav.Link
                      className="text-center btn  resendemail"
                      style={{ backgroundColor: "#36EB89" }}
                      href="/ResendEmail"
                    >
                      Resend email
                    </Nav.Link>
                    <p className="copyright2 text-center">
                      Copyright© 2022 KwikT Ltd. All Rights Reserved
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
export default LoginForm;
