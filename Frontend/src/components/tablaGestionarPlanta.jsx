import React, { useEffect, useState } from "react";
import "../css/tablaGestionPlanta.css";
import { fetchData } from "../services/request";

export function TablaGestionarUsuarioPlanta() {
  const [data, setData] = useState([]);

  useEffect(function () {
    var url = "http://localhost:4000/usuariosPlantas";
    fetchData(url).then((resolve) => {
      setData(resolve);
    });
  }, []);

  useEffect(function () {
    const tablePlanta = document.getElementById("myTable");
    tablePlanta.addEventListener("click", function (e) {
      let idRow = parseInt(e.target.className) + 1;
      if (idRow) {
        const rows = document.getElementsByTagName("tr");
        const rowSelected = rows[idRow];
        console.log(rowSelected.textContent.split(" ")); // contenido de la fila que voy a modificar en la base de datos
      }
    });
  }, []);

  const headersTable = [
    "Cedula",
    "Nombre",
    "Apellido",
    "Correo",
    "Direccion",
    "Telefono",
    "Sexo",
  ];

  return (
    <div className="containerUsuarioGestionPlanta">
      <form action="" method="">
        <div className="table-responsive">
          <table className="table" id="myTable">
            <thead className="fondo text-white">
              <tr>
                {headersTable.map((value) => {
                  return (
                    <th scope="col" key={crypto.randomUUID()}>
                      {value}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((object, index) => {
                return (
                  <tr key={crypto.randomUUID()}>
                    {Object.entries(object).map((value) => {
                      return (
                        <td key={crypto.randomUUID()} className={index}>
                          {value[1] + " "}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button type="button" className="btn btn-primary btnGestionPlanta">
            Editar Registro
          </button>
          <button
            value="Editar"
            type="button"
            className="btn btn-success btnGestionPlanta"
          >
            Editar usuario de planta
          </button>
          <button type="button" className="btn btn-danger btnGestionPlanta">
            Eliminar usuario de planta
          </button>
        </div>
      </form>
    </div>
  );
}
