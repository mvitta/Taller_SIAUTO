import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // V6 -> nuevos cambios

let inicioSesion = "";
export { inicioSesion };

export function Login() {
  inicioSesion = "";
  const [datos, setdatos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("./api.json", {})
      .then((res) => res.json())
      .then((info) => {
        setdatos(info);
      });
  }, []);

  function validarSesion() {
    const usuario = document.getElementById("exampleInputEmail1").value;

    for (let i = 0; i < datos.length; i++) {
      const registro = datos[i];
      if (registro.rol === usuario) {
        console.log(registro.rol);
        inicioSesion = registro.rol;
        irPagina();
        break;
      }
    }
  }

  function irPagina() {
    navigate("/Inicio");
  }

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1.5%" }}
      >
        <div style={{ width: "40%" }}>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Correo Electronico
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
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
              <label className="form-check-label" htmlFor="exampleCheck1">
                Recordar sesion
              </label>
            </div>
            <div style={{ textAlign: "center" }}>
              <a className="dropdown-item" href="#!">
                Olvidaste tu contraseña?
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                type="button"
                className="btn btn-primary"
                style={{ margin: "1%" }}
                onClick={validarSesion} // <---------------------- ir pagina
              >
                Ingresar
              </button>
              <button
                type="reset"
                className="btn btn-primary"
                style={{ margin: "1%" }}
              >
                Borrar
              </button>
            </div>
            <div className="dropdown-divider"></div>
          </form>
        </div>
      </div>
    </div>
  );
}
