import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDatosPermisos } from "../api/api";
import { UserContext } from "../context/UserContext";

export function Menu() {
  const [opcionesMenu, setOpcionesMenu] = useState([]);
  const { user } = React.useContext(UserContext);

  // console.log("userContext MENU:", user);

  useEffect(() => {
    const fetch = async () => {
      const opmenu = await getDatosPermisos();
      setOpcionesMenu(opmenu);
    };

    fetch();
  }, []);

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
              elemento.permisos.includes(user.rol) && (
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
