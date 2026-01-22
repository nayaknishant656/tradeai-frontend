import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#0b0e11] border-t border-[#2b3139] pt-16 pb-8">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

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
                            Empowering traders with cutting-edge AI technology.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Products</h4>
                        <ul className="space-y-2 text-sm text-[#848e9c]">
                            <li>Exchange</li>
                            <li>Futures</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Community</h4>
                        <ul className="space-y-2 text-sm text-[#848e9c]">
                            <li>Twitter</li>
                            <li>Discord</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-[#2b3139] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-[#848e9c]">
                    <p>&copy; 2026 TradeAI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
