import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0b0e11] border-t border-[#2b3139] pt-16 pb-8">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-[#f0b90b] rounded-md flex items-center justify-center">
                                <span className="text-black font-black text-xl">T</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                Trade<span className="text-[#f0b90b]">AI</span>
                            </span>
                        </Link>
                        <p className="text-[#848e9c] text-sm max-w-sm">
                            Empowering traders with cutting-edge AI technology and institutional-grade infrastructure. Built for the future of finance.
                        </p>
                    </div>

                    {/* Links sections */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Products</h4>
                        <ul className="space-y-2 text-sm text-[#848e9c]">
                            <li className="hover:text-[#f0b90b] cursor-pointer">Exchange</li>
                            <li className="hover:text-[#f0b90b] cursor-pointer">Futures</li>
                            <li className="hover:text-[#f0b90b] cursor-pointer">AI Signals</li>
                            <li className="hover:text-[#f0b90b] cursor-pointer">Institutional</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-[#848e9c]">
                            <li className="hover:text-[#f0b90b] cursor-pointer">Help Center</li>
                            <li className="hover:text-[#f0b90b] cursor-pointer">API Docs</li>
                            <li className="hover:text-[#f0b90b] cursor-pointer">Trading Rules</li>
                            <li className="hover:text-[#f0b90b] cursor-pointer">Fees</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Community</h4>
                        <ul className="space-y-2 text-sm text-[#848e9c]">
                            <li className="hover:text-[#f0b90b] cursor-pointer">Twitter</li>
                            <li className="hover:text-[#f0b90b] cursor-pointer">Telegram</li>
                            <li className="hover:text-[#f0b90b] cursor-pointer">Discord</li>
                            <li className="hover:text-[#f0b90b] cursor-pointer">Blog</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-[#2b3139] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-[#848e9c]">
                    <p>&copy; 2026 TradeAI. All rights reserved. Registered with Financial Authorities.</p>
                    <div className="flex space-x-6">
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
