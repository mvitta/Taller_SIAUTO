import React from 'react';
import { socialMedia } from '../services/socialMedia';


export function Footer() {
  const [redes, setRedes] = React.useState([]);

  socialMedia
    .then((resolve) => {
      setRedes(resolve);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <div className="container p-4">
        <section className="">
          {redes.map((red) => (
            <a
              key={crypto.randomUUID()}
              className="btn btn-floating m-1"
              href="#!"
              role="button"
            >
              <img src={red.icono} alt="" className="iconRedSocial" />
            </a>
          ))}
        </section>
        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>
      </div>
      <div className="">
        © 2021 Copyright:
        <a className="text-white" href="#!">
          MDBootstrap.com
        </a>
      </div>
    </>
  );
}
