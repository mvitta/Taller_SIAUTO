import React from "react";
import alineacion from "../Imagenes/Imagenes servicio en proceso/alineacion.jpg";
import amortiguadores from "../Imagenes/Imagenes servicio en proceso/amortiguadores.jpg";
import discos from "../Imagenes/Imagenes servicio en proceso/discos.jpg";
import suspension from "../Imagenes/Imagenes servicio en proceso/suspension.jpg";
import rotacion from "../Imagenes/Imagenes servicio en proceso/rotacion.jpg";
import c_aceite from "../Imagenes/Imagenes servicio en proceso/cambioAceite.jpg";
import revision_f from "../Imagenes/Imagenes servicio en proceso/revisionFrenos.jpg";
import pastillas from "../Imagenes/Imagenes servicio en proceso/pastillas.jpg";

export function ServiciosEnProceso() {
  const todosServicios = [
    {
      titulo: "Frenos",
      imagen: revision_f,
    },
    {
      titulo: "Pastillas",
      imagen: pastillas,
    },
    {
      titulo: "Discos",
      imagen: discos,
    },
    {
      titulo: "Suspension",
      imagen: suspension,
    },
    {
      titulo: "Amortiguadores",
      imagen: amortiguadores,
    },
    {
      titulo: "C. Aceite",
      imagen: c_aceite,
    },
    {
      titulo: "Alineacion",
      imagen: alineacion,
    },
    {
      titulo: "Rotacion",
      imagen: rotacion,
    },
  ];
  return (
    <div className="container" style={{ padding: "5%" }}>
      <form action="/base_html/serviciosEnProceso.html" method="post">
        <div className="row row-cols-3">
          {todosServicios.map((serv) => (
            <div className="col" style={{ textAlign: "center" }}>
              <div className="fondo">
                <h1 className="letras" style={{ fontWeight: "bold" }}>
                  {serv.titulo}
                </h1>
              </div>
              <img width="100%" src={serv.imagen} alt="" />

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
