// Historial de atendidos (el más reciente aparece arriba).
export default function ListaHistorial({ historial, alRestaurar }) {
  const mostrados = [...historial.turnos].reverse(); // el tope primero

  return (
    <div className="caja historial">
      <h2>Historial de atendidos ({mostrados.length})</h2>
      {historial.estaVacio() ? (
        <p>Aún no se ha atendido a nadie.</p>
      ) : (
        <>
          <ul>
            {mostrados.map((t, i) => (
              <li className="persona" key={t.numero}>
                <span className="ficha">#{t.numero}</span>
                <span>
                  {t.nombre}
                  <small>
                    {t.motivo}
                    {i === 0 ? " · último atendido" : ""}
                  </small>
                </span>
              </li>
            ))}
          </ul>
          <button onClick={alRestaurar}>Restaurar último atendido</button>
        </>
      )}
    </div>
  );
}
