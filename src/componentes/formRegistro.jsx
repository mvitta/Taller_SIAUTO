import React from "react";

export function Formulario() {
  function prevenirEnvioFormulario(e) {
    e.preventDefault();

    const msgNombre = document.getElementById("msgNombre");
    const msgApellido = document.getElementById("msgApellido");
    const msgCedula = document.getElementById("msgCedula");
    const msgCorreo = document.getElementById("msgCorreo");
    const msgTelefono = document.getElementById("msgTelefono");
    const msgContra1 = document.getElementById("msgContra1");
    const msgContra2 = document.getElementById("msgContra2");
    const msgDireccion = document.getElementById("msgDireccion");
    const msgSexo = document.getElementById("msgSexo");

    const id = [
      "inputNombre",
      "inputApellido",
      "inputCedula",
      "inputCorreo",
      "inputDireccion",
      "numeroTelefono",
      "inputPassword1",
      "inputPassword2",
      "inputState",
    ];
    let datos = [];
    id.map((elemento) => datos.push(document.getElementById(elemento).value));

    let estado = "";

    if (datos[0].match(/^[A-Za-z]{2,15}$/)) {
      estado += "OK";
      msgNombre.innerHTML = "Correcto";
      msgNombre.className = "alert alert-success";
    } else {
      msgNombre.className = "alert alert-danger";
      msgNombre.innerHTML = "Nombre no es valido";
    }

    if (datos[1].match(/^[A-Za-z]{2,15}$/)) {
      estado += "OK";
      msgApellido.innerHTML = "Correcto";
      msgApellido.className = "alert alert-success";
    } else {
      msgApellido.className = "alert alert-danger";
      msgApellido.innerHTML = "Apellido no es valido";
    }

    if (datos[2].match(/^[0-9]{8,12}$/)) {
      estado += "OK";
      msgCedula.innerHTML = "Correcto";
      msgCedula.className = "alert alert-success";
    } else {
      msgCedula.className = "alert alert-danger";
      msgCedula.innerHTML = "Cedula no es valida";
    }

    if (datos[3].match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      estado += "OK";
      msgCorreo.innerHTML = "Correcto";
      msgCorreo.className = "alert alert-success";
    } else {
      msgCorreo.className = "alert alert-danger";
      msgCorreo.innerHTML = "Correo no es valido";
    }

    if (datos[4].match(/^[#.0-9a-zA-Z\s,-]+$/)) {
      estado += "OK";
      msgDireccion.innerHTML = "Correcto";
      msgDireccion.className = "alert alert-success";
    } else {
      msgDireccion.className = "alert alert-danger";
      msgDireccion.innerHTML = "Direccion no Valida";
    }

    if (datos[5].match(/^[0-9]+$/)) {
      estado += "OK";
      msgTelefono.innerHTML = "Correcto";
      msgTelefono.className = "alert alert-success";
    } else {
      msgTelefono.className = "alert alert-danger";
      msgTelefono.innerHTML = "Telefono no es valido";
    }

    if (datos[6].match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\W_]{8,}$/)) {
      estado += "OK";
      msgContra1.innerHTML = "Correcto";
      msgContra1.className = "alert alert-success";
    } else {
      msgContra1.className = "alert alert-danger";
      msgContra1.innerHTML = "Contraseña no es valido";
    }
    // valida si las contraseña son distintas, si el campo esta vacio y si son iguales
    if (datos[6] === datos[7] && datos[6] !== "" && datos[7] !== "") {
      estado += "OK";
      msgContra2.innerHTML = "";
      msgContra2.className = msgContra2.style.backgroundColor = "white";
    } else if (datos[6] === "" && datos[7] === "") {
      msgContra2.className = "alert alert-info";
      msgContra2.innerHTML = "Se requiere la contraseña";
    } else if (datos[6] !== datos[7]) {
      msgContra2.className = "alert alert-danger";
      msgContra2.innerHTML = "Las contraseñas no coinciden";
    }

    if (datos[8] === "") {
      msgSexo.className = "alert alert-danger";
      msgSexo.innerHTML = "Debe seleccionar un sexo";
    } else {
      estado += "OK";
      msgSexo.innerHTML = "";
      msgSexo.className = msgSexo.style.backgroundColor = "white";
    }

    console.log(estado);
  }

  return (
    <div className="containerForm">
      <form
        className="row g-3"
        id="formulario"
        onSubmit={prevenirEnvioFormulario}
      >
        <div className="col-md-6">
          <label htmlFor="inputNombre" className="form-label">
            <strong>Nombre</strong>
          </label>
          <input type="text" className="form-control" id="inputNombre" />
          <div id="msgNombre" style={{ marginTop: "2%" }}></div>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputApellido" className="form-label">
            <strong>Apellido</strong>
          </label>
          <input type="text" className="form-control" id="inputApellido" />
          <div id="msgApellido" style={{ marginTop: "2%" }}></div>
        </div>
        <div className="col-12">
          <label htmlFor="inputCedula" className="form-label">
            <strong>Cedula</strong>
          </label>
          <input type="text" className="form-control" id="inputCedula" />
          <div id="msgCedula" style={{ marginTop: "2%" }}></div>
        </div>
        <div className="col-12">
          <label htmlFor="inputCorreo" className="form-label">
            <strong>Correo</strong>
          </label>
          <input
            type="email"
            className="form-control"
            id="inputCorreo"
            placeholder="name@ejemplo.com"
          />
          <div id="msgCorreo" style={{ marginTop: "2%" }}></div>
        </div>
        <div className="col-12">
          <label htmlFor="inputDireccion" className="form-label">
            <strong>Direccion</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="inputDireccion"
            placeholder="Cra 42G2 # 97 - 26"
          />
          <div id="msgDireccion" style={{ marginTop: "2%" }}></div>
        </div>
        <div className="col-12">
          <label htmlFor="numeroTelefono" className="form-label">
            <strong>Numero de telefono</strong>
          </label>
          <input type="number" className="form-control" id="numeroTelefono" />
          <div id="msgTelefono" style={{ marginTop: "2%" }}></div>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword1" className="form-label">
            <strong>Contraseña</strong>
          </label>
          <input type="password" className="form-control" id="inputPassword1" />
          <div id="msgContra1" style={{ marginTop: "2%" }}></div>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword2  " className="form-label">
            <strong>Repita Contraseña</strong>
          </label>
          <input type="password" className="form-control" id="inputPassword2" />
          <div id="msgContra2" style={{ marginTop: "2%" }}></div>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            <strong>Sexo</strong>
          </label>
          <select id="inputState" className="form-select">
            <option key={21} value=""></option>
            <option key={22} value="Femenino">
              Femenino
            </option>
            <option key={23} value="Masculino">
              Masculino
            </option>
          </select>
          <div id="msgSexo" style={{ marginTop: "2%" }}></div>
        </div>
        <div className="col-12" style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
          <button
            type="reset"
            className="btn btn-primary"
            style={{ margin: "2%" }}
          >
            Borrar
          </button>
        </div>
      </form>
    </div>
  );
}
