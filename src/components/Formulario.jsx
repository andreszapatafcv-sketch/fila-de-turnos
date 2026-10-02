import { useState } from "react";

// Formulario para registrar a una persona.
// Recibe por props la función alRegistrar (la define App).
export default function Formulario({ alRegistrar }) {
  const [nombre, setNombre] = useState("");
  const [motivo, setMotivo] = useState("Consulta");
  const [error, setError] = useState("");

  function enviar(evento) {
    evento.preventDefault(); // evita que la página se recargue
    if (nombre.trim() === "") {
      setError("Escribe el nombre de la persona.");
      return;
    }
    alRegistrar(nombre.trim(), motivo); // avisa a App que hay un turno nuevo
    setNombre("");
    setError("");
  }

  return (
    <form className="caja" onSubmit={enviar}>
      <h2>Registrar turno</h2>
      <label>
        Nombre
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej: Ana Gómez"
        />
      </label>
      <label>
        Motivo
        <select value={motivo} onChange={(e) => setMotivo(e.target.value)}>
          <option>Consulta</option>
          <option>Pago</option>
          <option>Reclamo</option>
          <option>Trámite</option>
        </select>
      </label>
      {error && <p className="error">{error}</p>}
      <button type="submit">Pedir turno</button>
    </form>
  );
}
