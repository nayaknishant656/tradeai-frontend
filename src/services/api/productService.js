const BASE_URL = 'http://localhost:8000/api/products';

export const apiService = {
    // GET all
    getAll: async (params = '') => {
        const response = await fetch(`${BASE_URL}${params}`);
        return await response.json();
    },

    // GET by ID
    getById: async (id) => {
        const response = await fetch(`${BASE_URL}/${id}`);
        return await response.json();
    },

    // CREATE
    create: async (data) => {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return await response.json();
    },

    // UPDATE
    update: async (id, data) => {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return await response.json();
    },

    // DELETE
    delete: async (id) => {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    }
};
