import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { Titulo } from "../components/Titulo";
import { Inicio } from "../components/Inicio";

export function SeccionInicio() {
  return (
    <>
      <header className="fondo">
        <Header />
      </header>
      <div>
        <div className="container-grid">
          <Menu />
          <main>
            <Titulo titulo="Bienvenido a SIAUTO" />
            <Inicio />
          </main>
          <footer className="fondo text-center text-white">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
