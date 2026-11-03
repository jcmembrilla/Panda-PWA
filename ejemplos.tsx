// src/components/Header.tsx
export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logotipo / Marca */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🐾</span>
          <h1 className="text-xl font-bold text-gray-900">Patitas Firmes</h1>
        </div>

        {/* Menú de navegación ficticio */}
        <nav className="space-x-4 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-indigo-600 transition-colors">Inicio</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Adopciones</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

// src/components/Banner.tsx
export const Banner = () => {
  return (
    <div className="bg-indigo-600 text-white rounded-2xl p-8 mb-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="max-w-lg">
        <h2 className="text-3xl font-extrabold mb-2">¡Adopta un nuevo amigo!</h2>
        <p className="text-indigo-100 text-sm md:text-base">
          Dale una segunda oportunidad a un perro o gato sin hogar. Todos nuestros animales están vacunados y desparasitados.
        </p>
      </div>
      <button className="bg-amber-400 hover:bg-amber-500 text-indigo-950 font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap">
        Ver requisitos
      </button>
    </div>
  );
};

// src/App.tsx
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { PetGrid } from './components/PetGrid';

export default function App() {
  return (
    // min-h-screen asegura que el fondo abarque al menos toda la altura de la pantalla
    <div className="min-h-screen bg-gray-50">
      {/* 1. Encabezado en la parte superior */}
      <Header />

      {/* 2. Contenedor principal centrado con ancho máximo responsivo */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Banner promocional */}
        <Banner />
        
        {/* Catálogo de mascotas */}
        <PetGrid />
      </main>
    </div>
  );
}