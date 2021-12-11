import React, { useEffect, useState } from "react";

export function TablaGestionMecanico() {
  const [data, setsData] = useState({});
  const styleButton = {
    marginLeft: "1%",
    marginBottom: "3%",
    marginTop: "10px",
  };

  useEffect(() => {
    var url = "http://localhost:4000/siAuto/usuariosMecanico";
    fetch(url)
      .then((res) => res.json())
      .then((response) => setsData(response))
      .catch((error) => console.error(error));
  }, []);

  try {
    console.log(data);
    Object.keys(data).map((e) => console.log(data[e].correo));
  } catch (error) {
    console.log(error);
  }

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
                  ID
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Nombre
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Apellido
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
                  teléfono
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Sexo
                </th>
                <th style={{ textAlign: "center" }}>Asignaciones</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data).map((e) => {
                return (
                  <tr>
                    <th>
                      <input type="radio" name="options" id="option1" />
                    </th>
                    <td style={{ textAlign: "center" }}>{e}</td>
                    <td style={{ textAlign: "center" }}>{data[e].nombre}</td>
                    <td style={{ textAlign: "center" }}>{data[e].apellido}</td>
                    <td style={{ textAlign: "center" }}>{data[e].cedula}</td>
                    <td style={{ textAlign: "center" }}>{data[e].correo}</td>
                    <td style={{ textAlign: "center" }}>{data[e].direccion}</td>
                    <td style={{ textAlign: "center" }}>{data[e].telefono}</td>
                    <td style={{ textAlign: "center" }}>{data[e].sexo}</td>

                    <td style={{ textAlign: "center" }}>
                      <a href="#!" className="link-primary">
                        Ver asignaciones
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button type="button" className="btn btn-primary" style={styleButton}>
            Generar reporte
          </button>
          <button type="button" className="btn btn-success" style={styleButton}>
            Editar usuario mecánico
          </button>
          <button type="button" className="btn btn-danger" style={styleButton}>
            Eliminar usuario mecánico
          </button>
        </div>
      </form>
    </div>
  );
}
