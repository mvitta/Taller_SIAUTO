import React, { useState } from "react";

export function CitasDiarias() {
  const [data, setsData] = useState({});
  const [stateCheckbox] = useState(false);

  React.useEffect(() => {
    var url = "http://localhost:4000/citas";
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
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
              <tr key={123456938284}>
                <th scope="col" style={{ textAlign: "center" }}>
                  Seleccionar
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  ID
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Placa
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Frenos
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Pastillas
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Discos
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Suspensión
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Amortiguadores
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Aceite
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Alineación
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Rotación
                </th>
              </tr>
            </thead>
            <tbody>
              <tr key={450} style={{ backgroundColor: "#CFCFCF" }}>
                <td>
                  <input
                    type="submit"
                    value="Confirmar"
                    className="btn btn-primary"
                    id="confirmar"
                    onClick={(e) => {
                      e.preventDefault();
                      const editDatos = {
                        id: document.getElementById("editID").value,
                        placa: document.getElementById("editPlaca").value,
                        frenos: document.getElementById("editFrenos").checked,
                        pastillas:
                          document.getElementById("editPastillas").checked,
                        discos: document.getElementById("editDiscos").checked,
                        suspension:
                          document.getElementById("editSuspension").checked,
                        amortiguadores:
                          document.getElementById("editAmortiguadores").checked,
                        aceite: document.getElementById("editAceite").checked,
                        alineacion:
                          document.getElementById("editAlineacion").checked,
                        rotacion:
                          document.getElementById("editRotacion").checked,
                      };

                      console.log(editDatos);

                      var url = "http://localhost:4000/citas";
                      fetch(url, {
                        method: "PUT",

                        body: JSON.stringify(editDatos),
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
                    }}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input type="text" id="editID" />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input type="text" id="editPlaca" />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input type="checkbox" id="editFrenos" />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input type="checkbox" id="editPastillas" />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input type="checkbox" id="editDiscos" />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input type="checkbox" id="editSuspension" />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input type="checkbox" id="editAmortiguadores" />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input type="checkbox" id="editAceite" />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input type="checkbox" id="editAlineacion" />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input type="checkbox" id="editRotacion" />
                </td>
              </tr>

              {Object.keys(data).map((e) => {
                return (
                  <tr key={data[e]._id}>
                    <td>
                      <input type="radio" name="options" id={data[e]._id} />
                    </td>
                    <td style={{ textAlign: "center" }}>{data[e]._id}</td>
                    <td style={{ textAlign: "center" }}>{data[e].placa}</td>
                    <td>
                      <input
                        type="checkbox"
                        style={{ marginLeft: "50%" }}
                        disabled={stateCheckbox}
                        checked={data[e].frenos}
                        onChange={() => {}}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        style={{ marginLeft: "50%" }}
                        disabled={stateCheckbox}
                        checked={data[e].pastillas}
                        onChange={() => {}}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        style={{ marginLeft: "50%" }}
                        disabled={stateCheckbox}
                        checked={data[e].discos}
                        onChange={() => {}}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        style={{ marginLeft: "50%" }}
                        disabled={stateCheckbox}
                        checked={data[e].suspension}
                        onChange={() => {}}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        style={{ marginLeft: "50%" }}
                        disabled={stateCheckbox}
                        checked={data[e].amortiguadores}
                        onChange={() => {}}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        style={{ marginLeft: "50%" }}
                        disabled={stateCheckbox}
                        checked={data[e].aceite}
                        onChange={() => {}}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        style={{ marginLeft: "50%" }}
                        disabled={stateCheckbox}
                        checked={data[e].alineacion}
                        onChange={() => {}}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        style={{ marginLeft: "50%" }}
                        disabled={stateCheckbox}
                        checked={data[e].rotacion}
                        onChange={() => {}}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: "1%", marginBottom: "3%", marginTop: "5%" }}
          >
            Generar reporte
          </button>
          <button
            type="button"
            className="btn btn-success"
            style={{ marginLeft: "1%", marginBottom: "3%", marginTop: "5%" }}
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
              document.getElementById("editPlaca").value = data[id].placa;
              document.getElementById("editFrenos").checked = data[id].frenos;
              document.getElementById("editPastillas").checked =
                data[id].pastillas;
              document.getElementById("editDiscos").checked = data[id].discos;
              document.getElementById("editSuspension").checked =
                data[id].suspension;
              document.getElementById("editAmortiguadores").checked =
                data[id].amortiguadores;
              document.getElementById("editAceite").checked = data[id].aceite;
              document.getElementById("editAlineacion").checked =
                data[id].alineacion;
              document.getElementById("editRotacion").checked =
                data[id].rotacion;

              // --------------------------------------------------//
            }}
          >
            Editar cita
          </button>
          <button
            type="button"
            className="btn btn-danger"
            style={{ marginLeft: "1%", marginBottom: "3%", marginTop: "5%" }}
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

              console.log(id);

              if (id === null) {
                alert("Debes selecionar un registro");
              } else {
                var url = "http://localhost:4000/citaBorrar";
                fetch(url, {
                  method: "POST",

                  body: JSON.stringify({ _id: id }),
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                })
                  .then((res) => res.json())
                  .catch((error) => console.error("Error:", error))
                  .then((response) => {
                    console.log(response);
                    alert(response.message);
                  });
              }
            }}
          >
            Eliminar cita
          </button>
        </div>
      </form>
    </div>
  );
}
