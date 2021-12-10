import { BrowserRouter, Routes, Route } from "react-router-dom"; // V6 -> nuevos cambios
import { TGestionMecanico } from "./pages/gestionarMecanico";
import { GestionarUsuariosPlanta } from "./pages/gestionarUsuariosPlanta";
import { ConfigServicio } from "./pages/configurarServicios";
import { VerCitas } from "./pages/verAgendaCitas";
import { ProgramarCitas } from "./pages/programarCitas";
import { ServAsignados } from "./pages/serviciosAsignados";
import { ServProceso } from "./pages/servicioEnProceso";
import { ServTerminados } from "./pages/serviciosTerminados";
import { AddMecanico } from "./pages/addMecanico";
import { AddUsuarioPlanta } from "./pages/addUsuarioPlanta";
import { SeccionInicio } from "./pages/seccionInicio";
import { IniciarSesion } from "./pages/iniciaSesion";
import { PerfilUsuario } from "./pages/PerfilUsuario";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IniciarSesion />} />
        <Route path="/Inicio" element={<SeccionInicio />} />
        <Route path="/Perfil" element={<PerfilUsuario />} />
        <Route
          path="/GestionarUsuariosDePlanta"
          element={<GestionarUsuariosPlanta />}
        />
        <Route path="/registrarUsuarioPlanta" element={<AddUsuarioPlanta />} />
        <Route path="/GestionarMecanicos" element={<TGestionMecanico />} />
        <Route path="/registrarMecanico" element={<AddMecanico />} />
        <Route path="/ConfigurarServicios" element={<ConfigServicio />} />
        <Route path="/VerAgendaCitas" element={<VerCitas />} />
        <Route path="/ProgramaCitas" element={<ProgramarCitas />} />
        <Route path="/ServiciosAsignados" element={<ServAsignados />} />
        <Route path="/ServiciosEnProcesos" element={<ServProceso />} />
        <Route path="/ServiciosTerminados" element={<ServTerminados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
