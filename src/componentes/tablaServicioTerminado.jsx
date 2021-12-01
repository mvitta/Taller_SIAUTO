import React from "react";

export function ServiciosTerminados() {
  return (
    <div>
      <div style={{ marginTop: "3%" }}>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            type="search"
            className="form-control form-control-dark"
            placeholder="Buscar Servicio ..."
            style={{ width: "20%", float: "left" }}
          />
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: "1%" }}
          >
            Buscar
          </button>
        </form>
      </div>
      <div style={{ marginTop: "5%" }} className="table-responsive">
        <form action="" method="post">
          <table className="table">
            <thead className="bg-dark text-white">
              <tr>
                <th scope="col">Seleccionar</th>
                <th scope="col">No</th>
                <th scope="col">ID del Servicio</th>
                <th scope="col">Mecánico</th>
                <th scope="col">Cliente</th>
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                <th scope="col">Año</th>
                <th scope="col">Servicios</th>
                <th scope="col">Fecha</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    autocomplete="off"
                    checked
                  />
                </th>
                <th>1</th>
                <td>1</td>
                <td>Basilio</td>
                <td>Laura</td>
                <td>Chevrolet</td>
                <td>Sail</td>
                <td>2021</td>
                <td>
                  <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Abrir</option>
                    <option value="1">Revision de frenos</option>
                    <option value="2">Suspension</option>
                    <option value="3">Alineacion</option>
                  </select>
                </td>
                <td>23/11/2021</td>
                <td style={{ color: "white", backgroundColor: "green" }}>
                  Terminado
                </td>
              </tr>
              <tr>
                <th>
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    autocomplete="off"
                  />
                </th>
                <th>1</th>
                <td>1</td>
                <td>Basilio</td>
                <td>Laura</td>
                <td>Chevrolet</td>
                <td>Sail</td>
                <td>2021</td>
                <td>
                  <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Abrir</option>
                    <option value="1">Revision de frenos</option>
                    <option value="2">Suspension</option>
                    <option value="3">Alineacion</option>
                  </select>
                </td>
                <td>23/11/2021</td>
                <td style={{ color: "white", backgroundColor: "green" }}>
                  Terminado
                </td>
              </tr>
              <tr>
                <th>
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    autocomplete="off"
                  />
                </th>
                <th>1</th>
                <td>1</td>
                <td>Basilio</td>
                <td>Laura</td>
                <td>Chevrolet</td>
                <td>Sail</td>
                <td>2021</td>
                <td>
                  <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Abrir</option>
                    <option value="1">Revision de frenos</option>
                    <option value="2">Suspension</option>
                    <option value="3">Alineacion</option>
                  </select>
                </td>
                <td>23/11/2021</td>
                <td style={{ color: "white", backgroundColor: "green" }}>
                  Terminado
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
