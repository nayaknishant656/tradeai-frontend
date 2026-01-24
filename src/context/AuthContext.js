import React, { createContext, useState, useEffect, useContext } from 'react';
import { authService } from '../services/auth/authmain';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await authService.getMe(token);
                    // assuming response.data contains the user object
                    setUser({ ...response.data, token });
                } catch (err) {
                    console.error('Token verification failed:', err);
                    localStorage.removeItem('token');
                    setUser(null);
                }
            }
            setLoading(false);
        };

        verifyToken();
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        setUser({ token });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading: loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
