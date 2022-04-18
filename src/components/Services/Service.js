import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, title, desc, image } = service;

  return (
    <div className="col-3">
      {/* <>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
        <div>
          <Link className="checkout-btn" to="">
            Checkout
          </Link>
        </div>
      </> */}
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
