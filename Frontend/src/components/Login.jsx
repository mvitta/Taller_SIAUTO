import React from 'react';
import { useNavigate } from 'react-router-dom'; // V6 -> nuevos cambios
import { UserContext } from '../context/UserContext';
import { validarUser } from '../services/request';

export function Login() {
  const { user, setUser } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(
    function () {
      document
        .getElementById('formulario')
        .addEventListener('submit', function (e) {
          const inputUser = document.getElementById('exampleInputEmail1').value;
          let data = { correo: inputUser };
          validarUser('http://localhost:4000/login', data).then((resolve) => {
            if (resolve) {
              setUser(resolve);
              navigate('Inicio');
            }
          });

          e.preventDefault();
        });
    },
    [setUser, navigate, user]
  );
  // ESTO NO DEBE REPETIRSE
  React.useEffect(
    function () {
      document.addEventListener('keydown', function (e) {
        console.log(e.key);
        if (e.key === 'Enter') {
          const inputUser = document.getElementById('exampleInputEmail1').value;
          let data = { correo: inputUser };
          validarUser('http://localhost:4000/login', data).then((resolve) => {
            // las url no se tienen que ver
            if (resolve) {
              setUser(resolve);
              navigate('Inicio');
            }
          });

          e.preventDefault();
        }
      });
    },
    [setUser, navigate]
  );

  return (
    <>
      <form className='contentLogin' id='formulario'>
        <div className='mb-3 loginItem'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Correo Electronico
          </label>
          <input
            type='email'
            name='correo'
            className='form-control'
            id='exampleInputEmail1'
          />
        </div>
        <div className='mb-3 loginItem'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Contraseña
          </label>
          <input
            type='password'
            name='password'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>
        <div className='mb-3 form-check loginItem'>
          <input type='checkbox' id='exampleCheck1' />
          <span
            className='form-check-label'
            htmlFor='exampleCheck1'
            id='spanlabel'
          >
            Recordar sesion
          </span>
        </div>
        <div className='loginItem'>
          <a className='dropdown-item loginItem' href='#!'>
            Olvidaste tu contraseña?
          </a>
        </div>
        <div className='loginItem'>
          <button type='submit' className='btn btn-primary btnLogin' id='login'>
            Ingresar
          </button>
          <button type='reset' className='btn btn-primary btnLogin' id='reset'>
            Borrar
          </button>
        </div>
      </form>
    </>
  );
}
