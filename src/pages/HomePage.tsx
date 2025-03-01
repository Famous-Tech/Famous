import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import OrderForm from '../components/OrderForm';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Toaster } from 'react-hot-toast';
import { CheckCircle, Zap, Clock, Users, Globe, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const HomePage: React.FC = () => {
  const { darkMode } = useTheme();
  
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className={`min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
      <Toaster 
        position="top-right" 
        toastOptions={{
          duration: 5000,
          style: {
            background: darkMode ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            color: darkMode ? '#e2e8f0' : '#333',
            backdropFilter: 'blur(10px)',
            border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: 'white',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: 'white',
            },
          },
        }}
      />
      <Header />
      
      <div className="pt-20">
        <Hero />
      </div>
      
      <section id="services" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nos services de création web</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Des solutions web personnalisées pour répondre à tous vos besoins, de la simple landing page au site complet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-800 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform rotate-3">
                <Zap size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Landing Page</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Pages d'atterrissage optimisées pour la conversion, idéales pour les campagnes marketing et le lancement de produits.
              </p>
              <ul className="space-y-3">
                {['Design responsive', 'Optimisé pour la conversion', 'Temps de chargement rapide', 'Intégration analytics'].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-blue-500 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-2xl shadow-lg border border-indigo-100 dark:border-indigo-800 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mb-6 transform -rotate-3">
                <Globe size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Blog</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Blogs professionnels pour partager votre contenu, établir votre expertise et engager votre audience.
              </p>
              <ul className="space-y-3">
                {['Système de gestion de contenu', 'Catégories et tags', 'Commentaires et partage', 'SEO optimisé'].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-indigo-500 dark:text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-800 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-6 transform rotate-3">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Site Vitrine</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Sites vitrines élégants pour présenter votre entreprise, vos services et renforcer votre présence en ligne.
              </p>
              <ul className="space-y-3">
                {['Design sur mesure', 'Présentation de services', 'Formulaire de contact', 'Intégration réseaux sociaux'].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-purple-500 dark:text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-mesh">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
              Prêt à lancer votre projet web ?
            </h2>
            <OrderForm />
          </div>
        </div>
      </section>
      
      <section id="why-us" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden transition-colors duration-300">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-100 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-yellow-100 dark:bg-yellow-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Pourquoi choisir Famous-Tech ?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nous combinons expertise technique et connaissance du marché local pour créer des sites web qui se démarquent.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">Expertise locale</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Une équipe haïtienne qui comprend vos besoins spécifiques et le contexte local pour des solutions adaptées.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">Sites sur mesure</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Des solutions personnalisées adaptées à vos objectifs et à votre image de marque pour un résultat unique.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">Support réactif</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Une assistance continue et un suivi personnalisé tout au long de votre projet et après le lancement.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;