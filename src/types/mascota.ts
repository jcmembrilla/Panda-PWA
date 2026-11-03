// src/types/pet.ts

// Definimos la estructura exacta que debe tener un objeto de tipo Mascotas
export interface Mascota {
  id: number;
  nombre: string;
  // Usamos un 'Union Type' para restringir los valores posibles del tipo de mascota
  tipo: 'Perro' | 'Gato' | 'Otro';
  edad: string;
  imagen: string;
  // El signo de interrogación '?' indica que la propiedad es opcional (puede no venir)
  destacado?: boolean;
}
