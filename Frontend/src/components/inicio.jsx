import React from "react";
import Presentacion1 from "../assets/Imagenes_servicio_en_proceso/rotacion.jpg";
import Presentacion2 from "../assets/Imagenes_servicio_en_proceso/suspension.jpg";
import Presentacion3 from "../assets/Imagenes_servicio_en_proceso/pastillas.jpg";

export function Inicio() {
  return (
    <div
      className="container"
      style={{ marginTop: "3%", marginBottom: "5%", backgroundColor: "#E3E3E3" }}
    >
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Presentacion1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                <strong> Servicio de revision de Frenos</strong>
              </h1>
              <p>
                Revision de frenos completa, mantenimiento a todos los
                componenes para garantizar un frenado preciso
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Presentacion2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                <strong> Servicio de suspension a vehiculos </strong>
              </h1>
              <p>Revision de suspencion en general</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Presentacion3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                <strong>
                  Servicio de mantenimiento de pastillas de frenos
                </strong>
              </h1>
              <p>Solo para realizar revision a pastillas de frenos</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
