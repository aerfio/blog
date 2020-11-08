import React from "react";

const Footer = () => (
  <footer className="my-12 text-center text-main-text">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a> and{" "}
    <a
      href="https://github.com/renyuanz/leonids"
      target="_blank"
      rel="noreferrer nofollow noopener"
    >
      Leonids theme
    </a>
    .
  </footer>
);

export default Footer;
