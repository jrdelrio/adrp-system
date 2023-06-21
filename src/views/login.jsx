import React from "react";
import { Button } from "react-bootstrap";

import Form from 'react-bootstrap/Form';
import "../styles/login.css";
import logoImage from "./../img/main-logo.jpg";

const LoginView = () => {
  return (
        <div className="container wrapper">
            <div className="image-container">
                <img src={logoImage} className="image" alt="Logo" />
            </div>
                <Form className="mt-20">
                    <Form.Group className="mb-3 mt-20" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="input" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="input" type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="button">
                        Submit
                    </Button>
                </Form>
            </div>
  );
}

export default LoginView ;