import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import logo from '../assets/mecanico.png';

export function Header() {
  const { user, setUser } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(
    function () {
      document.getElementById('logout').addEventListener('click', function () {
        navigate('/');
        setUser([false], {});
      });
    },
    [setUser, navigate]
  );

  return (
    <div className='container-fluid'>
      <div
        className='
              d-flex
              flex-wrap 
              justify-content-between
              align-items-center 
            '
      >
        <section>
          <img src={logo} alt='Taller SiAuto' />
        </section>
        <section className='section-header'>
          <div>
            <Link className='nav-link px-2 text-white' to='/Inicio'>
              Inicio
            </Link>
          </div>

          <div className='text-end'>
            {user[0] ?? (
              <button type='button' className='btn btn-outline-light me-2'>
                Iniciar Sesion
              </button>
            )}
            <button type='button' className='btn btn-warning' id='logout'>
              Cerrar Sesion
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
