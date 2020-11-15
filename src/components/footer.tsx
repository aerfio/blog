import React, { FunctionComponent } from "react";

const Footer: FunctionComponent = () => (
  <footer className="my-12 text-center text-main-text">
    © {new Date().getFullYear()}, Built by{" "}
    <a
      href="https://github.com/aerfio/"
      target="_blank"
      rel="noreferrer nofollow noopener"
      className="text-accent shadow-link"
    >
      Mateusz Puczyński
    </a>
    .
  </footer>
);

export default Footer;
