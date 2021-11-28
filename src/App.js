import "./App.css";
import React, { Fragment } from "react";
import { Header } from "./componentes/header";
import { Menu } from "./componentes/menu";
import { Formulario } from "./componentes/formRegistro";
import { Footer } from "./componentes/footer";

function App() {
  return (
    <Fragment>
      <header className="p-3 bg-dark text-white">
        <Header />
      </header>
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Formulario />
          </main>
          <footer className="bg-dark text-center text-white">
            <Footer />
          </footer>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
