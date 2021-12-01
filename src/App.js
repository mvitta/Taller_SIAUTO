import { BrowserRouter, Routes, Route } from "react-router-dom"; // V6 -> nuevos cambios
import { TGestionMecanico } from "./pages/gestionarMecanico";
import { GestionarUsuariosPlanta } from "./pages/gestionarUsuariosPlanta";
import { ConfigServicio } from "./pages/configurarServicios";
import { VerCitas } from "./pages/verAgendaCitas";
import { ProgramarCitas } from "./pages/programarCitas";
import { ServAsignados } from "./pages/serviciosAsignados";
import { ServProceso } from "./pages/servicioEnProceso";
import { ServTerminados } from "./pages/serviciosTerminados";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/GestionarUsuariosDePlanta"
            element={<GestionarUsuariosPlanta />}
          />
          <Route path="/GestionarMecanicos" element={<TGestionMecanico />} />
          <Route path="/ConfigurarServicios" element={<ConfigServicio />} />
          <Route path="/VerAgendaCitas" element={<VerCitas />} />
          <Route path="/ProgramaCitas" element={<ProgramarCitas />} />
          <Route path="/ServiciosAsignados" element={<ServAsignados />} />
          <Route path="/ServiciosEnProcesos" element={<ServProceso />} />
          <Route path="/ServiciosTerminados" element={<ServTerminados />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
