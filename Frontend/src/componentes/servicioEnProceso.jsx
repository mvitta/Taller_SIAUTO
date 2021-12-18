import React, { useState } from "react";
import { useParams } from "react-router-dom";

export function ServiciosEnProceso() {
  const [data, setData] = React.useState({});
  const [todosServicios, setTodosServicios] = useState([]);

  const laID = useParams().id;
  // console.log(laID);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  function enviarID() {
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
      .then((response) => setData(response));
  }

  return (
    <div className="container" style={{ padding: "5%" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          enviarID();
        }}
      >
        <div style={{ textAlign: "center" }}>
          <button type="submit">Obtener Servicio</button>
        </div>
      </form>

      <form>
        <div className="row row-cols-3">
          {Object.keys(data).map((e) => (
            <div className="col" style={{ textAlign: "center" }}>
              <div className="fondo">
                <h1 className="letras">{e}</h1>
              </div>
              <img width="100%" src="" alt="" />

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
          <button type="button" className="btn btn-primary">
            Completar Servicio
          </button>
        </div>
      </form>
    </div>
  );
}
