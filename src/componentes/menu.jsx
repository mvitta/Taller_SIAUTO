import React, { useState } from "react";
import { Link } from "react-router-dom";
import { inicioSesion } from "../componentes/formLogin";

export function Menu() {
  console.log(inicioSesion);
  const [sesion] = useState(inicioSesion);
  
  const opcionesMenu = [
    {
      id: 1,
      valor: "Perfil",
      permisos: ["mecanico", "planta", "admin"],
      ruta: "/Perfil",
    },

    {
      id: 2,
      valor: "Gestionar usuarios de planta",
      permisos: ["admin"],
      ruta: "/GestionarUsuariosDePlanta",
    },

    {
      id: 3,
      valor: "Registrar usuario de planta",
      permisos: ["admin"],
      ruta: "/registrarUsuarioPlanta",
    },

    {
      id: 4,
      valor: "Gestionar mecanicos",
      permisos: ["planta", "admin"],
      ruta: "/GestionarMecanicos",
    },

    {
      id: 5,
      valor: "Registrar mecanico",
      permisos: ["admin"],
      ruta: "/registrarMecanico",
    },

    {
      id: 6,
      valor: "Configurar servicios",
      permisos: ["planta", "admin"],
      ruta: "/ConfigurarServicios",
    },

    {
      id: 7,
      valor: "Ver agenda de citas",
      permisos: ["planta", "admin"],
      ruta: "/VerAgendaCitas",
    },

    {
      id: 8,
      valor: "Programa citas",
      permisos: ["planta", "admin"],
      ruta: "/ProgramaCitas",
    },

    {
      id: 9,
      valor: "Servicios asignados",
      permisos: ["mecanico", "planta", "admin"],
      ruta: "/ServiciosAsignados",
    },

    {
      id: 10,
      valor: "Servicios en proceso",
      permisos: ["mecanico", "planta", "admin"],
      ruta: "/ServiciosEnProcesos",
    },

    {
      id: 11,
      valor: "Servicios terminados",
      permisos: ["mecanico", "planta", "admin"],
      ruta: "/ServiciosTerminados",
    },
  ];

  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {opcionesMenu.map(
            (elemento) =>
              // si en el vector de permisos se encuenta lo que esta almacenado en sesion, muestra el elemento
              elemento.permisos.includes(sesion) && (
                <li className="nav-item" key={elemento.id}>
                  <Link className="nav-link" to={elemento.ruta}>
                    {elemento.valor}
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </nav>
  );
}
