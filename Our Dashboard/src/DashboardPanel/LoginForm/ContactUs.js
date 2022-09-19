import React from "react";
import 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactUs(){
    return(
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
                <Form className=" mt-5 mx-auto" style={{ width: "22rem" }}>
                  <div>
                    <p className=" adminpanel">Feel free to contact with us </p>
                    <p className="admindashboard">Contact Us</p>
                  </div>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="emailadress">
                      Username
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="fw-bold"
                      placeholder="Username"
                    />
                  </Form.Group>
                  <Form.Group  controlId="formBasicPassword">
                    <Form.Label className="emailadress">Email</Form.Label>
                    <Form.Control className="mb-3 " type="password" placeholder="ab@gmail.com" />
                  </Form.Group>
                
                  <Button
                    style={{ backgroundColor: "#36EB89" }}
                    className="w-100 text-dark login mt-4"
                    type="submit"
                  >
                    Submit
                  </Button>
                  <div>
                    
                    <p className="text-secondary text-center temporaryone mt-4 ">
                      We will contact with you as soon as possible
                    </p>
                    <p className="copyright1 text-center mt-5">
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
    )
}
export default ContactUs;