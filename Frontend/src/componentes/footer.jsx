import React from "react";
import Facebook from "../Imagenes/Iconos redes sociales/facebook.png";
import Github from "../Imagenes/Iconos redes sociales/github.png";
import Google from "../Imagenes/Iconos redes sociales/google.png";
import Instagram from "../Imagenes/Iconos redes sociales/instagram.png";
import Linkedin from "../Imagenes/Iconos redes sociales/linkedin.png";
import Twitter from "../Imagenes/Iconos redes sociales/twitter.png";

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
              key={red.id}
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
