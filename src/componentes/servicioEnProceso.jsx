import React, { useEffect, useState } from "react";
import { getDatosTiposServicios } from "../api/api";

export function ServiciosEnProceso() {
  const [todosServicios, setTodosServicios] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const todoser = await getDatosTiposServicios();
      setTodosServicios(todoser);
    };

    fetch();
    
  }, [todosServicios]);

  const getImage = (imageName) => {
    const imagen = imageName;
    return require("../Imagenes/Imagenes servicio en proceso/"+imagen).default
  };

  return (
    <div className="container" style={{ padding: "5%" }}>
      <form method="post">
        <div className="row row-cols-3">
          {todosServicios.map((serv) => (
            <div className="col" style={{ textAlign: "center" }}>
              <div className="fondo">
                <h1 className="letras" style={{ fontWeight: "bold" }}>
                  {serv.titulo}
                </h1>
              </div>
              <img width="100%" src={getImage(serv.imagen)} alt="" />

              <div style={{ margin: "5%" }}>
                <button type="button" className="btn btn-outline-success" id="">
                  Terminar Servicio
                </button>
              </div>
              <div className="terminado">
                <h1 className="display-7">Terminado</h1>
              </div>
            </div>
          ))}
        </div>
        <div style={{ margin: "4%", textAlign: "center" }}>
          <button type="submit" className="btn btn-primary">
            Completar Servicio
          </button>
        </div>
      </form>
    </div>
  );
}
