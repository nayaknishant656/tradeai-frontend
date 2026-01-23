import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../../services/api/productService';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchAll = async () => {
        setLoading(true);
        const res = await apiService.getAll();
        if (res.success) setProducts(res.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchAll();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            const res = await apiService.delete(id);
            if (res.success) {
                alert('Deleted successfully');
                fetchAll();
            }
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 text-gray-200 min-h-screen bg-[#0b0e11]">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white">Data Management</h1>
                <button
                    onClick={() => navigate('/admin/create')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-all shadow-lg shadow-blue-500/20"
                >
                    + Create New Product
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="overflow-x-auto bg-[#1c2128] border border-[#30363d] rounded-xl">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-[#30363d] bg-[#161b22]">
                                <th className="p-4 font-semibold text-gray-400">Name</th>
                                <th className="p-4 font-semibold text-gray-400">Category</th>
                                <th className="p-4 font-semibold text-gray-400">Price</th>
                                <th className="p-4 font-semibold text-gray-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item) => (
                                <tr key={item._id} className="border-b border-[#30363d] hover:bg-gray-800/30 transition-colors">
                                    <td className="p-4 font-medium text-white">{item.name}</td>
                                    <td className="p-4">
                                        <span className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded">
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="p-4 text-green-400 font-bold">${item.price}</td>
                                    <td className="p-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button
                                                onClick={() => navigate(`/admin/edit/${item._id}`)}
                                                className="p-2 hover:bg-blue-500/10 text-blue-400 rounded-lg transition-colors"
                                                title="Edit"
                                            >
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5M16.483 3.5a2.121 2.121 0 013 3L13 13l-4 1 1-4 7.483-7.5z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="p-2 hover:bg-red-500/10 text-red-400 rounded-lg transition-colors"
                                                title="Delete"
                                            >
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
