import React from "react";
import { useNavigate } from "react-router-dom"; // V6 -> nuevos cambios
import { UserContext } from "../context/UserContext";
import { fetchData } from "../services/request";
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
          fetchData("http://localhost:4000/login", data).then((resolve) =>
            setUser(resolve)
          );

          e.preventDefault();
        });
    },
    [setUser]
  );

  React.useEffect(() => {
    if (user) {
      // navigate("/Inicio");
      const nombre = user.correo;
      const apellido = user.apellido;
      console.table({ nombre, apellido });
    } else {
      console.log("Ingresa un usuario valido");
    }
  }, [user, navigate]);

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
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Rol de Usuario
          </label>
          <select className="form-select" id="rol" name="rol">
            <option value=""></option>
            <option value="administrador">administrador</option>
            <option value="mecanico">mecanico</option>
            <option value="planta">planta</option>
          </select>
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
