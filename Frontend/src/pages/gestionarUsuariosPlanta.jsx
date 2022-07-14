import React from 'react';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import { TablaGestionarPlanta } from '../components/TablaGestionarPlanta';
import { Titulo } from '../components/Titulo';

export function GestionarUsuariosPlanta() {
  return (
    <>
      <header className='fondo'>
        <Header />
      </header>
      <div>
        <div className='container-grid'>
          <Menu />
          <main>
            <Titulo titulo='Gestionar Usuarios de Planta' />
            <TablaGestionarPlanta />
          </main>
          <footer className='fondo text-center text-white'>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
