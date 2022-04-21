import React from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

  // declare variable for error message
  let errorElement;

  if (user) {
    navigate("/checkout");
  }
  // loading
  if (loading) {
    return <Loading />;
  }
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  // handle register
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
    // navigate("/checkout");
  };

  return (
    <div>
      <div className="col-4 mx-auto form-bg">
        <h1 className="login-title">Create an account</h1>
        <hr className="mb-4" />
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          {/* error element */}
          {errorElement}

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
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
