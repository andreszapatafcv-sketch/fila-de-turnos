// Tarjeta destacada con el siguiente turno.
// Si no hay nadie, muestra un mensaje claro.
export default function TarjetaSiguiente({ turno, alAtender }) {
  if (!turno) {
    return (
      <div className="vacia">
        <strong>No hay personas en la fila.</strong>
        <div>Registra un turno en el formulario para empezar.</div>
      </div>
    );
  }

  return (
    <div className="siguiente">
      <div>Sigue el turno</div>
      <div className="numero">#{turno.numero}</div>
      <div className="nombre">{turno.nombre}</div>
      <div className="motivo">Motivo: {turno.motivo}</div>
      <button onClick={alAtender}>Atender siguiente</button>
    </div>
  );
}
