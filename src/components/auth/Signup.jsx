import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/auth/authmain';
import { useAuth } from '../../context/AuthContext';

export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const data = await authService.signup(formData);
            login(data.token);
            navigate('/');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[70vh] px-4">
            <div className="w-full max-w-md bg-[#1e2329] border border-[#2b3139] p-8 rounded-xl shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Join TradeAI</h2>
                {error && (
                    <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg mb-6 text-sm">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Username</label>
                        <input
                            name="username"
                            type="text"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full bg-[#0b0e11] border border-[#2b3139] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#f0b90b] transition-colors"
                            placeholder="Choose a username"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-[#0b0e11] border border-[#2b3139] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#f0b90b] transition-colors"
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
                        <input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full bg-[#0b0e11] border border-[#2b3139] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#f0b90b] transition-colors"
                            placeholder="Min 6 characters"
                            required
                            minLength="6"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#f0b90b] text-black font-bold py-3 rounded-lg hover:bg-[#fcd535] transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>
                <div className="mt-6 text-center text-sm text-gray-500">
                    Already have an account? <span onClick={() => navigate('/login')} className="text-[#f0b90b] cursor-pointer hover:underline">Log In</span>
                </div>
            </div>
        </div>
    );
}
