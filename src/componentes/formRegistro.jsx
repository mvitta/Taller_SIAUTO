import React, { Fragment } from "react";

export function Formulario() {
  return (
    <Fragment>
      <div style={({ marginTop: "2%" }, { textAlign: "center" })}>
        <h1 className="display-6">
          <strong>Añadir Mecánico</strong>
        </h1>
      </div>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            <strong>Nombre</strong>
          </label>
          <input type="text" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            <strong>Apellido</strong>
          </label>
          <input type="text" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            <strong>Cedula</strong>
          </label>
          <input type="number" className="form-control" id="inputAddress" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            <strong>Correo</strong>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@ejemplo.com"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            <strong>Direccion</strong>
          </label>
          <input type="text" className="form-control" id="inputAddress2" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            <strong>Numero de telefono</strong>
          </label>
          <input type="number" className="form-control" id="numeroTelefono" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            <strong>Contraseña</strong>
          </label>
          <input type="password" className="form-control" id="inputPassword1" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            <strong>Repita Contraseña</strong>
          </label>
          <input type="password" className="form-control" id="inputPassword2" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            <strong>Sexo</strong>
          </label>
          <select id="inputState" className="form-select">
            <option key="1" defaultValue>
              Elegir...
            </option>
            <option key="2">Femenino</option>
            <option key="3">Masculino</option>
          </select>
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
    </Fragment>
  );
}
