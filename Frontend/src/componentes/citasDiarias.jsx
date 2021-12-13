import React, { useState } from "react";

export function CitasDiarias() {
  const [id, setId] = useState(0);
  const [btnEditar, setBtnEditar] = useState(false);
  const [stateCheckbox] = useState(false);

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
                  Cambio de aceite
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
                    <input type="checkbox" />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input type="checkbox" />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input type="checkbox" />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input type="checkbox" />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input type="checkbox" />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input type="checkbox" />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input type="checkbox" />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input type="checkbox" />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input type="checkbox" />
                  </td>
                </tr>
              )}
              <tr>
                <th>
                  <input type="radio" name="options" id={1} />
                </th>
                <th style={{ textAlign: "center" }}>1</th>
                <td style={{ textAlign: "center" }}>abc-123</td>
                <td>
                  <input
                    type="checkbox"
                    style={{ marginLeft: "50%" }}
                    disabled={stateCheckbox}
                    checked={true}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    style={{ marginLeft: "50%" }}
                    disabled={stateCheckbox}
                    checked={true}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    style={{ marginLeft: "50%" }}
                    disabled={stateCheckbox}
                    checked={true}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    style={{ marginLeft: "50%" }}
                    disabled={stateCheckbox}
                    checked={true}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    style={{ marginLeft: "50%" }}
                    disabled={stateCheckbox}
                    checked={true}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    style={{ marginLeft: "50%" }}
                    disabled={stateCheckbox}
                    checked={true}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    style={{ marginLeft: "50%" }}
                    disabled={stateCheckbox}
                    checked={true}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    style={{ marginLeft: "50%" }}
                    disabled={stateCheckbox}
                    checked={true}
                  />
                </td>
              </tr>
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
            Editar cita
          </button>
          <button
            type="button"
            className="btn btn-danger"
            style={{ marginLeft: "1%", marginBottom: "3%", marginTop: "5%" }}
          >
            Eliminar cita
          </button>
        </div>
      </form>
    </div>
  );
}
