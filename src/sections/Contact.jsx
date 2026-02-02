import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Remplacez ces valeurs par vos vraies clés EmailJS
      const result = await emailjs.send(
        'service_xzaeuoe',      // Remplacez par votre Service ID
        'template_a0s1r0d',     // Remplacez par votre Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'contact@eltah24.com'
        },
        '5OvySfhNliqonUn4n'       // Remplacez par votre Public Key
      );

      setStatus({
        type: 'success',
        message: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
      });
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.'
      });
      console.error('Erreur EmailJS:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* En-tête */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-blue-400 font-semibold text-sm sm:text-base tracking-wide uppercase">
            Parlons de votre projet
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4">
            Prenons <span className="text-blue-400">contact</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Que ce soit pour un audit, une refonte d'infrastructure ou un accompagnement technique, 
            je suis à votre écoute pour transformer vos défis IT en solutions concrètes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Informations de contact */}
          <div className="space-y-8">
            
            {/* Bloc principal */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Discutons de vos besoins
              </h3>

              <p className="text-slate-300 mb-8 leading-relaxed">
                Vous avez un projet d'infrastructure, un besoin de sécurisation ou 
                une problématique technique ? Je vous accompagne avec des solutions 
                adaptées et un suivi personnalisé.
              </p>

              {/* Coordonnées avec icônes */}
              <div className="space-y-5">
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-blue-600/20 rounded-lg p-3 group-hover:bg-blue-600/30 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Email</p>
                    <a href="mailto:contact@eltah24.com" className="text-white font-medium hover:text-blue-400 transition-colors">
                      contact@eltah24.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-blue-600/20 rounded-lg p-3 group-hover:bg-blue-600/30 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Téléphone</p>
                    <a href="tel:+261346761473" className="text-white font-medium hover:text-blue-400 transition-colors">
                      +261 34 67 614 73
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-blue-600/20 rounded-lg p-3 group-hover:bg-blue-600/30 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Localisation</p>
                    <p className="text-white font-medium">Antananarivo, Madagascar</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Disponibilité */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-lg p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Disponibilité</h4>
                  <p className="text-blue-100 text-sm">
                    Réponse sous 24h • Consultations en ligne ou sur site • 
                    Interventions d'urgence disponibles
                  </p>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/ely-tantely-tahinjanahary-aa7a4b3a9/" className="bg-slate-800/50 hover:bg-slate-700 p-4 rounded-lg transition-colors border border-slate-700 flex-1 flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-sm font-medium text-white">LinkedIn</span>
              </a>
              <a href="https://github.com/zazah" className="bg-slate-800/50 hover:bg-slate-700 p-4 rounded-lg transition-colors border border-slate-700 flex-1 flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm font-medium text-white">GitHub</span>
              </a>
            </div>

          </div>

          {/* Formulaire de contact */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 text-slate-900 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              Envoyez-moi un message
            </h3>

            {/* Message de statut */}
            {status.message && (
              <div className={`mb-6 p-4 rounded-lg ${
                status.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                <p className="text-sm font-medium">{status.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email professionnel *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jean.dupont@entreprise.com"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+261 XX XX XXX XX"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="audit">Audit d'infrastructure</option>
                  <option value="securite">Sécurisation réseau</option>
                  <option value="virtualisation">Virtualisation</option>
                  <option value="support">Support & Maintenance</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet ou vos besoins..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

              <p className="text-xs text-slate-500 text-center">
                * Champs obligatoires • Vos données sont protégées et ne seront jamais partagées
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}