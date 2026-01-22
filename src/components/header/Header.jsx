import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navLinks = [
        { name: 'Markets', path: '/' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Services', path: '/services' },
    ];

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

                    {/* Right Section: Market Info & Auth */}
                    <div className="flex items-center space-x-6">
                        {/* Simple Market Indicator */}
                        <div className="hidden lg:flex items-center space-x-4 text-xs font-mono">
                            <div className="flex flex-col">
                                <span className="text-gray-500 uppercase">BTC/USDT</span>
                                <span className="text-[#00c076]">64,120.50 +2.4%</span>
                            </div>
                            <div className="flex flex-col border-l border-[#2b3139] pl-4">
                                <span className="text-gray-500 uppercase">ETH/USDT</span>
                                <span className="text-[#00c076]">3,450.12 +1.8%</span>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <NavLink
                                to="/login"
                                className="text-sm font-medium px-3 py-1.5 rounded hover:bg-[#2b3139] transition-all"
                            >
                                Log In
                            </NavLink>
                            <NavLink
                                to="/account"
                                className="text-sm font-medium bg-[#f0b90b] text-black px-4 py-1.5 rounded font-bold hover:bg-[#fcd535] transition-all"
                            >
                                Register
                            </NavLink>
                        </div>

                        {/* Mobile Menu */}
                        <button className="md:hidden p-1 rounded-md text-gray-400 hover:text-white hover:bg-[#2b3139]">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
