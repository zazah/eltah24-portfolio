import { useState } from "react";
import mlogo from "../assets/mlogo.png"; // ← Importez votre logo ici

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-20">

          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-600 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:border-blue-700">
              <img 
                src={mlogo} 
                alt="EL'TAH24 Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-blue-700 group-hover:text-blue-800 transition-colors">
              EL'TAH24
            </span>
          </a>

          {/* Menu desktop */}
          <nav className="hidden md:flex gap-10 text-slate-700 font-medium">
            <a href="#accueil" className="hover:text-blue-600 transition-colors">Accueil</a>
            <a href="#expertise" className="hover:text-blue-600 transition-colors">Expertise</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Bouton mobile */}
          <button
            className="md:hidden text-slate-700 text-2xl focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>

        </div>

        {/* Menu mobile */}
        {open && (
          <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-4">
            <a 
              href="#accueil" 
              className="block text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              Accueil
            </a>
            <a 
              href="#expertise" 
              className="block text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              Expertise
            </a>
            <a 
              href="#contact" 
              className="block text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        )}

      </div>
    </header>
  );
}