export const Footer = () => {
  return (
    <footer className="bg-white shadow-sm border-b border-gray-200 ">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logotipo / Marca */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🐾</span>
          <h1 className="text-xl font-bold text-gray-900">Panda</h1>
        </div>

        {/* Menú de navegación */}
        <nav className="space-x-4 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-indigo-600 transition-colors">Inicio</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Contacto</a>
        </nav>
      </div>
    </footer>
  );
};