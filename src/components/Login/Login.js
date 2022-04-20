import React from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  // const location = useLocation();
  const navigate = useNavigate();

  // const from = location?.state?.from?.pathname || "/";

  // handle google sign-in
  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate("/checkout");
    });
  };

  // handle email-password sign-in
  const handleEmailSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    navigate("/checkout");
    // navigate(from, { replace: true });
  };

  return (
    <div>
      <div className="col-4 mx-auto form-bg">
        <h1 className="login-title">Please login</h1>
        <hr className="mb-4" />
        <Form onSubmit={handleEmailSignIn}>
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
          <Button
            onClick={() => handleGoogleSignIn()}
            className="google-btn w-100 mt-2"
          >
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
