import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { ConfigurarServicio } from "../components/configurarServicio";
import { Footer } from "../components/footer";
import { Titulo } from "../components/titulo";

export function ConfigServicio() {
  return (
    <div>
      <header className="p-3 fondo text-white">
        <Header />
      </header>
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <main
            className="col-md-9 ms-sm-auto col-lg-10 px-md-4 overflow-auto"
            style={{ height: "100%" }}
          >
            <Titulo titulo="Configurar Servicios" />
            <ConfigurarServicio />
          </main>
          <footer className="fondo text-center text-white">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}
