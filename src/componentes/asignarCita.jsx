import React from "react";

export function AsignarCita() {
  return (
    <form action="">
      <div className="container">
        <div className="row">
          <div className="col">
            <label htmlFor="inputname" className="htmlForm-label">
              <strong>Nombre</strong>
            </label>
          </div>
          <div className="col">
            <input type="text" className="htmlForm-control" id="inputname" />
          </div>
          <div className="col">
            <label htmlFor="inputlastname" className="htmlForm-label">
              <strong>Apellido</strong>
            </label>
          </div>
          <div className="col">
            <input
              type="text"
              className="htmlForm-control"
              id="inputlastname"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="inputdocument" className="htmlForm-label">
              <strong>Cédula</strong>
            </label>
          </div>
          <div className="col">
            <input
              type="number"
              className="htmlForm-control"
              id="inputdocument"
            />
          </div>
          <div className="col">
            <label htmlFor="inputmarca" className="htmlForm-label">
              <strong>Marca</strong>
            </label>
          </div>
          <div className="col">
            <input type="text" className="htmlForm-control" id="inputmarca" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="inputmodel" className="htmlForm-label">
              <strong>Modelo</strong>
            </label>
          </div>
          <div className="col">
            <input type="text" className="htmlForm-control" id="inputmodel" />
          </div>
          <div className="col">
            <label htmlFor="inputyear" className="htmlForm-label">
              <strong>Año</strong>
            </label>
          </div>
          <div className="col">
            <input type="number" className="htmlForm-control" id="inputyear" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="inputdate" className="htmlForm-label">
              <strong>Fecha</strong>
            </label>
          </div>
          <div className="col">
            <input type="date" className="htmlForm-control" id="inputdate" />
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
      <div className="table-responsive" style={{ margin: "3% 2%" }}>
        <table className="table table-striped table-sm">
          <thead className="bg-dark text-white">
            <tr>
              <th scope="col">Tipos de Servicio</th>
              <th scope="col">Disponibilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Revisión de Frenos</td>
              <td>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="htmlForm-check">
                      <input
                        className="htmlForm-check-input "
                        type="checkbox"
                        value=""
                        id="servicioDisponible"
                        name="servicioDisponible"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>Pastillas</td>
              <td>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="htmlForm-check">
                      <input
                        className="htmlForm-check-input "
                        type="checkbox"
                        value=""
                        id="servicioDisponible"
                        name="servicioDisponible"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Discos de suspensión</td>
              <td>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="htmlForm-check">
                      <input
                        className="htmlForm-check-input "
                        type="checkbox"
                        value=""
                        id="servicioDisponible"
                        name="servicioDisponible"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>Amortiguadores</td>
              <td>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="htmlForm-check">
                      <input
                        className="htmlForm-check-input "
                        type="checkbox"
                        value=""
                        id="servicioDisponible"
                        name="servicioDisponible"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Cambio de Aceite</td>
              <td>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="htmlForm-check">
                      <input
                        className="htmlForm-check-input "
                        type="checkbox"
                        value=""
                        id="servicioDisponible"
                        name="servicioDisponible"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Alineación</td>
              <td>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="htmlForm-check">
                      <input
                        className="htmlForm-check-input "
                        type="checkbox"
                        value=""
                        id="servicioDisponible"
                        name="servicioDisponible"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Rotación de llantas</td>
              <td>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="htmlForm-check">
                      <input
                        className="htmlForm-check-input "
                        type="checkbox"
                        value=""
                        id="servicioDisponible"
                        name="servicioDisponible"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label
                  htmlFor="floatingSelectGrid"
                  style={{ marginRight: "3%" }}
                >
                  Lista de mecánicos
                </label>
                <select
                  className="htmlForm-select"
                  id="floatingSelectGrid"
                  aria-label="Floating label select example"
                >
                  <option selected>Seleccionar mecánico</option>
                  <option value="1">Maikol Vitta</option>
                  <option value="2">Basilio Díaz</option>
                  <option value="3">Jorge Martinez</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginLeft: "1%", marginBottom: "3%", marginTop: "10px" }}
        >
          Asignar servicios
        </button>
      </div>
    </form>
  );
}
