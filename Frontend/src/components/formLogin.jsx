import React from "react";
import { useNavigate } from "react-router-dom"; // V6 -> nuevos cambios
import { UserContext } from "../context/UserContext";
import { validarUser } from "../services/request";
import "../css/formLogin.css";

export function Login() {
  const { user, setUser } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(
    function () {
      document
        .getElementById("formulario")
        .addEventListener("submit", function (e) {
          const inputUser = document.getElementById("exampleInputEmail1").value;
          let data = { correo: inputUser };
          validarUser("http://localhost:4000/login", data).then((resolve) => {
            if (resolve) {
              setUser(resolve);
              navigate("Inicio");
            }
          });

          e.preventDefault();
        });
    },
    [setUser, navigate, user]
  );

  return (
    <React.Fragment>
      <form className="contentLogin" id="formulario">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Correo Electronico
          </label>
          <input
            type="email"
            name="correo"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <span className="form-check-label" htmlFor="exampleCheck1">
            Recordar sesion
          </span>
        </div>
        <div>
          <a className="dropdown-item" href="#!">
            Olvidaste tu contraseña?
          </a>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
          <button type="reset" className="btn btn-primary">
            Borrar
          </button>
        </div>
        <div className="dropdown-divider"></div>
      </form>
    </React.Fragment>
  );
}
