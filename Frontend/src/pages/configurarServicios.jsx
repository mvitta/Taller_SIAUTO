import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { ConfigurarServicio } from '../components/ConfigurarServicio';
import { Footer } from '../components/Footer';
import { Titulo } from '../components/Titulo';

export function ConfigServicio() {
  return (
    <>
      <header className="fondo">
        <Header />
      </header>
      <div>
        <div className="container-grid">
          <Menu />
          <main>
            <Titulo titulo="Configurar Servicios" />
            <ConfigurarServicio />
          </main>
          <footer className="fondo text-center text-white">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
