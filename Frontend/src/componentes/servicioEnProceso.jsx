import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // V6 -> nuevos cambios
import discos from "../Imagenes/Imagenes servicio en proceso/discos.jpg";
import alineacion from "../Imagenes/Imagenes servicio en proceso/alineacion.jpg";
import amortiguadores from "../Imagenes/Imagenes servicio en proceso/amortiguadores.jpg";
import aceite from "../Imagenes/Imagenes servicio en proceso/cambioAceite.jpg";
import pastillas from "../Imagenes/Imagenes servicio en proceso/pastillas.jpg";
import frenos from "../Imagenes/Imagenes servicio en proceso/revisionFrenos.jpg";
import rotacion from "../Imagenes/Imagenes servicio en proceso/rotacion.jpg";
import suspension from "../Imagenes/Imagenes servicio en proceso/suspension.jpg";

export function ServiciosEnProceso() {
  const [data, setData] = React.useState({ msg: "Sin Servicios" });
  const navigate = useNavigate();
  let cont = 0;
  let contServiciosTerminados = 0;

  const laID = useParams().id;
  console.log("ID: ", laID);

  React.useEffect(() => {
    if (data.discos === true) {
      cont++;
    }
    if (data.aceite === true) {
      cont++;
    }
    if (data.alineacion === true) {
      cont++;
    }
    if (data.amortiguadores === true) {
      cont++;
    }
    if (data.frenos === true) {
      cont++;
    }
    if (data.pastillas === true) {
      cont++;
    }
    if (data.rotacion === true) {
      cont++;
    }
    if (data.suspension === true) {
      cont++;
    }
  });

  const terminado = (id1, id2, msg) => {
    const campo = document.getElementById(id1);

    campo.className = "terminado";
    document.getElementById(id2).innerHTML = msg;
  };

  return (
    <div className="container" style={{ padding: "5%" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          var url = "http://localhost:4000/servicioEnProceso";
          fetch(url, {
            method: "POST",
            body: JSON.stringify({ id: laID }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => {
              setData(response);
              console.log(response);
            });

          console.log(data);
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "4%" }}>
          <button type="submit" className="btn btn-success">
            Obtener Servicios
          </button>
        </div>
      </form>
      <div className="row row-cols-3">
        {data.aceite && (
          <div className="col" style={{ textAlign: "center" }}>
            <div className="fondo">
              <h1 className="letras">Aceite</h1>
            </div>
            <img width="100%" src={aceite} alt="" />

            <div style={{ margin: "5%" }}>
              <button
                type="button"
                className="btn btn-outline-success"
                id="btnAceite"
                onClick={() => {
                  contServiciosTerminados++;
                  terminado("estadoAceite", "dispAceite", "Terminado");
                }}
              >
                Terminar Servicio
              </button>
            </div>
            <div className="sinTerminar" id="estadoAceite">
              <h1 className="display-7" id="dispAceite">
                Sin Terminar
              </h1>
            </div>
          </div>
        )}

        {data.alineacion && (
          <div className="col" style={{ textAlign: "center" }}>
            <div className="fondo">
              <h1 className="letras">Alineacion</h1>
            </div>
            <img width="100%" src={alineacion} alt="" />

            <div style={{ margin: "5%" }}>
              <button
                type="button"
                className="btn btn-outline-success"
                id="btnAlineacion"
                onClick={() => {
                  contServiciosTerminados++;
                  terminado("estadoAlineacion", "dispAlineacion", "Terminado");
                }}
              >
                Terminar Servicio
              </button>
            </div>
            <div className="sinTerminar" id="estadoAlineacion">
              <h1 className="display-7" id="dispAlineacion">
                Sin Terminar
              </h1>
            </div>
          </div>
        )}

        {data.amortiguadores && (
          <div className="col" style={{ textAlign: "center" }}>
            <div className="fondo">
              <h1 className="letras">Amortiguadores</h1>
            </div>
            <img width="100%" src={amortiguadores} alt="" />

            <div style={{ margin: "5%" }}>
              <button
                type="button"
                className="btn btn-outline-success"
                id="btnAmortiguadores"
                onClick={() => {
                  contServiciosTerminados++;
                  terminado(
                    "estadoAmortiguadores",
                    "dispAmortiguadores",
                    "Terminado"
                  );
                }}
              >
                Terminar Servicio
              </button>
            </div>
            <div className="sinTerminar" id="estadoAmortiguadores">
              <h1 className="display-7" id="dispAmortiguadores">
                Sin Terminar
              </h1>
            </div>
          </div>
        )}
        {data.discos && (
          <div className="col" style={{ textAlign: "center" }}>
            <div className="fondo">
              <h1 className="letras">Discos</h1>
            </div>
            <img width="100%" src={discos} alt="" />

            <div style={{ margin: "5%" }}>
              <button
                type="button"
                className="btn btn-outline-success"
                id="btnDiscos"
                onClick={() => {
                  contServiciosTerminados++;
                  terminado("estadoDiscos", "dispDiscos", "Terminado");
                }}
              >
                Terminar Servicio
              </button>
            </div>
            <div className="sinTerminar" id="estadoDiscos">
              <h1 className="display-7" id="dispDiscos">
                Sin Terminar
              </h1>
            </div>
          </div>
        )}
        {data.frenos && (
          <div className="col" style={{ textAlign: "center" }}>
            <div className="fondo">
              <h1 className="letras">Frenos</h1>
            </div>
            <img width="100%" src={frenos} alt="" />

            <div style={{ margin: "5%" }}>
              <button
                type="button"
                className="btn btn-outline-success"
                id="btnFrenos"
                onClick={() => {
                  contServiciosTerminados++;
                  terminado("estadoFrenos", "dispFrenos", "Terminado");
                }}
              >
                Terminar Servicio
              </button>
            </div>
            <div className="sinTerminar" id="estadoFrenos">
              <h1 className="display-7" id="dispFrenos">
                Sin Terminar
              </h1>
            </div>
          </div>
        )}
        {data.pastillas && (
          <div className="col" style={{ textAlign: "center" }}>
            <div className="fondo">
              <h1 className="letras">Pastillas</h1>
            </div>
            <img width="100%" src={pastillas} alt="" />

            <div style={{ margin: "5%" }}>
              <button
                type="button"
                className="btn btn-outline-success"
                id="btnPastillas"
                onClick={() => {
                  contServiciosTerminados++;
                  terminado("estadoPastillas", "dispPastillas", "Terminado");
                }}
              >
                Terminar Servicio
              </button>
            </div>
            <div className="sinTerminar" id="estadoPastillas">
              <h1 className="display-7" id="dispPastillas">
                Sin Terminar
              </h1>
            </div>
          </div>
        )}
        {data.rotacion && (
          <div className="col" style={{ textAlign: "center" }}>
            <div className="fondo">
              <h1 className="letras">Rotacion</h1>
            </div>
            <img width="100%" src={rotacion} alt="" />

            <div style={{ margin: "5%" }}>
              <button
                type="button"
                className="btn btn-outline-success"
                id="btnRotacion"
                onClick={() => {
                  contServiciosTerminados++;
                  terminado("estadoRotacion", "dispRotacion", "Terminado");
                }}
              >
                Terminar Servicio
              </button>
            </div>
            <div className="sinTerminar" id="estadoRotacion">
              <h1 className="display-7" id="dispRotacion">
                Sin Terminar
              </h1>
            </div>
          </div>
        )}
        {data.suspension && (
          <div className="col" style={{ textAlign: "center" }}>
            <div className="fondo">
              <h1 className="letras">Suspension</h1>
            </div>
            <img width="100%" src={suspension} alt="" />

            <div style={{ margin: "5%" }}>
              <button
                type="button"
                className="btn btn-outline-success"
                id="btnSuspension"
                onClick={() => {
                  contServiciosTerminados++;
                  terminado("estadoSuspension", "dispSuspension", "Terminado");
                }}
              >
                Terminar Servicio
              </button>
            </div>
            <div className="sinTerminar" id="estadoSuspension">
              <h1 className="display-7" id="dispSuspension">
                Sin Terminar
              </h1>
            </div>
          </div>
        )}
      </div>
      <form>
        <div className="row row-cols-3"></div>
        <div style={{ margin: "4%", textAlign: "center" }}>
          <button
            id="finalizar"
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: "4%" }}
            onClick={(e) => {
              console.log(cont);
              console.log(contServiciosTerminados);
              if (contServiciosTerminados === cont) {
                alert("Servicio Completado");
              }else{
                alert("Debes finalizar todos los servicios")
              }
            }}
          >
            Terminar Servicio
          </button>
        </div>
      </form>
    </div>
  );
}
