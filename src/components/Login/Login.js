import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="col-4 mx-auto form-bg">
        <h1 className="login-title">Please login</h1>
        <hr className="mb-4" />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <p className="custom-form-text">
              Not a member?{" "}
              <Link to="/signup" className="custom-form-text-span">
                Signup
              </Link>
            </p>
          </Form.Group>
          <Button className="checkout-btn w-100" type="submit">
            Login
          </Button>
          <Button className="google-btn w-100 mt-2" type="submit">
            Login with Google
          </Button>
          <Form.Group className="mt-3">
            <p className="custom-form-text">
              Forget your password?{" "}
              <Link className="custom-form-text-span" to="">
                Reset password
              </Link>
            </p>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Login;
