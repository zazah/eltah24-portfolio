import heroBg from "../assets/hero-bg.png";
import ely from "../assets/ely.png";

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen w-full overflow-hidden">

      {/* Fond */}
      <img
        src={heroBg}
        alt="Datacenter"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Voile lumineux */}
      <div className="absolute inset-0 bg-white/65 backdrop-blur-[1px]"></div>

      {/* Contenu texte */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-full lg:w-1/2 flex items-center h-full py-20 lg:py-0">
          <div className="max-w-xl lg:mt-56 lg:translate-y-12">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Ely Tantely <br />
              <span className="text-slate-800">TAHINJANAHARY</span>
            </h1>

            <p className="mt-3 sm:mt-4 text-xl sm:text-2xl text-slate-700">
              Administrateur Système & Réseau
            </p>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
              Conception et sécurisation d'infrastructures informatiques fiables,
              performantes et évolutives.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a 
                href="#contact" 
                className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                    Contactez-moi
                </a>
                <a 
                    href="#" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition text-center"
                >
                    Télécharger le CV
                </a>
                
            </div>

          </div>
        </div>
      </div>

      {/* Ely - Responsive positioning */}
      <img
        src={ely}
        alt="Ely Tantely"
        className="absolute bottom-0 right-0 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] xl:h-[92vh] object-contain z-20 drop-shadow-2xl hidden sm:block lg:opacity-100 md:opacity-80"
      />

    </section>
  );
}