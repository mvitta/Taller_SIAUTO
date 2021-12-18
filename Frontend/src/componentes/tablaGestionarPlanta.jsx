import React, { useEffect, useState } from "react";

export function TablaGestionarUsuarioPlanta() {
  const [data, setData] = useState({});
  const [id, setId] = useState(0);
  const [btnEditar, setBtnEditar] = useState(false);

  useEffect(() => {
    var url = "http://localhost:4000/usuariosPlantas";
    fetch(url)
      .then((res) => res.json())
      .then((response) => setData(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ marginTop: "5%" }}>
      <form action="" method="">
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
              {btnEditar && (
                <tr key={450} style={{ backgroundColor: "#CFCFCF" }}>
                  <td>
                    <input
                      type="submit"
                      value="Confirmar"
                      className="btn btn-primary"
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input type="text" disabled={true} />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input
                      type="text"
                      pattern="^[A-Za-z]{2,15}$"
                      title="Nombre no valido"
                      required
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input
                      type="text"
                      pattern="^[A-Za-z]{2,15}$"
                      title="Apellido no valido"
                      required
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input
                      type="text"
                      pattern="^[0-9]{8,12}$"
                      title="Cedula no valida"
                      required
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input
                      type="text"
                      pattern="^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$"
                      title="Correo no valido"
                      required
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input
                      type="text"
                      pattern="^[#.0-9a-zA-Z\s,-]+$"
                      title="Direccion no valida"
                      required
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input
                      type="text"
                      pattern="^[0-9]{10,17}$"
                      title="Telefono no valido"
                      required
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input type="text" required />
                    
                  </td>
                </tr>
              )}
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
          >
            Generar reporte
          </button>
          <button
            value="Editar"
            type="button"
            className="btn btn-success"
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
              setBtnEditar(true);
              console.log(id);
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
            onClick={(e) => {
              console.log("Eliminar");
            }}
          >
            Eliminar usuario de planta
          </button>
        </div>
      </form>
    </div>
  );
}
