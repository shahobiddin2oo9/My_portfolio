import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import myImg from "../img/shaxob.jpg";

const LoginPage = () => {
  const [user, setUser] = useState({ userName: "", phoneNumber: "" });
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (user.userName === "A" && user.phoneNumber === "1234") {
      navigate("/home");
    } else {
      toast.error("❌ Xato ! ");
    }
  };

  return (
    <div>
      <div className="form">
        <div className="container_1">
          <header>
            <div className="logo">
              <h1>SHakh_web </h1>
              <span>Xudoyqulov_</span>
            </div>
            <nav className="menu">
              <p>
                Hi Welcome to the project <span>!</span> If you want to see it
                please register.
              </p>
            </nav>
            <div className="SignIn">
              <Button variant="primary" onClick={handleShow}>
                Sign In
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={submit}>
                    <Form.Group className="mb-3" controlId="userName">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        onChange={handleChange}
                        value={user.userName}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phoneNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        value={user.phoneNumber}
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </header>
        </div>
      </div>
      <main>
        <div className="container_1">
          <div className="main">
            <div className="text">
              <a href="#/">
                Hello, my name is Shahobidin, and my surname is Khudoykulov.
              </a>
              <h3>
                I am currently 15 years old and studying Frontend development.
                My goal is to become a great programmer in the future
              </h3>
            </div>
            <div className="img">
              <img className="my_img" src={myImg} alt="my_image ?" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
