import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Loader2, Send, User, Mail, Phone, FileText } from 'lucide-react';

interface FormData {
  nom: string;
  email: string;
  telephone: string;
  type_de_site: 'Landing Page' | 'Blog' | 'Vitrine';
  message: string;
}

const OrderForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Create a clean copy of the data to avoid DataCloneError
      const cleanData = JSON.parse(JSON.stringify(data));
      
      const response = await axios.post('https://famous-api.onrender.com/api/commandes', cleanData);
      
      // Log successful API response
      console.log('API Response Status:', response.status);
      console.log('API Response Data:', JSON.stringify(response.data));
      
      toast.success('Votre commande a été reçue avec succès ! Un email de confirmation vous a été envoyé.');
      reset();
    } catch (error) {
      // Log error response safely
      if (axios.isAxiosError(error)) {
        console.error('API Error Status:', error.response?.status);
        console.error('API Error Data:', JSON.stringify(error.response?.data || {}));
      } else {
        console.error('Error submitting form:', error instanceof Error ? error.message : String(error));
      }
      
      toast.error('Une erreur est survenue lors de l\'envoi de votre commande. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="order-form" className="glass-effect p-8 rounded-2xl shadow-xl max-w-md w-full mx-auto transform transition-all duration-500 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send size={24} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Commandez votre site web</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Remplissez le formulaire ci-dessous pour démarrer votre projet</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="relative">
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nom complet *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User size={18} className="text-gray-400" />
            </div>
            <input
              id="nom"
              type="text"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 
                ${errors.nom ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-600'} 
                dark:bg-gray-700 dark:text-white
                hover:border-blue-400 dark:hover:border-blue-400 transform hover:translate-y-[-2px] hover:shadow-md`}
              placeholder="Votre nom"
              {...register('nom', { required: 'Le nom est requis' })}
            />
          </div>
          {errors.nom && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.nom.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail size={18} className="text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 
                ${errors.email ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-600'} 
                dark:bg-gray-700 dark:text-white
                hover:border-blue-400 dark:hover:border-blue-400 transform hover:translate-y-[-2px] hover:shadow-md`}
              placeholder="votre.email@exemple.com"
              {...register('email', { 
                required: 'L\'email est requis',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Adresse email invalide'
                }
              })}
            />
          </div>
          {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Téléphone *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone size={18} className="text-gray-400" />
            </div>
            <input
              id="telephone"
              type="tel"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 
                ${errors.telephone ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-600'} 
                dark:bg-gray-700 dark:text-white
                hover:border-blue-400 dark:hover:border-blue-400 transform hover:translate-y-[-2px] hover:shadow-md`}
              placeholder="Votre numéro de téléphone"
              {...register('telephone', { required: 'Le numéro de téléphone est requis' })}
            />
          </div>
          {errors.telephone && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.telephone.message}</p>}
        </div>

        <div>
          <label htmlFor="type_de_site" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Type de site *
          </label>
          <select
            id="type_de_site"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 
              ${errors.type_de_site ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-600'} 
              dark:bg-gray-700 dark:text-white
              hover:border-blue-400 dark:hover:border-blue-400 transform hover:translate-y-[-2px] hover:shadow-md`}
            {...register('type_de_site', { required: 'Veuillez sélectionner un type de site' })}
          >
            <option value="">Sélectionnez un type</option>
            <option value="Landing Page">Landing Page</option>
            <option value="Blog">Blog</option>
            <option value="Vitrine">Vitrine</option>
          </select>
          {errors.type_de_site && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.type_de_site.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message (optionnel)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
              <FileText size={18} className="text-gray-400" />
            </div>
            <textarea
              id="message"
              rows={4}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 dark:bg-gray-700 dark:text-white hover:border-blue-400 dark:hover:border-blue-400 transform hover:translate-y-[-2px] hover:shadow-md"
              placeholder="Décrivez votre projet ou ajoutez des précisions..."
              {...register('message')}
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 flex items-center justify-center transform hover:scale-[1.02] shadow-lg dark:ring-offset-gray-800"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="mr-2" size={20} />
              Envoyer ma commande
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;