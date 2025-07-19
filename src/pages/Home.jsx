export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 max-w-2xl mx-auto py-16">
      <h2 className="text-4xl font-bold text-pink-400 drop-shadow-md">
        Bienvenido a MusicLab BTK 🎧
      </h2>
      <p className="text-gray-300 text-lg">
        Esta es una herramienta para ayudarte a generar escalas musicales, y próximamente más funciones para productores y músicos.
      </p>
      <div className="flex gap-4">
        
        <button
          className="px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition text-white shadow-lg"
          disabled
        >
          Más funciones (Próximamente)
        </button>
      </div>
    </div>
  );
}