import React, { useEffect, useState } from "react";

export function TablaGestionMecanico() {
  const [data, setsData] = useState({});

  const styleButton = {
    marginLeft: "1%",
    marginBottom: "3%",
    marginTop: "10px",
  };

  useEffect(() => {
    var url = "http://localhost:4000/usuariosMecanicos";
    fetch(url)
      .then((id) => id.json())
      .then((response) => {
        setsData(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ marginTop: "5%" }}>
      <form action="" method="">
        <div className="table-responsive">
          <table className="table">
            <thead className="fondo text-white">
              <tr key={500}>
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
              <tr key={450} style={{ backgroundColor: "#CFCFCF" }}>
                <td>
                  <input
                    id="confirmar"
                    type="submit"
                    value="Confirmar"
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      const editDatos = {
                        id: document.getElementById("editID").value,
                        nombre: document.getElementById("editNombre").value,
                        apellido: document.getElementById("editApellido").value,
                        cedula: document.getElementById("editCedula").value,
                        correo: document.getElementById("editCorreo").value,
                        direccion:
                          document.getElementById("editDireccion").value,
                        telefono: document.getElementById("editTelefono").value,
                        sexo: document.getElementById("editSexo").value,
                      };

                      console.log(editDatos);

                      var url = "http://localhost:4000/usuariosEditar";
                      fetch(url, {
                        method: "PUT",

                        body: JSON.stringify(editDatos),
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json",
                        },
                      })
                        .then((id) => id.json())
                        .catch((error) => {
                          console.error("Error:", error);
                          alert(error)
                        })
                        .then((response) => {
                          console.log(response);
                          alert(response.message);
                        });
                    }}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input type="text" id="editID" disabled={true} />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input
                    type="text"
                    pattern="^[A-Za-z]{2,15}$"
                    title="Nombre no valido"
                    required
                    id="editNombre"
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input
                    type="text"
                    pattern="^[A-Za-z]{2,15}$"
                    title="Apellido no valido"
                    required
                    id="editApellido"
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input
                    type="text"
                    pattern="^[0-9]{8,12}$"
                    title="Cedula no valida"
                    required
                    id="editCedula"
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input
                    type="text"
                    pattern="^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$"
                    title="Correo no valido"
                    required
                    id="editCorreo"
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input
                    type="text"
                    pattern="^[#.0-9a-zA-Z\s,-]+$"
                    title="Direccion no valida"
                    required
                    id="editDireccion"
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input
                    type="text"
                    pattern="^[0-9]{10,17}$"
                    title="Telefono no valido"
                    required
                    id="editTelefono"
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input type="text" id="editSexo" />
                </td>
                <td></td>
              </tr>

              {Object.keys(data).map((e) => {
                return (
                  <tr key={400 + e}>
                    <th>
                      <input type="radio" name="options" id={e} />
                    </th>
                    <td style={{ textAlign: "center" }}>{data[e]._id}</td>
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
          <button
            value="Editar"
            type="button"
            className="btn btn-success"
            style={styleButton}
            onClick={(e) => {
              const inputRadios = document.getElementsByName("options");
              let id = 0;
              for (let i = 0; i < inputRadios.length; i++) {
                const input = inputRadios[i];
                if (input.checked) {
                  id = parseInt(input.id);
                  break;
                }
              }

              console.log(id);

              //--------------------------------------------------//
              document.getElementById("editID").value = data[id]._id;
              document.getElementById("editNombre").value = data[id].nombre;
              document.getElementById("editApellido").value = data[id].apellido;
              document.getElementById("editCedula").value = data[id].cedula;
              document.getElementById("editCorreo").value = data[id].correo;
              document.getElementById("editDireccion").value =
                data[id].direccion;
              document.getElementById("editTelefono").value = data[id].telefono;
              document.getElementById("editSexo").value = data[id].sexo;
              // --------------------------------------------------//
            }}
          >
            Editar usuario mecánico
          </button>
          <button
            type="button"
            className="btn btn-danger"
            style={styleButton}
            onClick={(e) => {
              const inputRadios = document.getElementsByName("options");
              let id = null;
              for (let i = 0; i < inputRadios.length; i++) {
                const input = inputRadios[i];
                if (input.checked) {
                  id = input.id;
                  break;
                }
              }
              if (id === null) {
                alert("para eliminar un registro debes selecionar un id");
              } else {
                console.log(id);
                var url = "http://localhost:4000/usuariosBorrar";
                fetch(url, {
                  method: "POST",

                  body: JSON.stringify({ _id: id }),
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                })
                  .then((id) => id.json())
                  .catch((error) => console.error("Error:", error))
                  .then((response) => {
                    console.log(response);
                    alert(response.message);
                  });
              }
            }}
          >
            Eliminar usuario mecánico
          </button>
        </div>
      </form>
    </div>
  );
}
