import React from 'react';
import { UserContext } from '../context/UserContext';
import foto from '../assets/Imagenes_servicio_en_proceso/Perfil.jpg'; // debe de venir de la base de datos

export function Perfil() {
  const { user } = React.useContext(UserContext);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='containerImage'>
            <img alt='Perfil' src={foto} className='image' />
          </div>
          <div className='card-body'>
            <p className='card-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              cupiditate dignissimos delectus, adipisci exercitationem id
              tempora recusandae ipsa, facilis mollitia temporibus ad facere
              totam culpa. Ipsa dolorum vel commodi totam?
            </p>
            <p className='card-text'>
              <small className='text-muted'>
                Ultima actualizacion hace 1 semana
              </small>
            </p>
          </div>

          <div className='col'>
            <div style={{ textAlign: 'center' }}>
              <h5 className='card-title'>
                SIAUTO Taller De Mecanica Automotriz
              </h5>
            </div>
            <div className='elementPerfil'>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Primer elemento</li>
                <li className='list-group-item'>Segundo elemento</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col containerInformacionPerfil'>
          <div className='card text-white'>
            <div className='card-header'>
              <h5 className='card-title'>INFORMACION DEL PERFIL</h5>
            </div>
            {Object.entries(user[1]).map((value) => {
              return (
                <div key={crypto.randomUUID()}>
                  <div key={crypto.randomUUID()}>
                    <h5 className='card-title'>
                      {value[0].charAt(0).toUpperCase() + value[0].slice(1)}
                    </h5>
                  </div>
                  <input
                    key={crypto.randomUUID()}
                    type='text'
                    className='form-control inputTextPerfil'
                    value={value[1]}
                    disabled
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
