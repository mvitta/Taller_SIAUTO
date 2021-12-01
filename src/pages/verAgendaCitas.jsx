import { Header } from "../componentes/header";
import { Menu } from "../componentes/menu";
import { CitasDiarias } from "../componentes/citasDiarias";
import { Footer } from "../componentes/footer";

export function VerCitas() {
  return (
    <div>
      <header className="p-3 fondo text-white">
        <Header />
      </header>
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <CitasDiarias />
          </main>
          <footer className="fondo text-center text-white">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}
