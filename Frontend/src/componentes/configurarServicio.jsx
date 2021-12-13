import React, { useState } from "react";

export function ConfigurarServicio() {
  const [id, setId] = useState(0);
  const [btnEditar, setBtnEditar] = useState(false);
  const style = { textAlign: "center" };
  return (
    <div style={{ marginTop: "5%" }}>
      <form action="" method="">
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead className="fondo text-white">
              <tr>
                <th scope="col">Seleccionar</th>
                <th scope="col">ID</th>
                <th scope="col">Servicio</th>
                <th scope="col">Descripción</th>
                <th scope="col">Duracion (minutos)</th>
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
                    <input type="text" required />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <textarea cols="30" required></textarea>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <input type="number" required />
                  </td>
                </tr>
              )}
              <tr>
                <td>
                  <input type="radio" name="options" id={1} />
                </td>
                <td>1</td>
                <td>Revisión de Frenos</td>
                <td>Revisión de Frenos en el vehículo</td>
                <td style={style}>5</td>
              </tr>
              <tr>
                <td>
                  <input type="radio" name="options" id={2} />
                </td>
                <td>2</td>
                <td>Pastillas</td>
                <td>Revisión de pastillas en el vehículo</td>
                <td style={style}>4</td>
              </tr>

              <tr>
                <td>
                  <input type="radio" name="options" id={3} />
                </td>
                <td>3</td>
                <td>Discos</td>
                <td>Revisión de discos de frenos</td>
                <td style={style}>10</td>
              </tr>

              <tr>
                <td>
                  <input type="radio" name="options" id={4} />
                </td>
                <td>4</td>
                <td>suspensión</td>
                <td>Revisión del sistema de suspensión en el vehículo</td>
                <td style={style}>10</td>
              </tr>

              <tr>
                <td>
                  <input type="radio" name="options" id={5} />
                </td>
                <td>5</td>
                <td>Amortiguadores</td>
                <td>Revisión de amostiguadores en el vehículo</td>
                <td style={style}>12</td>
              </tr>

              <tr>
                <td>
                  <input type="radio" name="options" id={6} />
                </td>
                <td>6</td>
                <td>Cambio de Aceite</td>
                <td>Cambio de aceite en el vehículo</td>
                <td style={style}>8</td>
              </tr>

              <tr>
                <td>
                  <input type="radio" name="options" id={7} />
                </td>
                <td>7</td>
                <td>Alineación</td>
                <td>Alineación del vehículo</td>
                <td style={style}>2</td>
              </tr>

              <tr>
                <td>
                  <input type="radio" name="options" id={8} />
                </td>
                <td>8</td>
                <td>Rotación de llantas</td>
                <td>Revisión de rotación de llantas en el vehículo</td>
                <td style={style}>14</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button
            value="Editar"
            type="button"
            className="btn btn-success"
            style={{ marginLeft: "1%", marginBottom: "5%" }}
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
            Editar
          </button>
          <button
            type="button"
            className="btn btn-danger"
            style={{ marginLeft: "1%", marginBottom: "5%" }}
            onClick={(e) => {
              console.log("Eliminar");
            }}
          >
            Eliminar
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: "1%", marginBottom: "5%" }}
          >
            Añadir Servicio
          </button>
        </div>
      </form>
    </div>
  );
}
