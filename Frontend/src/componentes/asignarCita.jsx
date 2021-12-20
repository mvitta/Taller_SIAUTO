import React, { useState } from "react";

export function AsignarCita() {
  const [nombre, setNombre] = useState({ valor: "", valido: false });
  const [apellido, setApellido] = useState({ valor: "", valido: false });
  const [cedula, setCedula] = useState({ valor: "", valido: false });
  const [marca, setMarca] = useState({ valor: "", valido: false });
  const [modelo, setModelo] = useState({ valor: "", valido: false });
  const [año, setAño] = useState({ valor: "", valido: false });
  const [placa, setPlaca] = useState({ valor: "", valido: false });
  const [fecha, setFecha] = useState({ valor: "", valido: false });

  function campoCorrecto(id) {
    document.getElementById(id).className = "blanco";
  }

  function campoError(id, msg) {
    const campo = document.getElementById(id);
    campo.className = "alert alert-danger";
    campo.innerHTML = msg;
  }

  function validar(v, id, expReg, st, fst) {
    if (expReg.test(v)) {
      campoCorrecto(id);
      fst({
        ...st,
        valor: v,
        valido: true,
      });
    } else {
      campoError(id, "El campo no es valido");
      fst({
        ...st,
        valor: v,
        valido: false,
      });
    }
  }

  console.log("hola");

  return (
    <div style={{ marginTop: "3%" }}>
      <form
        id="formulario"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          const datos = {
            nombre: document.getElementById("inputNombre").value,
            apellido: document.getElementById("inputApellido").value,
            cedula: document.getElementById("inputCedula").value,
            marca: document.getElementById("inputMarca").value,
            modelo: document.getElementById("inputModelo").value,
            año: document.getElementById("inputAño").value,
            placa: document.getElementById("inputPlaca").value,
            fecha: document.getElementById("inputFecha").value,
            frenos: document.getElementById("frenos").checked,
            pastillas: document.getElementById("pastillas").checked,
            discos: document.getElementById("discos").checked,
            amortiguadores: document.getElementById("amortiguadores").checked,
            aceite: document.getElementById("aceite").checked,
            alineacion: document.getElementById("alineacion").checked,
            rotacion: document.getElementById("rotacion").checked,
            suspension: document.getElementById("suspension").checked,
            mecanico: document.getElementById("mecanico").value,
          };
          console.log(datos);
          var url = "http://localhost:4000/citas";
          fetch(url, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
              console.log("Peticion exitosa:", response);
              alert(response.message);
            });
        }}
      >
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
                                  onChange={(e) => {
                                    validar(
                                      e.target.value,
                                      "errorNombre",
                                      /^[A-Za-z]{2,15}$/,
                                      nombre,
                                      setNombre
                                    );
                                  }}
                                  required
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
                                  onChange={(e) => {
                                    validar(
                                      e.target.value,
                                      "errorApellido",
                                      /^[A-Za-z]{2,15}$/,
                                      apellido,
                                      setApellido
                                    );
                                  }}
                                  required
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
                                  onChange={(e) => {
                                    validar(
                                      e.target.value,
                                      "errorCedula",
                                      /^[0-9]{8,11}$/,
                                      cedula,
                                      setCedula
                                    );
                                  }}
                                  required
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
                                  onChange={(e) => {
                                    validar(
                                      e.target.value,
                                      "errorMarca",
                                      /^[A-Za-z]+$/,
                                      marca,
                                      setMarca
                                    );
                                  }}
                                  required
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
                                  onChange={(e) => {
                                    validar(
                                      e.target.value,
                                      "errorModelo",
                                      /^[A-Za-z]+$/,
                                      modelo,
                                      setModelo
                                    );
                                  }}
                                  required
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
                                  onChange={(e) => {
                                    validar(
                                      e.target.value,
                                      "errorAño",
                                      /^[0-9]{4}$/,
                                      año,
                                      setAño
                                    );
                                  }}
                                  required
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
                                  onChange={(e) => {
                                    validar(
                                      e.target.value,
                                      "errorPlaca",
                                      /^[A-Z]{3}[0-9]{3}$/,
                                      placa,
                                      setPlaca
                                    );
                                  }}
                                  required
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
                                  type="datetime-local"
                                  className="form-control"
                                  id="inputFecha"
                                  onChange={(e) => {
                                    const v = e.target.value;
                                    console.log(v);
                                    if (v === "") {
                                      campoError(
                                        "errorFecha",
                                        "Seleccione una fecha"
                                      );
                                      setFecha({
                                        ...fecha,
                                        valor: v,
                                        valido: false,
                                      });
                                    } else {
                                      campoCorrecto("errorFecha");
                                      setFecha({
                                        ...fecha,
                                        valor: v,
                                        valido: true,
                                      });
                                    }
                                  }}
                                  required
                                />
                                <label
                                  htmlFor="inputdate"
                                  className="htmlForm-label"
                                >
                                  <strong>Fecha - Hora</strong>
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
                                id="frenos"
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
                                id="pastillas"
                                name="servicioDisponible"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Discos</td>
                      <td>
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="htmlForm-check">
                              <input
                                className="htmlForm-check-input "
                                type="checkbox"
                                value=""
                                id="discos"
                                name="servicioDisponible"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>Suspension</td>
                      <td>
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="htmlForm-check">
                              <input
                                className="htmlForm-check-input "
                                type="checkbox"
                                value=""
                                id="suspension"
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
                                id="amortiguadores"
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
                                id="aceite"
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
                                id="alineacion"
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
                                id="rotacion"
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
                          id="mecanico"
                          aria-label="Floating label select example"
                          required
                        >
                          <option defaultValue=""></option>
                          <option value="Maikol Vitta">Maikol Vitta</option>
                          <option value="Basilio Díaz">Basilio Díaz</option>
                          <option value="Jorge Martinez">Jorge Martinez</option>
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
