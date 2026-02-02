export default function Profil() {
  return (
    <section id="expertise" className="bg-gradient-to-br from-slate-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* En-tête section */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-blue-600 font-semibold text-sm sm:text-base tracking-wide uppercase">
            Expertise & Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 sm:mt-4">
            Votre infrastructure IT en <span className="text-blue-600">mains expertes</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 lg:mb-20">

          {/* Texte orienté client */}
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Des infrastructures qui propulsent votre entreprise
              </h3>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                Je conçois et gère des <strong>systèmes informatiques robustes</strong> qui 
                garantissent la continuité de vos activités. Mes interventions couvrent 
                l'ensemble de vos besoins : architecture réseau, sécurité, virtualisation, 
                et supervision proactive.
              </p>

              <p className="text-slate-700 leading-relaxed">
                Que vous soyez une PME en croissance ou une entreprise multi-sites, 
                je vous accompagne dans la <strong>transformation digitale sécurisée</strong> 
                de votre infrastructure, avec des solutions adaptées à vos enjeux métiers.
              </p>
            </div>

            {/* Liste des bénéfices clients */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Disponibilité maximale</h4>
                  <p className="text-sm text-slate-600">Infrastructures hautement disponibles et résilientes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Sécurité renforcée</h4>
                  <p className="text-sm text-slate-600">Protection avancée contre les cybermenaces</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Évolutivité garantie</h4>
                  <p className="text-sm text-slate-600">Systèmes qui grandissent avec votre entreprise</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cartes de services principales - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Architecture Réseau</h3>
              <p className="text-slate-600 text-sm sm:text-base">Conception et optimisation d'infrastructures multi-sites performantes</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Cybersécurité</h3>
              <p className="text-slate-600 text-sm sm:text-base">Sécurisation complète de vos données et systèmes critiques</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Virtualisation</h3>
              <p className="text-slate-600 text-sm sm:text-base">Environnements cloud et virtualisés optimisés (Proxmox, VMware)</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Supervision 24/7</h3>
              <p className="text-slate-600 text-sm sm:text-base">Monitoring proactif et maintenance préventive continue</p>
            </div>

          </div>

        </div>

        {/* Section Expertise détaillée */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center mb-10 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              Domaines d'<span className="text-blue-600">expertise technique</span>
            </h3>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              Une maîtrise complète des technologies essentielles pour votre infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-bold text-blue-600 mb-4">
                Administration Systèmes
              </h4>
              <p className="text-slate-600 text-sm sm:text-base">
                Gestion et sécurisation des serveurs Linux et Windows, Active Directory,
                sauvegardes, mises à jour et haute disponibilité.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-bold text-blue-600 mb-4">
                Réseaux & Sécurité
              </h4>
              <p className="text-slate-600 text-sm sm:text-base">
                Conception d'architectures réseau, firewall, VPN, VLAN, routage,
                supervision et protection des accès.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-bold text-blue-600 mb-4">
                Virtualisation
              </h4>
              <p className="text-slate-600 text-sm sm:text-base">
                Déploiement et gestion de Proxmox, VMware, serveurs virtualisés,
                clusters et solutions de backup.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-bold text-blue-600 mb-4">
                Cloud & Services
              </h4>
              <p className="text-slate-600 text-sm sm:text-base">
                Google Workspace, Office 365, gestion des utilisateurs,
                sécurité des données et collaboration.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-bold text-blue-600 mb-4">
                Supervision & Monitoring
              </h4>
              <p className="text-slate-600 text-sm sm:text-base">
                Mise en place de Prometheus, Grafana, alertes,
                contrôle des performances et disponibilité.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-bold text-blue-600 mb-4">
                Support & IT Management
              </h4>
              <p className="text-slate-600 text-sm sm:text-base">
                Support utilisateurs, helpdesk, documentation,
                gestion des incidents et amélioration continue.
              </p>
            </div>

          </div>
        </div>

        {/* Call-to-action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-10 shadow-2xl">
            <p className="text-white text-lg sm:text-xl font-semibold mb-4">
              Prêt à sécuriser et optimiser votre infrastructure IT ?
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Discutons de votre projet
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}