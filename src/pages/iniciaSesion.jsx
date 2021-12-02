import React from "react";
import { Header } from "../componentes/header";
import { Footer } from "../componentes/footer";
import { Titulo } from "../componentes/titulo";
import { Login } from "../componentes/formLogin";

export function IniciarSesion(props) {
  return (
    <div>
      <header className="p-3 fondo text-white">
        <Header />
      </header>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
      >
        <div>
          <Titulo titulo="Iniciar Sesion" />
        </div>
      </div>
      <Login />
      <footer className="fondo text-center text-white">
        <Footer />
      </footer>
    </div>
  );
}
