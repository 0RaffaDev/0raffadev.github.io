import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Scales from "./pages/Scale";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-950 text-white font-sans flex flex-col">
        
        {/* NAVBAR */}
        <nav className="bg-slate-800/70 backdrop-blur-md sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-pink-400">
              🎶 MusicLab BTK Records
            </h1>
            <div className="space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white underline"
                    : "text-gray-300 hover:text-white transition"
                }
              >
                Inicio
              </NavLink>
              <NavLink
                to="/scales"
                className={({ isActive }) =>
                  isActive
                    ? "text-white underline"
                    : "text-gray-300 hover:text-white transition"
                }
              >
                Escalas
              </NavLink>
       
            </div>
          </div>
        </nav>

        {/* CONTENIDO CENTRAL */}
        <main className="flex-1">
          <div className="container mx-auto px-4 py-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/scales" element={<Scales />} />
            </Routes>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="text-center text-sm text-gray-500 py-4 border-t border-slate-700">
          Creado con ❤️ por <span className="text-white">prod_RAFA</span> · 2025
        </footer>
      </div>
    </Router>
  );
}
