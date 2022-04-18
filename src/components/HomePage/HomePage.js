import React from "react";
import banner from "../../assets/images/banner.jpg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <section>
      <div className="container">
        <div className="row mt-5">
          <div className="col-5 d-flex align-items-center">
            <div className="banner">
              <h5>Its Time To Adventure</h5>
              <h1>Explore a new world</h1>
              <p>
                Life is short and the world is wide. Explore a new world with a
                friendly guide, who takes care of your adventure trip. So let's
                go.
              </p>
            </div>
          </div>
          <div className="col-7">
            <img className="banner-img img-fluid" src={banner} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
