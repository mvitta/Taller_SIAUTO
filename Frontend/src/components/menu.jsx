import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDatosPermisos } from '../api/api';
import { UserContext } from '../context/UserContext';

export function Menu() {
  const [opcionesMenu, setOpcionesMenu] = useState([]);
  const { user } = React.useContext(UserContext);

  // console.log("userContext MENU:", user);

  useEffect(
    function () {
      const fetch = async function () {
        const opmenu = await getDatosPermisos();
        setOpcionesMenu(opmenu);
      };

      fetch();
    },
    [opcionesMenu]
  );

  return (
    <nav id='sidebarMenu'>
      <ul className='menu-flex'>
        {opcionesMenu.map(
          (elemento) =>
            // si en el vector de permisos se encuenta lo que esta almacenado en sesion, muestra el elemento
            elemento.permisos.includes(user[1].rol) && (
              <li className='nav-item' key={crypto.randomUUID()}>
                <Link className='nav-link item' to={elemento.ruta}>
                  {elemento.valor}
                </Link>
              </li>
            )
        )}
      </ul>
    </nav>
  );
}
