import { Header } from "../componentes/header";
import { Menu } from "../componentes/menu";
import { Formulario } from "../componentes/formRegistro";
import { Footer } from "../componentes/footer";

export function AddMecanico() {
  return (
    <div>
      <header className="p-3 fondo text-white">
        <Header />
      </header>
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <main
            className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
          >
            <Formulario />
          </main>
          <footer className="fondo text-center text-white">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}
