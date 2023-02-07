import React from "react";

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer>
      <p>{currYear}</p>
    </footer>
  );
};

export default Footer;
