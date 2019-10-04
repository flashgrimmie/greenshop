import React, { Component } from "react";

const Footer = props => {
  return (
    <footer>
      <p className="footer-links">
        <a
          href="https://github.com/seniordev-rt96/greenshop-react-shopping-cart"
          target="_blank"
        >
          View Source on Github
        </a>
        <span> / </span>
        <a href="mailto:seniordev.rt@gmail.com" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="https://seniordev-rt96.github.io/p001-personal-website/" target="_blank">
          Read My Blog
        </a>
      </p>
      <p>
        &copy; 2016 <strong>GreenShop</strong> - Organic Green Store
      </p>
    </footer>
  );
};

export default Footer;
