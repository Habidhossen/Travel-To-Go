import React from "react";
import banner from "../../assets/images/banner.jpg";
import Footer from "../Footer/Footer";
import Service from "../Services/Service";
import "./HomePage.css";

const HomePage = () => {
  const servicesData = [
    {
      id: 1,
      title: "Zip lines",
      desc: "Add some adrenalin to your travel senses by zipline tarvel.",
      image: "https://i.ibb.co/RypjCnK/zip-line.jpg",
    },
    {
      id: 2,
      title: "Kayaking",
      desc: "Kayaking makes takes thrill to the next level.",
      image: "https://i.ibb.co/1vz409v/Kayaking.jpg",
    },
    {
      id: 3,
      title: "Bungee Jump",
      desc: "Bungee jumps is one of the most exhilarating adventure.",
      image: "https://i.ibb.co/Qd32vKY/bungee-jump.jpg",
    },
    {
      id: 4,
      title: "Travel Equipments",
      desc: "Explore adventure with Trekking Hat, Jacket, Camping Shoe, Bag etc.",
      image: "https://i.ibb.co/qB6YmCx/equipments.jpg",
    },
  ];
  return (
    <div>
      {/* banner */}
      <section className="container">
        <div className="row mt-5">
          <div className="col-sm-6 col-md-5 col-lg-5 d-flex align-items-center">
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
          <div className="col-sm-6 col-md-7 col-lg-7">
            <img className="banner-img img-fluid" src={banner} alt="" />
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h1 className="services-section-header">Services</h1>
          <div className="row">
            {servicesData.map((service) => (
              <Service key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
