const BASE_URL = 'http://localhost:8000/api/auth';

export const authService = {
    signup: async (userData) => {
        try {
            const response = await fetch(`${BASE_URL}/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Signup failed');
            return data;
        } catch (error) {
            throw error;
        }
    },

    signin: async (credentials) => {
        try {
            const response = await fetch(`${BASE_URL}/signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Signin failed');
            return data;
        } catch (error) {
            throw error;
        }
    }
};
