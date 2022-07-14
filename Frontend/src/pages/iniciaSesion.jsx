import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Titulo } from "../components/Titulo";
import { Login } from "../components/Login";

export function IniciarSesion(props) {
  return (
    <>
      <header className="fondo">
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
    </>
  );
}
