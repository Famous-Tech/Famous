/**
 * API Documentation for Famous-Tech
 * 
 * Base URL: https://famous-api.onrender.com
 * 
 * Public Endpoints:
 * ----------------
 * POST /api/commandes
 * Description: Create a new order
 * Payload example:
 * {
 *   "nom": "Jean Dupont",
 *   "email": "jean.dupont@example.com",
 *   "telephone": "0601020304",
 *   "type_de_site": "Blog",
 *   "message": "Je souhaite un blog professionnel pour mon entreprise."
 * }
 * 
 * Admin Endpoints (Protected, require authentication):
 * --------------------------------------------------
 * GET /api/commandes
 * Description: Get all orders
 * 
 * GET /api/commandes/:id
 * Description: Get a specific order by ID
 * 
 * PATCH /api/commandes/:id/status
 * Description: Update the status of an order
 * 
 * DELETE /api/commandes/:id
 * Description: Delete an order
 */

import axios from 'axios';

const API_BASE_URL = 'https://famous-api.onrender.com';

export interface CommandePayload {
  nom: string;
  email: string;
  telephone: string;
  type_de_site: 'Landing Page' | 'Blog' | 'Vitrine';
  message?: string;
}

export interface Commande extends CommandePayload {
  id: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

// Public API function
export const createCommande = async (data: CommandePayload) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/commandes`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

// Admin API functions (for future reference)
// These functions would require authentication token

/*
export const getAllCommandes = async (token: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/commandes`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

export const getCommandeById = async (id: string, token: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/commandes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching order ${id}:`, error);
    throw error;
  }
};

export const updateCommandeStatus = async (id: string, status: string, token: string) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/api/commandes/${id}/status`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating order ${id}:`, error);
    throw error;
  }
};

export const deleteCommande = async (id: string, token: string) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/api/commandes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error deleting order ${id}:`, error);
    throw error;
  }
};
*/