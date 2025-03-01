import React from 'react';
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Code size={28} className="text-blue-400 mr-2" />
              <span className="text-2xl font-bold">Famous-Tech</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Basée en Haïti, Famous-Tech est spécialisée dans la création de sites web sur mesure pour répondre à vos besoins spécifiques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="#order-form" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Commander
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Pourquoi nous
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Phone size={18} className="mr-3 text-blue-400" />
                <a href="https://wa.me/50944156629" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                  +509 44 15 66 29
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail size={18} className="mr-3 text-blue-400" />
                <a href="mailto:contact@famous-tech.com" className="hover:text-white transition-colors duration-300">
                  contact@famous-tech.com
                </a>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin size={18} className="mr-3 mt-1 text-blue-400" />
                <span>Port-au-Prince, Haïti</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Famous-Tech. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Politique de confidentialité</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
        aria-label="Retour en haut"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;