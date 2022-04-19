import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/404_img.svg";

const NotFound = () => {
  return (
    <section className="row container mx-auto">
      <div className="col d-flex flex-column justify-content-center">
        <h1 className="fw-bold">Oops!</h1>
        <h5 className="fw-lighter mb-4 mt-2">
          The page you're looking for isn't here.
        </h5>
        <Link to="/" className="checkout-btn w-50">
          Back to Home
        </Link>
      </div>
      <div className="col">
        <img className="img-fluid" src={image} alt="" />
      </div>
    </section>
  );
};

export default NotFound;
