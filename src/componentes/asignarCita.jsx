import React from "react";

export function AsignarCita() {
  function validarDatos(e) {
    e.preventDefault();
    let estado = "";

    function campoCorrecto(id) {
      setTimeout(() => {
        document.getElementById(id).className = "blanco";
      }, 1000);
    }

    function campoError(id, msg) {
      const campo = document.getElementById(id);
      campo.className = "alert alert-danger";
      campo.innerHTML = msg;
    }

    const expreNombre = /^[A-Za-z]{2,15}$/;
    const nombre = document.getElementById("inputNombre").value;
    if (expreNombre.test(nombre)) {
      estado += "OK";
      campoCorrecto("errorNombre");
    } else {
      campoError("errorNombre", nombre + " no es valido");
    }
    const expreApellido = /^[A-Za-z]{2,15}$/;
    const apellido = document.getElementById("inputApellido").value;
    if (expreApellido.test(apellido)) {
      estado += "OK";
      campoCorrecto("errorApellido");
    } else {
      campoError("errorApellido", apellido + " apellido no es valido");
    }

    const expreCedula = /^[0-9]{8,11}$/;
    const cedula = document.getElementById("inputCedula").value;
    if (expreCedula.test(cedula)) {
      estado += "OK";
      campoCorrecto("errorCedula");
    } else {
      campoError("errorCedula", cedula + " no es una cedula valida");
    }
    const expreMarca = /^[A-Za-z]+$/;
    const marca = document.getElementById("inputMarca").value;
    if (expreMarca.test(marca)) {
      estado += "OK";
      campoCorrecto("errorMarca");
    } else {
      campoError("errorMarca", marca + " no es una marca valida");
    }

    const expreModelo = /^[A-Za-z]+$/;
    const modelo = document.getElementById("inputModelo").value;
    if (expreModelo.test(modelo)) {
      estado += "OK";
      campoCorrecto("errorModelo");
    } else {
      campoError("errorModelo", modelo + " no es un modelo valido");
    }

    const exprePlaca = /^[A-Z]{3}[0-9]{3}$/;
    const placa = document.getElementById("inputPlaca").value;
    if (exprePlaca.test(placa)) {
      estado += "OK";
      campoCorrecto("errorPlaca");
    } else {
      campoError("errorPlaca", placa + " no es una placa valida");
    }

    const expreAño = /^[0-9]{4}$/;
    if (expreAño.test(document.getElementById("inputAño").value)) {
      estado += "OK";
      campoCorrecto("errorAño");
    } else {
      campoError("errorAño", "el año no es valido");
    }

    if (document.getElementById("inputFecha").value === "") {
      campoError("errorFecha", "Debe Ingresar una fecha");
    } else {
      estado += "OK";
      campoCorrecto("errorFecha");
    }

    console.log(estado);
  }

  return (
    <div style={{ marginTop: "3%" }}>
      <form id="formulario" method="post" onSubmit={validarDatos}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="table-responsive" style={{ margin: "3% 2%" }}>
                <table className="table table-striped table-sm">
                  <tbody>
                    <tr>
                      <td>
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="htmlForm-check">
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputNombre"
                                />
                                <label htmlFor="inputname">
                                  <strong>Nombre</strong>
                                </label>
                                <div
                                  id="errorNombre"
                                  style={{ marginTop: "2%" }}
                                ></div>
                              </div>
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputApellido"
                                />
                                <label htmlFor="inputlastname">
                                  <strong>Apellido</strong>
                                </label>
                                <div
                                  id="errorApellido"
                                  style={{ marginTop: "2%" }}
                                ></div>
                              </div>
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputCedula"
                                />
                                <label htmlFor="inputdocument">
                                  <strong>Cédula</strong>
                                </label>
                                <div
                                  id="errorCedula"
                                  style={{ marginTop: "2%" }}
                                ></div>
                              </div>
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputMarca"
                                />
                                <label htmlFor="inputmarca">
                                  <strong>Marca</strong>
                                </label>
                                <div
                                  id="errorMarca"
                                  style={{ marginTop: "2%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="htmlForm-check">
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputModelo"
                                />
                                <label htmlFor="inputmodel">
                                  <strong>Modelo</strong>
                                </label>
                                <div
                                  id="errorModelo"
                                  style={{ marginTop: "2%" }}
                                ></div>
                              </div>
                              <div className="form-floating">
                                <input
                                  type="number"
                                  className="form-control"
                                  id="inputAño"
                                />
                                <label htmlFor="inputyear">
                                  <strong>Año</strong>
                                </label>
                                <div
                                  id="errorAño"
                                  style={{ marginTop: "2%" }}
                                ></div>
                              </div>
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputPlaca"
                                />
                                <label htmlFor="inputmodel">
                                  <strong>Placa</strong>
                                </label>
                                <div
                                  id="errorPlaca"
                                  style={{ marginTop: "2%" }}
                                ></div>
                              </div>
                              <div className="form-floating">
                                <input
                                  type="date"
                                  className="form-control"
                                  id="inputFecha"
                                />
                                <label
                                  htmlFor="inputdate"
                                  className="htmlForm-label"
                                >
                                  <strong>Fecha</strong>
                                </label>
                                <div
                                  id="errorFecha"
                                  style={{ marginTop: "2%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="table-responsive" style={{ margin: "3% 2%" }}>
                <table className="table table-striped table-sm">
                  <thead className="fondo text-white">
                    <tr>
                      <th scope="col">Tipos de Servicio</th>
                      <th scope="col">Seleccionar Servicios</th>
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
                      </td>
                      <td>
                        <select
                          className="htmlForm-select"
                          id="floatingSelectGrid"
                          aria-label="Floating label select example"
                        >
                          <option defaultValue>Seleccionar mecánico</option>
                          <option value="1">Maikol Vitta</option>
                          <option value="2">Basilio Díaz</option>
                          <option value="3">Jorge Martinez</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginLeft: "1%", marginBottom: "3%", marginTop: "10px" }}
          >
            Asignar servicios
          </button>
        </div>
      </form>
    </div>
  );
}
