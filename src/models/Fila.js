// Molde de la fila. Aplica la regla FIFO (First In, First Out).
export default class Fila {
  constructor(turnos = []) {
    this.turnos = turnos; // arreglo de objetos Turno
  }

  // Agrega al FINAL de la fila (el que llega, espera atrás)
  agregar(turno) {
    return new Fila([...this.turnos, turno]);
  }

  // Saca al PRIMERO de la fila (el que llegó antes, se atiende antes)
  atender() {
    return new Fila(this.turnos.slice(1));
  }

  // Pone a una persona al INICIO (se usa al restaurar un turno)
  agregarAlInicio(turno) {
    return new Fila([turno, ...this.turnos]);
  }

  // Mira quién sigue, sin sacarlo
  siguiente() {
    return this.turnos[0];
  }

  estaVacia() {
    return this.turnos.length === 0;
  }
}
