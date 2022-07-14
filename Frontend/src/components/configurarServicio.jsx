import React, { useState } from 'react';

export function ConfigurarServicio() {
  const [data, setsData] = useState({});
  const [id, setId] = useState(0);
  const [btnEditar, setBtnEditar] = useState(false);
  const style = { textAlign: 'center' };

  React.useEffect(() => {
    var url = 'http://localhost:4000/servicios';
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setsData(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ marginTop: '5%' }}>
      <form action='' method=''>
        <div className='table-responsive'>
          <table className='table table-striped table-sm'>
            <thead className='fondo text-white'>
              <tr>
                <th scope='col'>Seleccionar</th>
                <th scope='col'>ID</th>
                <th scope='col'>Servicio</th>
                <th scope='col'>Descripción</th>
                <th scope='col'>Duracion (minutos)</th>
              </tr>
            </thead>
            <tbody>
              {btnEditar && (
                <tr key={450} style={{ backgroundColor: '#CFCFCF' }}>
                  <td>
                    <input
                      type='submit'
                      value='Confirmar'
                      className='btn btn-primary'
                    />
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <input type='text' disabled={true} />
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <input type='text' required />
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <textarea cols='30' required></textarea>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <input type='number' required />
                  </td>
                </tr>
              )}
              {Object.keys(data).map((e) => {
                return (
                  <tr key={crypto.randomUUID()}>
                    <td key={crypto.randomUUID()}>
                      <input type='radio' name='options' id={data[e]._id} />
                    </td>
                    <td key={crypto.randomUUID()}>{data[e]._id}</td>
                    <td key={crypto.randomUUID()}>{data[e].servicio}</td>
                    <td key={crypto.randomUUID()}>{data[e].descripcion}</td>
                    <td key={crypto.randomUUID()} style={style}>
                      {data[e].duracion}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='section-btn'>
          <button
            value='Editar'
            type='button'
            className='btn btn-success'
            onClick={(e) => {
              const inputRadios = document.getElementsByName('options');
              for (let i = 0; i < inputRadios.length; i++) {
                const input = inputRadios[i];
                if (input.checked) {
                  setId(input.id);
                  break;
                }
              }
              setBtnEditar(true);
              console.log(id);
            }}
          >
            Editar
          </button>
          <button
            type='button'
            className='btn btn-danger'
            onClick={(e) => {
              const inputRadios = document.getElementsByName('options');
              let id = null;
              for (let i = 0; i < inputRadios.length; i++) {
                const input = inputRadios[i];
                if (input.checked) {
                  id = input.id;
                  break;
                }
              }
              if (id === null) {
                alert('para eliminar un registro debes selecionar un id');
              } else {
                console.log(id);
                var url = 'http://localhost:4000/serviciosBorrar';
                fetch(url, {
                  method: 'POST',

                  body: JSON.stringify({ _id: id }),
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                })
                  .then((res) => res.json())
                  .catch((error) => console.error('Error:', error))
                  .then((response) => {
                    console.log(response);
                    alert(response.message);
                  });
              }
            }}
          >
            Eliminar
          </button>
          <button type='button' className='btn btn-primary'>
            Añadir Servicio
          </button>
        </div>
      </form>
    </div>
  );
}
