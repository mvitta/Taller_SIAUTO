import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
import { estado } from "../componentes/formLogin";

export function Header() {
  return (
    <div className="container">
      <div
        className="
              d-flex
              flex-wrap
              align-items-center
              justify-content-center justify-content-lg-start
            "
      >
        <ul
          className="
                nav
                col-12 col-lg-auto
                me-lg-auto
                mb-2
                justify-content-center
                mb-md-0
              "
        >
          {estado.abierto && (
            <li key={11}>
              <Link className="nav-link px-2 text-white" to="/Inicio">
                Inicio
              </Link>
            </li>
          )}
          <li key={12}>
            <a href="#!" className="nav-link px-2 text-white">
              Features
            </a>
          </li>
          <li key={13}>
            <a href="#!" className="nav-link px-2 text-white">
              Pricing
            </a>
          </li>
          <li key={14}>
            <a href="#!" className="nav-link px-2 text-white">
              FAQs
            </a>
          </li>
          <li key={15}>
            <a href="#!" className="nav-link px-2 text-white">
              About
            </a>
          </li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            type="search"
            className="form-control form-control-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        {estado.abierto && (
          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Iniciar Sesion
            </button>
            <button type="button" className="btn btn-warning">
              Cerrar Sesion
            </button>
          </div>
        )
        }
      </div>
    </div>
  );
}
