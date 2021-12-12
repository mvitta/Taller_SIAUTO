import React, { useEffect, useState } from "react";

export function TablaGestionarUsuarioPlanta() {
  const [data, setData] = useState({});
  const [id, setId] = useState(0);

  useEffect(() => {
    var url = "http://localhost:4000/siAuto/usuariosPlanta";
    fetch(url)
      .then((res) => res.json())
      .then((response) => setData(response))
      .catch((error) => console.log(error));
  }, []);

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
              {Object.keys(data).map((e) => {
                return (
                  <tr key={e}>
                    <th>
                      <input type="radio" name="options" id={e} />
                    </th>
                    <td style={{ textAlign: "center" }}>{e}</td>
                    <td style={{ textAlign: "center" }}>{data[e].nombre}</td>
                    <td style={{ textAlign: "center" }}>{data[e].cedula}</td>
                    <td style={{ textAlign: "center" }}>{data[e].telefono}</td>
                    <td style={{ textAlign: "center" }}>{data[e].correo}</td>
                    <td style={{ textAlign: "center" }}>{data[e].direccion}</td>
                    <td style={{ textAlign: "center" }}>{data[e].telefono}</td>
                    <td style={{ textAlign: "center" }}>{data[e].sexo}</td>
                  </tr>
                );
              })}
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
            onClick={(e) => {
              const inputRadios = document.getElementsByName("options");
              for (let i = 0; i < inputRadios.length; i++) {
                const input = inputRadios[i];
                if (input.checked) {
                  setId(input.id);
                  break;
                }
              }
              console.log(id); // <---- este id se va para express
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
        </div>
      </form>
    </div>
  );
}
