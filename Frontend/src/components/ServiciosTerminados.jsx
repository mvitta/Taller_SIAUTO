import React from 'react';

export function ServiciosTerminados() {
  return (
    <div>
      <div style={{ marginTop: '3%', textAlign: 'center' }}>
        <form className='btn-search-services'>
          <input
            type='search'
            className='form-control form-control-dark input-search'
            placeholder='Buscar Servicio ...'
          />
          <button type='button' className='btn btn-primary'>
            Buscar
          </button>
        </form>
      </div>
      <div style={{ marginTop: '5%' }} className='table-responsive'>
        <form action='' method='post'>
          <table className='table'>
            <thead className='fondo text-white'>
              <tr>
                <th scope='col'>Seleccionar</th>
                <th scope='col'>No</th>
                <th scope='col'>ID</th>
                <th scope='col'>Mecánico</th>
                <th scope='col'>Cliente</th>
                <th scope='col'>Marca</th>
                <th scope='col'>Modelo</th>
                <th scope='col'>Año</th>
                <th scope='col'>Servicios</th>
                <th scope='col'>Fecha</th>
                <th scope='col'>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <input type='radio' name='options' id='option1' />
                </th>
                <th>1</th>
                <td>1</td>
                <td>Basilio</td>
                <td>Laura</td>
                <td>Chevrolet</td>
                <td>Sail</td>
                <td>2021</td>
                <td>
                  <select className='custom-select' id='inputGroupSelect01'>
                    <option defaultValue>Abrir</option>
                    <option value='1'>Revision de frenos</option>
                    <option value='2'>Suspension</option>
                    <option value='3'>Alineacion</option>
                  </select>
                </td>
                <td>23/11/2021</td>
                <td style={{ color: 'white', backgroundColor: 'green' }}>
                  Terminado
                </td>
              </tr>
              <tr>
                <th>
                  <input type='radio' name='options' id='option1' />
                </th>
                <th>1</th>
                <td>1</td>
                <td>Basilio</td>
                <td>Laura</td>
                <td>Chevrolet</td>
                <td>Sail</td>
                <td>2021</td>
                <td>
                  <select className='custom-select' id='inputGroupSelect01'>
                    <option defaultValue>Abrir</option>
                    <option value='1'>Revision de frenos</option>
                    <option value='2'>Suspension</option>
                    <option value='3'>Alineacion</option>
                  </select>
                </td>
                <td>23/11/2021</td>
                <td style={{ color: 'white', backgroundColor: 'green' }}>
                  Terminado
                </td>
              </tr>
              <tr>
                <th>
                  <input type='radio' name='options' id='option1' />
                </th>
                <th>1</th>
                <td>1</td>
                <td>Basilio</td>
                <td>Laura</td>
                <td>Chevrolet</td>
                <td>Sail</td>
                <td>2021</td>
                <td>
                  <select className='custom-select' id='inputGroupSelect01'>
                    <option defaultValue>Abrir</option>
                    <option value='1'>Revision de frenos</option>
                    <option value='2'>Suspension</option>
                    <option value='3'>Alineacion</option>
                  </select>
                </td>
                <td>23/11/2021</td>
                <td style={{ color: 'white', backgroundColor: 'green' }}>
                  Terminado
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
