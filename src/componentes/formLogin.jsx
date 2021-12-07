import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // V6 -> nuevos cambios
import { getDatosRolesUsuarios } from "../api/api";
import { getDatosUsuarios } from "../api/api";

// para prueba o simulacion se usa variable global, cuando se actualiza la pagina los componentes que tienen condicion desaparecen
let estado = { perfil: undefined, abierto: false };
export { estado };

export function Login() {
  // Simulacion
  const [rolesusuarios, setRolesUsuarios] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      const rus = await getDatosRolesUsuarios();
      const us = await getDatosUsuarios();
      setRolesUsuarios(rus);
      setUsuarios(us);
    };

    fetch();
    
  }, [rolesusuarios,usuarios]);

  // se busca que el perfil exista en el archivo json
  function validarSesion() {
    const correo = document.getElementById("exampleInputEmail1").value;
    const rolusua = document.getElementById("selectRol").value;

    const result = usuarios.find(item => item.correo.includes(correo));

    if(result.rol !== null && result.rol === rolusua && result.correo === correo){
      estado = { perfil: result.rol, abierto: true };
      navigate("/Inicio");
    }
    
    console.log(estado.perfil, estado.abierto);

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
              <label htmlFor="exampleInputEmail1" className="form-label">
                Rol de Usuario
              </label>
              <select className="form-select" aria-label="Default select example" id="selectRol" name="selectRol">
                <option value={null}>Seleccione Rol de Usuario</option>
                {rolesusuarios.map(ruser => (
                  <option key={ruser.id} value={ruser.id}>{ruser.rol}</option>
                ))}
                </select>
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
