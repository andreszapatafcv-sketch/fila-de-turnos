# Fila de turnos (React + Vite)

Gestiona una fila de turnos con regla FIFO y un historial con pila LIFO.

## Cómo correrlo
1. Instala Node.js (https://nodejs.org), versión 18 o mayor.
2. Abre una terminal dentro de esta carpeta.
3. `npm install`   (descarga las librerías, solo la primera vez)
4. `npm run dev`   (arranca el proyecto)
5. Abre la dirección que aparece, normalmente http://localhost:5173

## Estructura
- `src/models/`      clases de POO: Turno, Fila (FIFO), Historial (LIFO)
- `src/components/`  componentes de React: Formulario, TarjetaSiguiente, ListaEspera, ListaHistorial
- `src/App.jsx`      componente principal con el estado (useState)
- `src/App.css`      estilos
