import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { ServiciosTerminados } from '../components/ServiciosTerminados';
import { Footer } from '../components/Footer';
import { Titulo } from '../components/Titulo';

export function ServTerminados() {
  return (
    <>
      <header className="fondo">
        <Header />
      </header>
      <div>
        <div className="container-grid">
          <Menu />
          <main>
            <Titulo titulo="Servicios Terminados" />
            <ServiciosTerminados />
          </main>
          <footer className="fondo text-center text-white">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
