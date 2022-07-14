import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { TablaGestionMecanico } from '../components/TablaGestionMecanicos';
import { Footer } from '../components/Footer';
import { Titulo } from '../components/Titulo';

export function TGestionMecanico() {
  return (
    <>
      <header className="fondo">
        <Header />
      </header>
      <div>
        <div className="container-grid">
          <Menu />
          <main>
            <Titulo titulo="Gestionar Usuarios Mecanicos" />
            <TablaGestionMecanico />
          </main>
          <footer className="fondo text-center text-white">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
