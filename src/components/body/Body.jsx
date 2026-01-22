import React from 'react';

const Body = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
            {/* Hero Badge */}
            <div className="mb-6 px-4 py-1.5 rounded-full bg-[#1e2329] border border-[#2b3139] text-[#f0b90b] text-sm font-medium animate-fade-in">
                🚀 New: AI-Powered Trade Signals are now live!
            </div>

            {/* Hero Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Trade Smarter with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0b90b] to-[#fcd535]">
                    Advanced Intelligence
                </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#848e9c] text-lg md:text-xl max-w-2xl mb-10">
                Access real-time market data, AI-driven analytics, and institutional-grade trading tools in one intuitive platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-[#f0b90b] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#fcd535] transition-all transform hover:scale-105">
                    Get Started Now
                </button>
                <button className="bg-[#1e2329] text-white border border-[#474d57] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#2b3139] transition-all">
                    View Live Markets
                </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 pt-10 border-t border-[#2b3139] w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">$2B+</span>
                    <span className="text-xs uppercase tracking-widest text-[#848e9c]">Volume</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">1M+</span>
                    <span className="text-xs uppercase tracking-widest text-[#848e9c]">Users</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">0.01s</span>
                    <span className="text-xs uppercase tracking-widest text-[#848e9c]">Latency</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">99.9%</span>
                    <span className="text-xs uppercase tracking-widest text-[#848e9c]">Uptime</span>
                </div>
            </div>
        </div>
    );
};

export default Body;
