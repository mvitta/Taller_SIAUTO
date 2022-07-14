import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { ServiciosEnProceso } from '../components/ServiciosEnProceso';
import { Footer } from '../components/Footer';
import { Titulo } from '../components/Titulo';

export function ServProceso() {
  return (
    <>
      <header className="fondo">
        <Header />
      </header>
      <div>
        <div className="container-grid">
          <Menu />
          <main>
            <Titulo titulo="Servicio En Proceso" />
            <ServiciosEnProceso />
          </main>
          <footer className="fondo text-center text-white">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
