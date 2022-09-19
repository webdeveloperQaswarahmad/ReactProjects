import React, { useState } from "react";
import "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

import "./LoginForm.css";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/AdminDash");
  };

  function loginHandle(e) {
    if (email.length < 10 || password.length < 5) {
      alert("type correct values");
    } else {
      alert("all good");
    }
    e.preventDefault();
  }

  function emailHandler(e) {
    let item = e.target.value;

    if (item.length < 10) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    setEmail(item);
  }
  function userHandler(e) {
    let item = e.target.value;

    if (item.length < 5) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    setPassword(item);
  }

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
                <Form
                  className=" mt-5 mx-auto"
                  style={{ width: "22rem" }}
                  onSubmit={loginHandle}
                >
                  <div>
                    <p className=" adminpanel">Log in KwikTrust Admin Panel</p>
                    <p className="admindashboard">Admin dashboard</p>
                  </div>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="emailadress">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="fw-bold"
                      placeholder="nick@kwiktrust.com"
                      onChange={emailHandler}
                    />
                    {emailErr ? (
                      <span className="mt-3 text-danger fs-5">
                        Please Enter a Valid Email
                      </span>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label className="emailadress">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="*********"
                      onChange={userHandler}
                    />
                    {passwordErr ? (
                      <span className="mt-3 text-danger fs-5">
                        Password must have five characters
                      </span>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3 mt-3"
                    controlId="formBasicCheckbox"
                  >
                    <Form.Check
                      type="checkbox"
                      className="emailadress"
                      label="Remember me"
                    />
                  </Form.Group>
                  <Button
                    style={{ backgroundColor: "#36EB89" }}
                    className="w-100 text-dark login"
                    type="submit"
                    id="sweet"
                    onClick={handleLogin}
                    onChange={loginHandle}
                  >
                    Log in
                  </Button>
                  <div>
                    <Nav.Link
                      className=" text-secondary text-center mt-3 forgottenpassword   active"
                      href="/ForgotPassword"
                    >
                      Forgotten Password?
                    </Nav.Link>
                    <p className="text-secondary text-center temporaryone">
                      Receive a temporary one
                    </p>
                    <p className="copyright1 text-center opacity-75 ">
                      Copyright© 2022 KwikT Ltd. All Rights Reserved
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
