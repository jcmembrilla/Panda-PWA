// src/components/PetCard.tsx
import { Mascota } from '../types/mascota';

// Definimos qué 'props' (propiedades) va a recibir este componente.
// Reutilizamos el tipo Pet que definimos en el archivo de tipos.
interface MascotaCardProps {
  mascota: Mascota;
}

// Declaramos el componente funcional usando sintaxis de flecha.
// Desestructuramos 'mascota' directamente de las props recibidas.
export const MascotaCard = ({ mascota }: MascotaCardProps) => {
  // Extraemos las propiedades individuales de la mascota para usarlas más fácil en el TSX
  const { nombre, tipo, edad, imagen, destacado } = mascota;

  return (
    /* 
      Contenedor principal de la tarjeta:
      - rounded-xl: bordes redondeados
      - overflow-hidden: evita que la imagen sobresalga de los bordes redondeados
      - shadow-md: sombra ligera para dar profundidad
      - Renderizado condicional en la clase: Si 'destacado' es true, añade borde amarillo brillante
    */
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-[1.02] border ${
        destacado ? 'border-amber-400 border-2' : 'border-gray-100'
      }`}
    >
      {/* Imagen de la mascota */}
      <img
        src={imagen}
        alt={`Foto de ${nombre}`}
        className="w-full h-48 object-cover" // w-full: ancho completo, h-48: altura fija, object-cover: mantiene proporción de la foto
      />

      {/* Contenido textual de la tarjeta */}
      <div className="p-4">
        {/* Cabecera de la tarjeta: Nombre + Badge del tipo */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-800">{nombre}</h3>
          
          {/* Etiqueta que cambia de estilo dinámicamente según el tipo de mascota */}
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              tipo === 'Perro'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-purple-100 text-purple-800'
            }`}
          >
            {tipo}
          </span>
        </div>

        {/* Edad de la mascota */}
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-semibold">Edad:</span> {edad}
        </p>

        {/* Botón de acción */}
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition-colors">
          Conocer más
        </button>
      </div>
    </div>
  );
};