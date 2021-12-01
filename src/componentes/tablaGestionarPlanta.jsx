import React from "react";

export function TablaGestionarUsuarioPlanta() {
  return (
    <div style={{ marginTop: "5%" }}>
      <form action="" method="post">
        <div className="table-responsive">
          <table className="table">
            <thead className="fondo text-white">
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>
                  Seleccionar
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  ID del usuario
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Nombres
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Apellidos
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Cédula
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Correo
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Dirección
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Número de teléfono
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Sexo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                  />
                </th>
                <td style={{ textAlign: "center" }}>1</td>
                <td style={{ textAlign: "center" }}>Jorge</td>
                <td style={{ textAlign: "center" }}>Martinez</td>
                <td style={{ textAlign: "center" }}>123456</td>
                <td style={{ textAlign: "center" }}>correo@correo.com</td>
                <td style={{ textAlign: "center" }}>calle 1# 1-1</td>
                <td style={{ textAlign: "center" }}>3001234567</td>
                <td style={{ textAlign: "center" }}>Masculino</td>
              </tr>
            </tbody>
          </table>
          <button
            type="button"
            className="btn btn-primary"
            style={{
              marginLeft: "1%",
              marginBottom: "3%",
              marginTop: "10%",
            }}
          >
            Generar reporte
          </button>
          <button
            type="button"
            className="btn btn-success"
            style={{
              marginLeft: "1%",
              marginBottom: "3%",
              marginTop: "10%",
            }}
          >
            Editar usuario de planta
          </button>
          <button
            type="button"
            className="btn btn-danger"
            style={{
              marginLeft: "1%",
              marginBottom: "3%",
              marginTop: "10%",
            }}
          >
            Eliminar usuario de planta
          </button>
          <a href="./AgregarUsuarioPlanta.html" className="link-primary">
            <button
              type="button"
              className="btn btn-danger"
              style={{
                marginLeft: "1%",
                marginBottom: "3%",
                marginTop: "10%",
              }}
            >
              Añadir nuevo usuario de planta
            </button>
          </a>
        </div>
      </form>
    </div>
  );
}
