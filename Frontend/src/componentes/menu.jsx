import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { estado } from "../componentes/formLogin";
import { getDatosPermisos } from "../api/api";

export function Menu() {
  const [sesion] = useState(estado.perfil);
  const [opcionesMenu, setOpcionesMenu] = useState([]);
 

  useEffect(() => {
    const fetch = async () => {
      const opmenu = await getDatosPermisos();
      setOpcionesMenu(opmenu);
    };

    fetch();
    
  }, [opcionesMenu]);

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
