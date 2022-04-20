import React from "react";
import image from "../../assets/images/send-msg.jpg";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section className="row container mx-auto">
      <h1 className="services-section-header">Have Some Questions?</h1>
      <div className="col-sm-6 col-md-6 col-lg-6">
        <img className="img-fluid" src={image} alt="" />
      </div>
      <div className="col-sm-6 col-md-6 col-lg-6 d-flex flex-column justify-content-center">
        <input type="text" name="" placeholder="First name" />
        <input type="text" name="" placeholder="Last name" />
        <input type="email" name="" placeholder="Whats your email?" />
        <textarea
          placeholder="Your questions..."
          name=""
          cols="30"
          rows="4"
        ></textarea>
        <button className="checkout-btn mt-3">Send Message</button>
      </div>
    </section>
  );
};

export default ContactMe;
