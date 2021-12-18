import React from "react";
import { useNavigate } from "react-router-dom"; // V6 -> nuevos cambios
import { UserContext } from "../context/UserContext";
// import { getUsuario } from "../api/apiusuarios";
// import { getRoles } from "../api/apiroles";

export function Login() {
  // Simulacion
  // const [rolesusuarios, setRolesUsuarios] = useState([]);
  const { user, setUser } = React.useContext(UserContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    // console.log("userContext (LOGIN): ", user);
    if (user) {
      if (user.correo === "maikol@correo.com") {
        navigate("/Inicio");
      }
    } else {
      console.log("Ingresa un usuario valido");
    }
  }, [user, navigate]);

  // se busca que el perfil exista en el archivo json
  function validarSesion() {
    const correo = document.getElementById("exampleInputEmail1").value;

    var data = { correo: correo };

    var url = "http://localhost:4000/login";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => setUser(response));
  }

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1.5%" }}
      >
        <div style={{ width: "40%" }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              validarSesion();
            }}
          >
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
                type="submit"
                className="btn btn-primary"
                style={{ margin: "1%" }}
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
