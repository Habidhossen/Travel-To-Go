import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  // const location = useLocation();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  // handle google sign-in
  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate("/checkout");
    });
  };

  // handle email-password sign-in
  const handleEmailSignIn = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    console.log("user login");
    // navigate("/");
    navigate(from, { replace: true });
  };

  // reset password and toast
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("sent reset email successfully!");
    } else {
      toast("please enter your email!");
    }
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
              ref={emailRef}
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              ref={passwordRef}
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
        </Form>
        <Button
          onClick={() => handleGoogleSignIn()}
          className="google-btn w-100 mt-2"
        >
          Login with Google
        </Button>
        <p className="custom-form-text mt-3">
          Forget your password?{" "}
          <button
            onClick={resetPassword}
            className="btn btn-link text text-primary mb-1 ps-0 fw-bold text-decoration-none"
          >
            Reset password
          </button>
        </p>
        {/* Toast Container */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
