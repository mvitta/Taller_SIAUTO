import React from "react";
import { UserContext } from "../context/UserContext";
import foto from "../Imagenes/Imagenes servicio en proceso/Perfil.jpg";

export function Perfil() {
  const { user } = React.useContext(UserContext);

  // console.log("userContext PERFIL: ", user);

  const myStyle = {
    color: "white",
    margin: "2%",
  };

  return (
    <div className="container" style={{ margin: "4%" }}>
      <div className="row">
        <div className="col">
          <div style={{ textAlign: "center" }}>
            <img
              width="40%"
              src={foto}
              className="img-fluid rounded-start"
              alt="Foto usuario"
            />
          </div>
          <div className="card-body">
            <p className="card-text" style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              cupiditate dignissimos delectus, adipisci exercitationem id
              tempora recusandae ipsa, facilis mollitia temporibus ad facere
              totam culpa. Ipsa dolorum vel commodi totam?
            </p>
            <p className="card-text">
              <small className="text-muted">
                Ultima actualizacion hace 1 semana
              </small>
            </p>
          </div>

          <div className="col" style={{ padding: "4%" }}>
            <div style={{ textAlign: "center" }}>
              <h5 className="card-title">
                SIAUTO Taller De Mecanica Automotriz
              </h5>
            </div>
            <div style={{ textAlign: "center" }}>
              <ul className="list-group list-group-flush">
                <li key={100} className="list-group-item">
                  Primer elemento
                </li>
                <li key={200} className="list-group-item">
                  Segundo elemento
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card text-white fondo mb-4"
            style={{ maxWidth: "18rem", padding: "5%" }}
          >
            <div className="card-header" style={{ textAlign: "center" }}>
              <h5 className="card-title">INFORMACION DEL PERFIL</h5>
            </div>
            <div style={myStyle}>
              <div>
                <h5 className="card-title">Cedula</h5>
              </div>
              <input
                type="text"
                className="form-control"
                value={user.cedula}
                aria-label="Username"
                aria-describedby="addon-wrapping"
                disabled
              />
            </div>
            <div>
              <div style={myStyle}>
                <h5 className="card-title">Nombre</h5>
              </div>
              <input
                type="text"
                className="form-control"
                value={user.nombre}
                aria-label="Username"
                aria-describedby="addon-wrapping"
                disabled
              />
            </div>
            <div>
              <div style={myStyle}>
                <h5 className="card-title">Apellido</h5>
              </div>
              <input
                type="text"
                className="form-control"
                value={user.apellido}
                aria-label="Username"
                aria-describedby="addon-wrapping"
                disabled
              />
            </div>
            <div>
              <div style={myStyle}>
                <h5 className="card-title">Correo</h5>
              </div>
              <input
                type="text"
                className="form-control"
                value={user.correo}
                aria-label="Username"
                aria-describedby="addon-wrapping"
                disabled
              />
            </div>
            <div>
              <div style={myStyle}>
                <h5 className="card-title">
                  Direccion
                </h5>
              </div>
              <input
                type="text"
                className="form-control"
                value={user.direccion}
                aria-label="Username"
                aria-describedby="addon-wrapping"
                disabled
              />
            </div>
            <div>
              <div style={myStyle}>
                <h5 className="card-title">Numero de telefono</h5>
              </div>
              <input
                type="text"
                className="form-control"
                value={user.telefono}
                aria-label="Username"
                aria-describedby="addon-wrapping"
                disabled
              />
            </div>
            <div>
              <div style={myStyle}>
                <h5 className="card-title">Sexo</h5>
              </div>
              <input
                type="text"
                className="form-control"
                value={user.sexo}
                aria-label="Username"
                aria-describedby="addon-wrapping"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
