import React, { useState } from "react";

export function Formulario() {
  const [nombre, setNombre] = useState({ valor: "", valido: false });
  const [apellido, setApellido] = useState({ valor: "", valido: false });
  const [cedula, setCedula] = useState({ valor: "", valido: false });
  const [correo, setCorreo] = useState({ valor: "", valido: false });
  const [direccion, setDireccion] = useState({ valor: "", valido: false });
  const [telefono, setTelefono] = useState({ valor: "", valido: false });
  const [contra1, setContra1] = useState({ valor: "", valido: false });
  const [contra2, setContra2] = useState({ valor: "", valido: false });
  const [sexo, setSexo] = useState({ valor: "", valido: false });

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
  return (
    <div className="containerForm">
      <form
        className="row g-3"
        id="formulario"
        encType=""
        onSubmit={(e) => {
          // se envian los datos al servidor
          e.preventDefault();
          const datos = {
            nombre: nombre.valor,
            apellido: apellido.valor,
            cedula: cedula.valor,
            correo: correo.valor,
            direccion: direccion.valor,
            telefono: telefono.valor,
            contra1: contra1.valor,
            contra2: contra2.valor,
            sexo: sexo.valor,
          };

          var url = "http://localhost:4000/siAuto/registrarUsuarioPlanta";
          fetch(url, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json",
             
            },
          })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => console.log("Peticion exitosa:", response));
        }}
      >
        <div className="col-md-6">
          <label htmlFor="inputNombre" className="form-label">
            <strong>Nombre</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNombre"
            onChange={(e) => {
              validar(
                e.target.value,
                "msgNombre",
                /^[A-Za-z]{2,15}$/,
                nombre,
                setNombre
              );
            }}
          />
          <div id="msgNombre" style={{ marginTop: "2%" }}></div>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputApellido" className="form-label">
            <strong>Apellido</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="inputApellido"
            onChange={(e) => {
              validar(
                e.target.value,
                "msgApellido",
                /^[A-Za-z]{2,15}$/,
                apellido,
                setApellido
              );
            }}
          />
          <div id="msgApellido" style={{ marginTop: "2%" }}></div>
        </div>
        <div className="col-12">
          <label htmlFor="inputCedula" className="form-label">
            <strong>Cedula</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCedula"
            onChange={(e) => {
              validar(
                e.target.value,
                "msgCedula",
                /^[0-9]{8,12}$/,
                cedula,
                setCedula
              );
            }}
          />
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
            onChange={(e) => {
              validar(
                e.target.value,
                "msgCorreo",
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                correo,
                setCorreo
              );
            }}
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
            onChange={(e) => {
              validar(
                e.target.value,
                "msgDireccion",
                /^[#.0-9a-zA-Z\s,-]+$/,
                direccion,
                setDireccion
              );
            }}
          />
          <div id="msgDireccion" style={{ marginTop: "2%" }}></div>
        </div>
        <div className="col-12">
          <label htmlFor="numeroTelefono" className="form-label">
            <strong>Numero de telefono</strong>
          </label>
          <input
            type="number"
            className="form-control"
            id="numeroTelefono"
            onChange={(e) => {
              validar(
                e.target.value,
                "msgTelefono",
                /^[0-9]{10,17}$/,
                telefono,
                setTelefono
              );
            }}
          />
          <div id="msgTelefono" style={{ marginTop: "2%" }}></div>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword1" className="form-label">
            <strong>Contraseña</strong>
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword1"
            onChange={(e) => {
              validar(
                e.target.value,
                "msgContra1",
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\W_]{8,}$/,
                contra1,
                setContra1
              );
            }}
          />
          <div id="msgContra1" style={{ marginTop: "2%" }}></div>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword2  " className="form-label">
            <strong>Repita Contraseña</strong>
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword2"
            onChange={(e) => {
              validar(
                e.target.value,
                "msgContra2",
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\W_]{8,}$/,
                contra2,
                setContra2
              );
            }}
          />
          <div id="msgContra2" style={{ marginTop: "2%" }}></div>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            <strong>Sexo</strong>
          </label>
          <select
            id="inputState"
            className="form-select"
            onChange={(e) => {
              const v = e.target.value;
              if (v === "") {
                campoError("msgSexo", "Seleciona una fecha");
                setSexo({ ...sexo, valor: v, valido: false });
              } else {
                campoCorrecto("msgSexo");
                setSexo({ ...sexo, valor: v, valido: true });
              }
            }}
          >
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
