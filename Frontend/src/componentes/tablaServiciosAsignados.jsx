import React from "react";
import { useNavigate } from "react-router-dom"; // V6 -> nuevos cambios

export function ServiciosAsignados() {
  const [data, setsData] = React.useState({});
  const navigate = useNavigate();

  React.useEffect(() => {
    var url = "http://localhost:4000/serviciosAginados";
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);
        setsData(response);
      })
      .catch((error) => console.error(error));
  }, []);

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
              <tr key={6834623834}>
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
              {Object.keys(data).map((e) => {
                return (
                  <tr key={e}>
                    <td key={data[e]._id}>
                      <input type="radio" name="options" id={data[e]._id} />
                    </td>
                    <td>{parseInt(e) + 1}</td>
                    <td>{data[e]._id}</td>
                    <td>{data[e].mecanico}</td>
                    <td>{data[e].cliente}</td>
                    <td>{data[e].marca}</td>
                    <td>{data[e].modelo}</td>
                    <td>{data[e].año}</td>
                    <td>
                      <select className="custom-select" id="inputGroupSelect01">
                        {data[e].servicios.map((element) => {
                          return (
                            <React.Fragment>
                              <option key={data[e]._id} value={element}>
                                {element}
                              </option>
                            </React.Fragment>
                          );
                        })}
                      </select>
                    </td>
                    <td>{data[e].fecha}</td>
                    <td>{data[e].hora}</td>
                    <td style={{ color: "white", backgroundColor: "red" }}>
                      Sin iniciar
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: "1%", marginBottom: "5%" }}
            onClick={(e) => {
              const inputRadios = document.getElementsByName("options");
              let estadoRadio = null;
              for (let i = 0; i < inputRadios.length; i++) {
                const input = inputRadios[i];
                if (input.checked) {
                  estadoRadio = input.id;
                  break;
                }
              }
              navigate(`/ServiciosEnProcesos/${estadoRadio}`);
            }}
          >
            Seleccionar Servicio
          </button>
        </form>
      </div>
    </div>
  );
}
