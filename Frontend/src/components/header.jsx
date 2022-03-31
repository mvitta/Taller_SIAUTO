import React from "react";
import "../css/style.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export function Header() {
  const { user, setUser } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(
    function () {
      document.getElementById("logout").addEventListener("click", function () {
        navigate("/");
        setUser([false], {});
      });
    },
    [setUser, navigate]
  );

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
          <li>
            <Link className="nav-link px-2 text-white" to="/Inicio">
              Inicio
            </Link>
          </li>

          <li>
            <a href="#!" className="nav-link px-2 text-white">
              Features
            </a>
          </li>
          <li>
            <a href="#!" className="nav-link px-2 text-white">
              Pricing
            </a>
          </li>
          <li>
            <a href="#!" className="nav-link px-2 text-white">
              FAQs
            </a>
          </li>
          <li>
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

        <div className="text-end">
          {user[0] ?? (
            <button type="button" className="btn btn-outline-light me-2">
              Iniciar Sesion
            </button>
          )}
          <button type="button" className="btn btn-warning" id="logout">
            Cerrar Sesion
          </button>
        </div>
      </div>
    </div>
  );
}
