import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/request';

export function TablaGestionarPlanta() {
  const [data, setData] = useState([]);
  const headersTable = [
    'Cedula',
    'Nombre',
    'Apellido',
    'Correo',
    'Direccion',
    'Telefono',
    'Sexo',
  ];

  useEffect(function () {
    var url = 'http://localhost:4000/usuariosPlantas';
    fetchData(url).then((resolve) => {
      setData(resolve);
    });
  }, []);

  useEffect(function () {
    const tablePlanta = document.getElementById('myTable');
    tablePlanta.addEventListener('mouseover', function (e) {
      let idRow = parseInt(e.target.className) + 1;
      if (idRow) {
        const rowSelected = document.getElementsByTagName('tr')[idRow];
        rowSelected.addEventListener('mouseleave', () => {
          rowSelected.className = 'OutSelected';
        });
        rowSelected.className = 'Selected';
        console.log(rowSelected.textContent.split('. '));
      }
    });
  }, []);

  return (
    <div className='containerUsuarioGestionPlanta'>
      <form action='' method=''>
        <div className='table-responsive'>
          <table className='table' id='myTable'>
            <thead className='fondo text-white'>
              <tr>
                {headersTable.map((value) => {
                  return (
                    <th scope='col' key={crypto.randomUUID()}>
                      {value}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((object, index) => {
                return (
                  <tr key={crypto.randomUUID()}>
                    {Object.entries(object).map((value) => {
                      return (
                        <td key={crypto.randomUUID()} className={index}>
                          {value[1] + '. '}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className='section-button-flex'>
            <button
              value='Editar'
              type='button'
              className='btn btn-success btnGestionPlanta'
            >
              Editar
            </button>
            <button type='button' className='btn btn-danger'>
              Eliminar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
