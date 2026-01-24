const BASE_URL = 'http://localhost:8000/api/products';

const getHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
    };
};

export const apiService = {
    // GET all
    getAll: async (params = '') => {
        const response = await fetch(`${BASE_URL}${params}`, {
            headers: getHeaders()
        });
        return await response.json();
    },

    // GET by ID
    getById: async (id) => {
        const response = await fetch(`${BASE_URL}/${id}`, {
            headers: getHeaders()
        });
        return await response.json();
    },

    // CREATE
    create: async (data) => {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(data)
        });
        return await response.json();
    },

    // UPDATE
    update: async (id, data) => {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: getHeaders(),
            body: JSON.stringify(data)
        });
        return await response.json();
    },

    // DELETE
    delete: async (id) => {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
            headers: getHeaders()
        });
        return await response.json();
    }
};
