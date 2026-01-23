import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiService } from '../../services/api/productService';

const ProductForm = ({ mode = 'create' }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        description: ''
    });

    useEffect(() => {
        if (mode === 'edit' && id) {
            const fetchProduct = async () => {
                const res = await apiService.getById(id);
                if (res.success) {
                    setFormData({
                        name: res.data.name,
                        category: res.data.category,
                        price: res.data.price,
                        description: res.data.description
                    });
                }
            };
            fetchProduct();
        }
    }, [id, mode]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = mode === 'create'
                ? await apiService.create(formData)
                : await apiService.update(id, formData);

            if (res.success) {
                alert(mode === 'create' ? 'Created Successfully!' : 'Updated Successfully!');
                navigate('/admin');
            }
        } catch (err) {
            alert('Error: ' + err.message);
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-2xl min-h-screen bg-[#0b0e11] text-gray-200">
            <button
                onClick={() => navigate('/admin')}
                className="mb-8 flex items-center gap-2 text-gray-500 hover:text-white transition-all"
            >
                ← Back to Management
            </button>

            <div className="bg-[#1c2128] border border-[#30363d] rounded-2xl p-8 shadow-2xl">
                <h1 className="text-3xl font-bold text-white mb-8">
                    {mode === 'create' ? 'Create New Product' : 'Edit Product'}
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-400 mb-2">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                            placeholder="e.g. MacBook Pro M3"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-400 mb-2">Category</label>
                            <select
                                name="category"
                                required
                                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <option value="">Select Category</option>
                                <option value="electronics">Electronics</option>
                                <option value="laptop">Laptop</option>
                                <option value="mobile">Mobile</option>
                                <option value="accessories">Accessories</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-400 mb-2">Price ($)</label>
                            <input
                                type="number"
                                name="price"
                                required
                                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                                placeholder="0.00"
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-400 mb-2">Description</label>
                        <textarea
                            name="description"
                            required
                            rows="4"
                            className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
                            placeholder="Describe your product..."
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 mt-4"
                    >
                        {loading ? 'Processing...' : mode === 'create' ? 'Publish Product' : 'Save Changes'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
