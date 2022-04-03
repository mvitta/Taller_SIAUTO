import React from "react";

export function Formulario(props) {
  React.useEffect(function () {
    document.querySelector("#formulario").addEventListener("submit", (e) => {
      const frData = new FormData(e.target);
      frData.append("rol", "planta"); // o como props del componente
      const data = Object.fromEntries(frData);
      console.log(data);
      e.preventDefault();
    });
  }, []);

  // function campoCorrecto(id) {
  //   document.getElementById(id).className = "blanco";
  // }

  // function campoError(id, msg) {
  //   const campo = document.getElementById(id);
  //   campo.className = "alert alert-danger";
  //   campo.innerHTML = msg;
  // }

  // function validar(value, id, expReg, st, fst) {
  //   if (expReg.test(value)) {
  //     campoCorrecto(id);
  //     fst({
  //       ...st,
  //       valor: value,
  //       valido: true,
  //     });
  //   } else {
  //     campoError(id, "El campo no es valido");
  //     fst({
  //       ...st,
  //       valor: value,
  //       valido: false,
  //     });
  //   }
  // }
  return (
    <div className="containerForm" id="container">
      <form className="row g-3" id="formulario">
        <div className="col-md-6">
          <label htmlFor="nombre" className="form-label">
            <strong>Nombre</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="apellido" className="form-label">
            <strong>Apellido</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            name="apellido"
          />
        </div>
        <div className="col-12">
          <label htmlFor="cedula" className="form-label">
            <strong>Cedula</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="cedula"
            name="cedula"
          />
        </div>
        <div className="col-12">
          <label htmlFor="correo" className="form-label">
            <strong>Correo</strong>
          </label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            placeholder="name@ejemplo.com"
          />
        </div>
        <div className="col-12">
          <label htmlFor="direccion" className="form-label">
            <strong>Direccion</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            name="direccion"
            placeholder="Cra 42G2 # 97 - 26"
          />
        </div>
        <div className="col-12">
          <label htmlFor="telefono" className="form-label">
            <strong>Numero de telefono</strong>
          </label>
          <input
            type="number"
            className="form-control"
            id="telefono"
            name="telefono"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="password1" className="form-label">
            <strong>Contraseña</strong>
          </label>
          <input
            type="password"
            className="form-control"
            id="password1"
            name="password1"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="password2  " className="form-label">
            <strong>Repita Contraseña</strong>
          </label>
          <input
            type="password"
            className="form-control"
            id="password2"
            name="password2"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="sexo" className="form-label">
            <strong>Sexo</strong>
          </label>
          <select id="sexo" name="sexo" className="form-control">
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="fecha" className="form-label">
            <strong>Fecha</strong>
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="fecha"
            name="fecha"
          />
        </div>
        <div className="col-12" style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
          <button
            type="dataet"
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
// var url = "http://localhost:4000/agregarUsuarios";
// fetch(url, {
//   method: "POST",
//   body: JSON.stringify(datos),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((data) => data.json())
//   .catch((error) => console.error("Error:", error))
//   .then((dataponse) => {
//     console.log("Peticion exitosa:", dataponse);
//     alert(dataponse.message);
//   });
