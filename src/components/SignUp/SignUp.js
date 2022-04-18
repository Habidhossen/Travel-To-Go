import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="col-4 mx-auto form-bg">
        <h1 className="login-title">Create an account</h1>
        <hr className="mb-4" />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <p className="custom-form-text">
              Already have an account?{" "}
              <Link to="/login" className="custom-form-text-span">
                Login now
              </Link>
            </p>
          </Form.Group>
          <Button className="checkout-btn w-100" type="submit">
            Register
          </Button>
          <Button className="google-btn w-100 mt-2 " type="submit">
            Continue with Google
          </Button>
          <Form.Group className="mt-3">
            <p className="custom-form-text">
              Forget{" "}
              <Link className="custom-form-text-span" to="">
                Password
              </Link>
            </p>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
