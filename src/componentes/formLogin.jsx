import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // V6 -> nuevos cambios

// para prueba o simulacion se usa variable global, cuando se actualiza la pagina los componentes que tienen condicion desaparecen
let estado = { perfil: undefined, abierto: false };
export { estado };

export function Login() {
  // Simulacion
  const [datos, setdatos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("./api.json", {})
      .then((res) => res.json())
      .then((info) => {
        setdatos(info);
      });
  }, []);

  // se busca que el perfil exista en el archivo json
  function validarSesion() {
    const usuario = document.getElementById("exampleInputEmail1").value;

    for (let i = 0; i < datos.length; i++) {
      const registro = datos[i];
      if (registro.rol === usuario) {
        estado = { perfil: registro.rol, abierto: true };
        navigate("/Inicio");
        break;
      }
    }
    console.log(estado.perfil, estado.abierto);
  }

  console.log(estado.perfil, estado.abierto);

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
