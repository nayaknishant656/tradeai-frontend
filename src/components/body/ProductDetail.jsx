import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/products/${id}`);
                const result = await response.json();
                if (result.success) {
                    setProduct(result.data);
                } else {
                    setError('Product not found');
                }
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#0b0e11]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="container mx-auto px-4 py-20 text-center text-gray-400 bg-[#0b0e11] min-h-screen">
                <h1 className="text-3xl font-bold text-white mb-4">Error</h1>
                <p className="mb-8">{error || 'Something went wrong'}</p>
                <button
                    onClick={() => navigate('/dashboard')}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                    Back to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl min-h-screen bg-[#0b0e11] text-gray-200">
            <button
                onClick={() => navigate(-1)}
                className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-all group"
            >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
            </button>

            <div className="bg-[#1c2128] border border-[#30363d] rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                        <div>
                            <span className="bg-blue-600/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                                {product.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">{product.name}</h1>
                        </div>
                        <div className="text-3xl font-bold text-green-400 bg-green-400/10 px-6 py-3 rounded-2xl border border-green-400/20">
                            ${product.price}
                        </div>
                    </div>

                    <div className="border-t border-[#30363d] pt-8">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Description</h2>
                        <p className="text-xl text-gray-300 leading-relaxed font-light whitespace-pre-line lowercase first-letter:uppercase">
                            {product.description}
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-8 text-sm border-t border-[#30363d] pt-8">
                        <div>
                            <span className="block text-gray-500 font-bold uppercase tracking-widest mb-1">Product ID</span>
                            <span className="text-gray-300 font-mono tracking-tighter">{product._id}</span>
                        </div>
                        <div>
                            <span className="block text-gray-500 font-bold uppercase tracking-widest mb-1">Created At</span>
                            <span className="text-gray-300">{new Date(product.createdAt).toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
