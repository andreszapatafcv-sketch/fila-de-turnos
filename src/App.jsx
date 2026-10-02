import { useState } from "react";
import Turno from "./models/Turno.js";
import Fila from "./models/Fila.js";
import Historial from "./models/Historial.js";
import Formulario from "./components/Formulario.jsx";
import TarjetaSiguiente from "./components/TarjetaSiguiente.jsx";
import ListaEspera from "./components/ListaEspera.jsx";
import ListaHistorial from "./components/ListaHistorial.jsx";

// Componente principal. Aquí vive el ESTADO.
// Cuando el estado cambia, React vuelve a dibujar la pantalla solo.
export default function App() {
  const [fila, setFila] = useState(new Fila()); // la fila (empieza vacía)
  const [contador, setContador] = useState(1); // número del próximo turno
  const [historial, setHistorial] = useState(new Historial()); // pila de atendidos

  // Paso 3: crear un turno
  function registrar(nombre, motivo) {
    const nuevo = new Turno(contador, nombre, motivo);
    setFila(fila.agregar(nuevo)); // entra al final
    setContador(contador + 1);
  }

  // Paso 4: atender al siguiente
  function atender() {
    setHistorial(historial.apilar(fila.siguiente())); // lo apilamos en el historial
    setFila(fila.atender()); // sale el primero de la fila
  }

  // Extensión A: restaurar el último atendido
  function restaurar() {
    const turno = historial.tope(); // el que está encima de la pila
    setHistorial(historial.desapilar()); // sale del historial
    setFila(fila.agregarAlInicio(turno)); // vuelve al inicio de la fila
  }

  const siguiente = fila.siguiente();
  const esperando = fila.turnos.slice(1); // todos menos el primero

  // Paso 5: mostrar la información
  return (
    <div className="pagina">
      <h1>Fila de turnos</h1>
      <p className="sub">El primero que llega es el primero que se atiende (FIFO).</p>
      <div className="rejilla">
        <Formulario alRegistrar={registrar} />
        <div>
          <TarjetaSiguiente turno={siguiente} alAtender={atender} />
          <ListaEspera turnos={esperando} />
          <ListaHistorial historial={historial} alRestaurar={restaurar} />
        </div>
      </div>
    </div>
  );
}
