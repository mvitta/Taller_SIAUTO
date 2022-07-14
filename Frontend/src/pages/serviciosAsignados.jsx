import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { ServiciosAsignados } from '../components/ServiciosAsignados';
import { Footer } from '../components/Footer';
import { Titulo } from '../components/Titulo';

export function ServAsignados() {
  return (
    <>
      <header className="fondo">
        <Header />
      </header>
      <div>
        <div className="container-grid">
          <Menu />
          <main>
            <Titulo titulo="Servicios Asignados" />
            <ServiciosAsignados />
          </main>
          <footer className="fondo text-center text-white">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
