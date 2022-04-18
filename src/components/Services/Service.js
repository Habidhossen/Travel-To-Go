import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, title, desc, image } = service;

  return (
    <div className="col-3">
      <div className="card">
        <img className="card-img" src={image} alt="" />
        <div className="card-detail">
          <h1 className="card-title">{title}</h1>
          <p className="card-price">{desc}</p>
        </div>
        <Link className="checkout-btn" to="">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Service;
