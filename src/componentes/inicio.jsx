import React from "react";
import Presentacion1 from "../Imagenes/Imagenes servicio en proceso/rotacion.jpg";
import Presentacion2 from "../Imagenes/Imagenes servicio en proceso/suspension.jpg";
import Presentacion3 from "../Imagenes/Imagenes servicio en proceso/pastillas.jpg";

export function Inicio() {
  return (
    <div
      className="container"
      style={{ marginTop: "3%", marginBottom: "5%", backgroundColor: "#E3E3E3" }}
    >
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Presentacion1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>
                <strong> Servicio de revision de Frenos</strong>
              </h1>
              <p>
                Revision de frenos completa, mantenimiento a todos los
                componenes para garantizar un frenado preciso
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Presentacion2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>
                <strong> Servicio de suspension a vehiculos </strong>
              </h1>
              <p>Revision de suspencion en general</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Presentacion3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
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
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
