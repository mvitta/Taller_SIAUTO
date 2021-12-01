import React from "react";

export function ConfigurarServicio() {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead className="bg-dark text-white">
          <tr>
            <th scope="col">Servicio</th>
            <th scope="col">Descripción</th>
            <th scope="col">Duracion</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Revisión de Frenos</td>
            <td>Revisión de Frenos en el vehículo</td>
            <td>5 horas</td>
            <td>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="d-grid gap-2 d-md-block">
                    <button
                      type="button"
                      id="modificarTipoServicio"
                      className="btn btn-success btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Actualizar
                    </button>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="d-grid gap-2 d-md-block">
                    <button
                      className="btn btn-danger btn-sm"
                      id="eliminarTipoServicio"
                      type="submit"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Pastillas</td>
            <td>Revisión de pastillas en el vehículo</td>
            <td>4 horas</td>
            <td>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="d-grid gap-2 d-md-block">
                    <button
                      className="btn btn-success btn-sm"
                      id="modificarTipoServicio"
                      type="submit"
                    >
                      Actualizar
                    </button>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="d-grid gap-2 d-md-block">
                    <button
                      className="btn btn-danger btn-sm"
                      id="eliminarTipoServicio"
                      type="submit"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Discos de suspensión</td>
            <td>Revisión de suspensión en el vehículo</td>
            <td>10 horas</td>
            <td>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="d-grid gap-2 d-md-block">
                    <button
                      className="btn btn-success btn-sm"
                      id="modificarTipoServicio"
                    >
                      Actualizar
                    </button>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="d-grid gap-2 d-md-block">
                    <button
                      className="btn btn-danger btn-sm"
                      id="eliminarTipoServicio"
                      type="submit"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Amortiguadores</td>
            <td>Revisión de amostiguadores en el vehículo</td>
            <td>12 horas</td>
            <td>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="d-grid gap-2 d-md-block">
                    <button
                      className="btn btn-success btn-sm"
                      id="modificarTipoServicio"
                      type="submit"
                    >
                      Actualizar
                    </button>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="d-grid gap-2 d-md-block">
                    <button
                      className="btn btn-danger btn-sm"
                      id="eliminarTipoServicio"
                      type="submit"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Cambio de Aceite</td>
            <td>Cambio de aceite en el vehículo</td>
            <td>8 horas</td>
            <td>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="d-grid gap-2 d-md-block">
                    <button
                      className="btn btn-success btn-sm"
                      id="modificarTipoServicio"
                      type="submit"
                    >
                      Actualizar
                    </button>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="d-grid gap-2 d-md-block">
                    <button
                      className="btn btn-danger btn-sm"
                      id="eliminarTipoServicio"
                      type="submit"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Alineación</td>
            <td>Alineación del vehículo</td>
            <td>2 horas</td>
            <td>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="d-grid gap-2 d-md-block">
                    <button
                      className="btn btn-success btn-sm"
                      id="modificarTipoServicio"
                      type="submit"
                    >
                      Actualizar
                    </button>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="d-grid gap-2 d-md-block">
                    <button
                      className="btn btn-danger btn-sm"
                      id="eliminarTipoServicio"
                      type="submit"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Rotación de llantas</td>
            <td>Revisión de rotación de llantas en el vehículo</td>
            <td>14 horas</td>
            <td>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="d-grid gap-2 d-md-block">
                    <button
                      className="btn btn-success btn-sm"
                      id="modificarTipoServicio"
                      type="submit"
                    >
                      Actualizar
                    </button>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="d-grid gap-2 d-md-block">
                    <button
                      className="btn btn-danger btn-sm"
                      id="eliminarTipoServicio"
                      type="submit"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-primary"
        style={{ marginLeft: "1%", marginBottom: "5%" }}
      >
        Añadir Servicio
      </button>
    </div>
  );
}
