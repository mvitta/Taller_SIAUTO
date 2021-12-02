import React from "react";

export function CitasDiarias() {
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
                  Rotación de llantas
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <input type="radio" name="options" id="option1" />
                </th>
                <th style={{ textAlign: "center" }}>1</th>
                <td style={{ textAlign: "center" }}>abc-123</td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
              </tr>
              <tr>
                <th>
                  <input type="radio" name="options" id="option1" />
                </th>
                <th style={{ textAlign: "center" }}>1</th>
                <td style={{ textAlign: "center" }}>abc-123</td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
              </tr>
              <tr>
                <th>
                  <input type="radio" name="options" id="option1" />
                </th>
                <th style={{ textAlign: "center" }}>1</th>
                <td style={{ textAlign: "center" }}>abc-123</td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input
                    type="checkbox"
                    style={{ marginLeft: "50%" }}
                    disabled
                  />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
                </td>
                <td>
                  <input type="checkbox" style={{ marginLeft: "50%" }} />
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
