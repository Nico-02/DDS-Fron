import React from "react";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="container">
      <h1>Inicio</h1>
      <hr />
      <div
        className="mt-4 p-5 rounded"
        style={{ backgroundColor: "lightgray" }}
      >
        <h1>Front tp</h1>
        <p>Practica simulacro parcial...</p>

        <Link to="/jugadores/Jugadores" className="btn btn-lg btn-primary">
          <i className="fa fa-search"> </i>  Ver Jugadores
        </Link>


      </div>
    </div>
  );
}

export default Inicio ;