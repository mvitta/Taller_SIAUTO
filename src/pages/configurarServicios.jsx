import { Header } from "../componentes/header";
import { Menu } from "../componentes/menu";
import { ConfigurarServicio } from "../componentes/configurarServicio";
import { Footer } from "../componentes/footer";
import { Titulo } from "../componentes/titulo";

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
