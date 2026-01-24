import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const navLinks = [
        { name: 'Markets', path: '/' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Services', path: '/services' },
        { name: 'Admin', path: '/admin' },
        { name: 'Add Product', path: '/admin/create' },
    ];

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className="bg-[#0b0e11] text-[#eaecef] border-b border-[#2b3139] sticky top-0 z-50">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
                <div className="flex justify-between h-14 items-center">
                    {/* Left Section: Logo & Main Nav */}
                    <div className="flex items-center space-x-8">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-[#f0b90b] rounded-md flex items-center justify-center">
                                <span className="text-black font-black text-xl">T</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                Trade<span className="text-[#f0b90b]">AI</span>
                            </span>
                        </Link>

                        <nav className="hidden md:flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-sm font-medium transition-colors duration-200 hover:text-[#f0b90b] ${isActive ? 'text-[#f0b90b]' : 'text-[#eaecef]'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>
                    </div>

                    {/* Right Section: Auth */}
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-3">
                            {!user ? (
                                <>
                                    <Link
                                        to="/login"
                                        className="text-sm font-medium px-3 py-1.5 rounded hover:bg-[#2b3139] transition-all"
                                    >
                                        Log In
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="text-sm font-medium bg-[#f0b90b] text-black px-4 py-1.5 rounded font-bold hover:bg-[#fcd535] transition-all"
                                    >
                                        Register
                                    </Link>
                                </>
                            ) : (
                                <button
                                    onClick={handleLogout}
                                    className="text-sm font-medium border border-gray-600 px-4 py-1.5 rounded hover:bg-[#2b3139] transition-all"
                                >
                                    Log Out
                                </button>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}
