import React from "react";
import Facebook from "../assets/Iconos redes sociales/facebook.png";
import Github from "../assets/Iconos redes sociales/github.png";
import Google from "../assets/Iconos redes sociales/google.png";
import Instagram from "../assets/Iconos redes sociales/instagram.png";
import Linkedin from "../assets/Iconos redes sociales/linkedin.png";
import Twitter from "../assets/Iconos redes sociales/twitter.png";

export function Footer() {
  const redes = [
    {
      id: 1212,
      icono: Facebook,
    },
    {
      id: 2214,
      icono: Github,
    },
    {
      id: 3215,
      icono: Google,
    },
    {
      id: 2146,
      icono: Instagram,
    },
    {
      id: 5217,
      icono: Linkedin,
    },
    {
      id: 6218,
      icono: Twitter,
    },
  ];

  return (
    <footer className="text-center text-white">
      <div className="container p-4">
        <section className="mb-4">
          {redes.map((red) => (
            <a
              key={crypto.randomUUID()}
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <img src={red.icono} alt="" />
            </a>
          ))}
        </section>
        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>
      </div>
      <div className="text-center p-3">
        © 2021 Copyright:
        <a className="text-white" href="#!">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}
