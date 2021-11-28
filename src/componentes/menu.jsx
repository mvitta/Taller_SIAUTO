import React from "react";

export function Menu() {
  const opcionesMenu = [
    {
      id: 1,
      enlace: "#!",
      valor: "Perfil",
    },

    {
      id: 2,
      enlace: "#!",
      valor: "Gestionar usuarios de planta",
    },

    {
      id: 3,
      enlace: "#!",
      valor: "Gestionar mecanicos",
    },

    {
      id: 4,
      enlace: "#!",
      valor: "Configurar servicios",
    },

    {
      id: 5,
      enlace: "#!",
      valor: "Ver agenda de citas",
    },

    {
      id: 6,
      enlace: "#!",
      valor: "Programa citas",
    },

    {
      id: 7,
      enlace: "#!",
      valor: "Servicios asignados",
    },

    {
      id: 8,
      enlace: "#!",
      valor: "Servicios en proceso",
    },

    {
      id: 9,
      enlace: "#!",
      valor: "Servicios terminados",
    },
  ];

  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {opcionesMenu.map((elemento) => (
            <li className="nav-item" key={elemento.id}>
              <a className="nav-link" href={elemento.enlace}>
                <span data-feather="gift"></span>
                {elemento.valor}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
