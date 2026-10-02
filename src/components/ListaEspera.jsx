// Lista de quienes esperan (sin contar al que sigue).
export default function ListaEspera({ turnos }) {
  return (
    <div className="caja">
      <h2>En espera ({turnos.length})</h2>
      {turnos.length === 0 ? (
        <p>Nadie más está esperando.</p>
      ) : (
        <ul>
          {turnos.map((t) => (
            <li className="persona" key={t.numero}>
              <span className="ficha">#{t.numero}</span>
              <span>
                {t.nombre}
                <small>{t.motivo}</small>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
