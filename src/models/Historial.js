// Molde del historial: es una PILA (LIFO = Last In, First Out).
// El último turno atendido es el primero que puede volver.
export default class Historial {
  constructor(turnos = []) {
    this.turnos = turnos; // el ÚLTIMO del arreglo es el "tope" de la pila
  }

  // Apilar: pone un turno encima de la pila
  apilar(turno) {
    return new Historial([...this.turnos, turno]);
  }

  // Desapilar: quita el turno que está encima
  desapilar() {
    return new Historial(this.turnos.slice(0, -1));
  }

  // Mira el tope sin quitarlo
  tope() {
    return this.turnos[this.turnos.length - 1];
  }

  estaVacio() {
    return this.turnos.length === 0;
  }
}
