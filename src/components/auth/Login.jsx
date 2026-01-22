import React, { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in with:', email, password);
        alert('Logged in successfully!');
    };

    return (
        <div className="flex items-center justify-center min-h-[70vh] px-4">
            <div className="w-full max-w-md bg-[#1e2329] border border-[#2b3139] p-8 rounded-xl shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Login to TradeAI</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#0b0e11] border border-[#2b3139] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#f0b90b] transition-colors"
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#0b0e11] border border-[#2b3139] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#f0b90b] transition-colors"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#f0b90b] text-black font-bold py-3 rounded-lg hover:bg-[#fcd535] transition-all transform hover:scale-[1.02]"
                    >
                        Log In
                    </button>
                </form>
                <div className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account? <span className="text-[#f0b90b] cursor-pointer hover:underline">Register</span>
                </div>
            </div>
        </div>
    );
}
