import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="text-center py-3 mb-0">
        Copyright &#169; {year}. Travel To Go
      </p>
    </footer>
  );
};

export default Footer;
