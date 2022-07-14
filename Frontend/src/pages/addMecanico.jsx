import React from 'react';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Formulario } from '../components/Formulario';
import { Footer } from '../components/Footer';
import { Titulo } from '../components/Titulo';

export function AddMecanico() {
  return (
    <>
      <header className="fondo">
        <Header />
      </header>
      <div className='aaaaaaaaa'>
        <div className="container-grid">
          <Menu />
          <main>
            <Titulo titulo="Agregar Usuario Mecanico" />
            <Formulario rol="mecanico" />
          </main>
          <footer className="fondo text-center text-white">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
