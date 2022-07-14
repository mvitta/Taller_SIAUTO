import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { AsignarCita } from "../components/AsignarCita";
import { Footer } from "../components/Footer";
import { Titulo } from "../components/Titulo";


export function ProgramarCitas() {
  return (
    <>
      <header className="fondo">
        <Header />
      </header>
      <div>
        <div className="container-grid">
          <Menu />
          <main
           
          >
            <Titulo titulo="Programar Cita" />
            <AsignarCita />
          </main>

         
            <footer className="fondo text-center text-white">
              <Footer />
            </footer>
          
        </div>
      </div>
    </>
  );
}
