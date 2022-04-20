import React from "react";
import profileImg from "../../assets/images/profile-img.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="container mt-5 bg-light p-5 border-5">
      <div className="d-flex justify-content-center mb-3">
        <img className="about-img" src={profileImg} alt="" />
      </div>
      <h3 className="about-title">Habid Hossen Hridoy</h3>
      <p className="about-desc">
        Hello! I'm Habid Hossen Hridoy. I'm from Chattogram, Bangladesh. I am a
        student of Computer Science and Engineering. I like to Code, Design,
        Innovate and Experiment. I want to become a Full Stack Developer within
        the next 3-4 months.
      </p>
    </div>
  );
};

export default About;
