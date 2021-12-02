import { Header } from "../componentes/header";
import { Menu } from "../componentes/menu";
import { AsignarCita } from "../componentes/asignarCita";
import { Footer } from "../componentes/footer";
import { Titulo } from "../componentes/titulo";

export function ProgramarCitas() {
  return (
    <div>
      <header className="p-3 fondo text-white">
        <Header />
      </header>
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Titulo titulo="Programar cita"/>
            <AsignarCita />
          </main>
          <footer className="fondo text-center text-white">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}
