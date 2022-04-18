import React from "react";
import banner from "../../assets/images/banner.jpg";
import Service from "../Services/Service";
import "./HomePage.css";

const HomePage = () => {
  const servicesData = [
    {
      id: 1,
      title: "Zip lines",
      desc: "Add some adrenalin to your travel senses by zipline tarvel.",
      image:
        "https://media.creativemornings.com/uploads/user/avatar/268533/cv_self_portrait_b_w_square.jpg",
    },
    {
      id: 2,
      title: "Kayaking",
      desc: "Kayaking makes takes thrill to the next level.",
      image:
        "https://media.creativemornings.com/uploads/user/avatar/268533/cv_self_portrait_b_w_square.jpg",
    },
    {
      id: 3,
      title: "Bungee Jump",
      desc: "Bungee jumps is one of the most exhilarating adventure.",
      image:
        "https://media.creativemornings.com/uploads/user/avatar/268533/cv_self_portrait_b_w_square.jpg",
    },
    {
      id: 4,
      title: "Travel Equipments",
      desc: "Explore adventure with Trekking Hat, Jacket, Camping Shoe, Bag etc.",
      image:
        "https://media.creativemornings.com/uploads/user/avatar/268533/cv_self_portrait_b_w_square.jpg",
    },
  ];
  return (
    <div>
      <section className="container">
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
      </section>
      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="row">
            {servicesData.map((service) => (
              <Service key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
