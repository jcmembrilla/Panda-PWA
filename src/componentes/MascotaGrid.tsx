// src/components/PetGrid.tsx
import { MascotaCard } from './MascotaCard';
import { Mascota } from '../types/mascota';

// Datos de prueba (Mock Data): Simulan la respuesta que normalmente vendría de una base de datos o API.
// Le asignamos explícitamente el tipo 'Pet[]' (un arreglo de objetos Pet).
const MASCOTAS_MOCK: Mascota[] = [
  {
    id: 1,
    nombre: 'Firulais',
    tipo: 'Perro',
    edad: '2 años',
    imagen: '/mascota1.jpg', // Ruta a la carpeta public/ (ideal para trabajar offline)
    destacado: true,
  },
  {
    id: 2,
    nombre: 'Michi',
    tipo: 'Gato',
    edad: '6 meses',
    imagen: '/mascota2.jpg',
  },
  {
    id: 3,
    nombre: 'Rocky',
    tipo: 'Perro',
    edad: '4 años',
    imagen: '/mascota3.jpg',
  },
];

export const MascotaGrid = () => {
  return (
    <section className="my-8">
      {/* Título de la sección */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Mascotas en búsqueda de hogar
      </h2>

      {/* 
        Grilla responsive con Tailwind CSS:
        - grid: activa CSS Grid
        - grid-cols-1: 1 columna en pantallas pequeñas (móviles)
        - md:grid-cols-2: 2 columnas en pantallas medianas (tablets)
        - lg:grid-cols-3: 3 columnas en pantallas grandes (laptops/PC)
        - gap-6: espacio entre los elementos de la grilla
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 
          Usamos el método .map() de JavaScript para transformar cada objeto del arreglo 
          en un componente <PetCard />
        */}
        {MASCOTAS_MOCK.map((pet) => (
          /* 
            REGLA DE REACT: Siempre que renderizamos listas con .map(), debemos proveer 
            una prop 'key' única (usualmente el ID) para que React sepa qué elemento actualizar.
          */
          <MascotaCard key={pet.id} mascota={pet} />
        ))}
      </div>
    </section>
  );
};