import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // States for query, filter, page, limit
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(8);
    const [total, setTotal] = useState(0);

    const fetchData = async () => {
        setLoading(true);
        try {
            const url = `http://localhost:8000/?query=${searchQuery}&filter=${filter}&page=${page}&limit=${limit}`;
            const response = await fetch(url);
            const result = await response.json();

            if (result.data) {
                setData(result.data);
                setTotal(result.total);
            } else {
                setData([]);
            }
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [searchQuery, filter, page, limit]);

    return (
        <div className="container mx-auto px-4 py-8 text-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>

                <div className="flex flex-wrap gap-3">
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="bg-[#1c2128] border border-[#30363d] rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-all w-full md:w-64"
                        value={searchQuery}
                        onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
                    />

                    {/* Filter Dropdown */}
                    <select
                        className="bg-[#1c2128] border border-[#30363d] rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer min-w-[140px]"
                        value={filter}
                        onChange={(e) => { setFilter(e.target.value); setPage(1); }}
                    >
                        <option value="">All Categories</option>
                        <option value="electronics">Electronics</option>
                        <option value="laptop">Laptop</option>
                        <option value="mobile">Mobile</option>
                        <option value="accessories">Accessories</option>
                    </select>

                    {/* Limit Selector */}
                    <select
                        className="bg-[#1c2128] border border-[#30363d] rounded-lg px-4 py-2 focus:outline-none appearance-none cursor-pointer"
                        value={limit}
                        onChange={(e) => { setLimit(e.target.value); setPage(1); }}
                    >
                        <option value="4">4 per page</option>
                        <option value="8">8 per page</option>
                        <option value="12">12 per page</option>
                    </select>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : error ? (
                <div className="bg-red-900/20 border border-red-500 text-red-200 p-4 rounded-lg">
                    Error: {error}
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {data.length > 0 ? (
                            data.map((item) => (
                                <div
                                    key={item._id}
                                    onClick={() => navigate(`/product/${item._id}`)}
                                    className="bg-[#1c2128] border border-[#30363d] rounded-xl p-5 hover:border-blue-500 transition-all hover:transform hover:-translate-y-1 shadow-lg cursor-pointer group"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="bg-blue-600/20 text-blue-400 text-xs font-semibold px-2 py-1 rounded uppercase tracking-wider">
                                            {item.category}
                                        </span>
                                        <span className="text-green-400 font-bold tracking-tight text-lg">${item.price}</span>
                                    </div>
                                    <h3 className="text-white font-semibold text-xl mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors">{item.name}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed italic">{item.description}</p>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-auto border-t border-gray-800 pt-3 flex justify-between items-center">
                                        <span>Added: {new Date(item.createdAt).toLocaleDateString()}</span>
                                        <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">View Details →</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center text-gray-500">
                                <svg className="mx-auto h-12 w-12 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01" />
                                </svg>
                                <p className="text-xl">No data found matching your search</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between mt-12 border-t border-[#30363d] pt-6">
                        <p className="text-sm text-gray-400">
                            Showing <span className="text-white">{(page - 1) * limit + 1}</span> to <span className="text-white">{Math.min(page * limit, total)}</span> of <span className="text-white">{total}</span> results
                        </p>
                        <div className="flex gap-2">
                            <button
                                onClick={(e) => { e.stopPropagation(); setPage(prev => Math.max(1, prev - 1)); }}
                                disabled={page === 1}
                                className="px-4 py-2 rounded-lg bg-[#1c2128] border border-[#30363d] text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                Previous
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); setPage(prev => (prev * limit < total ? prev + 1 : prev)); }}
                                disabled={page * limit >= total}
                                className="px-4 py-2 rounded-lg bg-[#1c2128] border border-[#30363d] text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Dashboard;
