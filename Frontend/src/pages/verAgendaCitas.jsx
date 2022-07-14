import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { CitasDiarias } from '../components/CitasDiarias';
import { Footer } from '../components/Footer';
import { Titulo } from '../components/Titulo';

export function VerCitas() {
  return (
    <>
      <header className="fondo">
        <Header />
      </header>
      <div>
        <div className="container-grid">
          <Menu />
          <main>
            <Titulo titulo="Citas Programadas" />
            <CitasDiarias />
          </main>
          <footer className="fondo text-center text-white">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
