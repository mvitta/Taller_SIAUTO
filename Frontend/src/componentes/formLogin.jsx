import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom"; // V6 -> nuevos cambios
import { getUsuario } from "../api/apiusuarios";
import { getRoles } from "../api/apiroles";

// para prueba o simulacion se usa variable global, cuando se actualiza la pagina los componentes que tienen condicion desaparecen
let estado = { perfil: undefined, abierto: false };

export { estado };

export function Login() {
  // Simulacion
  const [rolesusuarios, setRolesUsuarios] = useState([]);
  //const [usuario, setUsuario] = useState(null);
  //const navigate = useNavigate();
  const fetch = async () => {
    const rus = await getRoles();
    setRolesUsuarios(rus);
  };

  useEffect(() => {
    fetch();
  }, []);

  // se busca que el perfil exista en el archivo json
  function validarSesion(){
    const correo = document.getElementById("exampleInputEmail1").value;
    const pass = document.getElementById("exampleInputPassword1").value
    const rolusua = document.getElementById("rol").value;

    const iniciarSesion = async (data) => {
      const rus = await getUsuario(data);
      return rus;
    };

    iniciarSesion({correo, pass, rolusua});

    console.log(iniciarSesion);

    //const sesion = getUsuario({correo, pass, rolusua});

    //if(sesion){
      //console.log(sesion);
    //}
      
    

    //const result = usuarios.find((item) => item.correo.includes(correo));

    //if (
      //result.rol !== null &&
      //result.rol === rolusua &&
      //result.correo === correo
    //) {
      //estado = { perfil: result.rol, abierto: true };

      //navigate("/Inicio");
    //}

    //console.log(estado.perfil, estado.abierto);
  };

  console.log("ROLES DE USUARIOS ",rolesusuarios);

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
                name="correo"
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
                name="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Rol de Usuario
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="rol"
                name="rol"
              >
                <option key={null} value={null}>Seleccione Rol de Usuario</option>
                {rolesusuarios.map((ruser) => (
                  <option key={ruser._id} value={ruser._id}>
                    {ruser.nombre_rol}
                  </option>
                ))}
              </select>
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
