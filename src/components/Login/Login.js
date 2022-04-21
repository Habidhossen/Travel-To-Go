import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import "./Login.css";

const Login = () => {
  // use ref
  const emailRef = useRef("");
  const passwordRef = useRef("");

  // react firebase hook
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  // const location = useLocation();
  const navigate = useNavigate();

  // declare variable for error message
  let errorElement;

  if (user || user1) {
    // navigate(from, { replace: true });
    navigate("/checkout");
  }
  if (loading || sending || loading1) {
    return <Loading />;
  }
  if (error || error1 || resetError) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message || error1?.message || resetError?.message}
      </p>
    );
  }

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
      <div className="col-sm-12 col-md-6 col-lg-4 mx-auto form-bg">
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

          {/* error element */}
          {errorElement}

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
