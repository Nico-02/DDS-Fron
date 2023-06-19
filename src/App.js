import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Inicio from "./components/Inicio";
import Jugadores from "./components/Jugadores/Jugadores";
import Menu from "./components/Menu"
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu />
        <div className="divBody">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/jugadores/jugadores" element={<Jugadores />} />
              <Route path="*" element={<Navigate to="/Inicio" replace />} />
            </Routes>
        </div>
        < Footer/>
      </BrowserRouter>
    </>
  );
}
export default App;
