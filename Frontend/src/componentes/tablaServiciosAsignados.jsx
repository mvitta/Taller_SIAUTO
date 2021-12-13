import React from "react";

export function ServiciosAsignados() {
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
            style={{ marginLeft: "1%", marginBottom: "3%" }}
          >
            Buscar
          </button>
        </form>
      </div>
      <div style={{ margintop: "5%" }} className="table-responsive">
        <form action="" method="post">
          <table className="table">
            <thead className="fondo text-white">
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
                <th scope="col">Hora</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <input type="radio" name="options" id="option1" />
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
                    <option defaultValue>Abrir</option>
                    <option value="1">Revision de frenos</option>
                    <option value="2">Suspension</option>
                    <option value="3">Alineacion</option>
                  </select>
                </td>
                <td>23/11/2021</td>
                <td>01:00.000 P.M</td>
                <td style={{ color: "white", backgroundColor: "red" }}>
                  Sin iniciar
                </td>
              </tr>
              <tr>
                <th>
                  <input type="radio" name="options" id="option2" />
                </th>
                <th>2</th>
                <td>2</td>
                <td>Basilio</td>
                <td>Laura</td>
                <td>Chevrolet</td>
                <td>Sail</td>
                <td>2021</td>
                <td>
                  <select className="custom-select" id="inputGroupSelect01">
                    <option defaultValue>Abrir</option>
                    <option value="1">Revision de frenos</option>
                    <option value="2">Suspension</option>
                    <option value="3">Alineacion</option>
                  </select>
                </td>
                <td>23/11/2021</td>
                <td>02:00.000 P.M</td>
                <td style={{ color: "white", backgroundColor: "red" }}>
                  Sin iniciar
                </td>
              </tr>
              <tr>
                <th>
                  <input type="radio" name="options" id="option2" />
                </th>
                <th>3</th>
                <td>3</td>
                <td>Basilio</td>
                <td>Laura</td>
                <td>Chevrolet</td>
                <td>Sail</td>
                <td>2021</td>
                <td>
                  <select className="custom-select" id="inputGroupSelect01">
                    <option defaultValue>Abrir</option>
                    <option value="1">Revision de frenos</option>
                    <option value="2">Suspension</option>
                    <option value="3">Alineacion</option>
                  </select>
                </td>
                <td>23/11/2021</td>
                <td>03:00.000 P.M</td>
                <td style={{ color: "white", backgroundColor: "red" }}>
                  Sin iniciar
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: "1%", marginBottom: "5%" }}
          >
            Seleccionar Servicio
          </button>
        </form>
      </div>
    </div>
  );
}
