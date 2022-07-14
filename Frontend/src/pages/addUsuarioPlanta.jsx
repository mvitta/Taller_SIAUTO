import React from 'react';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Formulario } from '../components/Formulario';
import { Footer } from '../components/Footer';
import { Titulo } from '../components/Titulo';

export function AddUsuarioPlanta() {
  return (
    <>
      <header className="fondo">
        <Header />
      </header>
      <div>
        <div className="container-grid">
          <Menu />
          <main>
            <Titulo titulo="Agregar Usuario De Planta" />
            <Formulario rol="planta" />
          </main>
          <footer className="fondo text-center text-white">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
