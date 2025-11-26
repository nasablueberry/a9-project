import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import { User, Image, ArrowLeft } from 'lucide-react';
export default function UpdateProfile() {
    const { user, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.displayName || '',
        photoURL: user?.photoURL || '',
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateUserProfile(formData.name, formData.photoURL);
            toast.success('Profile updated successfully!');
            navigate('/my-profile');
        }
        catch (error) {
            toast.error(error.message || 'Failed to update profile');
        }
        finally {
            setLoading(false);
        }
    };
    return (React.createElement("div", { className: "min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4" },
        React.createElement("div", { className: "container mx-auto max-w-2xl" },
            React.createElement("button", { onClick: () => navigate('/my-profile'), className: "flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6" },
                React.createElement(ArrowLeft, { size: 20 }),
                React.createElement("span", null, "Back to Profile")),
            React.createElement("div", { className: "bg-white rounded-2xl shadow-xl p-8", "data-aos": "fade-up" },
                React.createElement("div", { className: "text-center mb-8" },
                    React.createElement("div", { className: "text-5xl mb-4" }, "\u270F\uFE0F"),
                    React.createElement("h2", { className: "text-gray-900 mb-2" }, "Update Profile"),
                    React.createElement("p", { className: "text-gray-600" }, "Update your account information")),
                React.createElement("div", { className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-8" },
                    React.createElement("img", { src: user?.photoURL || 'https://via.placeholder.com/80', alt: user?.displayName || 'User', className: "w-20 h-20 rounded-full object-cover border-2 border-blue-500" }),
                    React.createElement("div", null,
                        React.createElement("p", { className: "text-gray-900" }, user?.displayName || 'Anonymous'),
                        React.createElement("p", { className: "text-gray-600 text-sm" }, user?.email))),
                React.createElement("form", { onSubmit: handleSubmit, className: "space-y-6" },
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "name", className: "block text-sm text-gray-700 mb-2" }, "Full Name *"),
                        React.createElement("div", { className: "relative" },
                            React.createElement(User, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", size: 20 }),
                            React.createElement("input", { id: "name", name: "name", type: "text", value: formData.name, onChange: handleChange, required: true, className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "Enter your name" }))),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "photoURL", className: "block text-sm text-gray-700 mb-2" }, "Photo URL *"),
                        React.createElement("div", { className: "relative" },
                            React.createElement(Image, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", size: 20 }),
                            React.createElement("input", { id: "photoURL", name: "photoURL", type: "url", value: formData.photoURL, onChange: handleChange, required: true, className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "Enter photo URL" }))),
                    formData.photoURL && (React.createElement("div", { className: "p-4 bg-blue-50 rounded-lg" },
                        React.createElement("p", { className: "text-sm text-gray-700 mb-3" }, "Preview:"),
                        React.createElement("div", { className: "flex items-center gap-4" },
                            React.createElement("img", { src: formData.photoURL, alt: "Preview", className: "w-16 h-16 rounded-full object-cover border-2 border-blue-500", onError: (e) => {
                                    e.target.src = 'https://via.placeholder.com/64';
                                } }),
                            React.createElement("div", null,
                                React.createElement("p", { className: "text-gray-900" }, formData.name || 'Your Name'),
                                React.createElement("p", { className: "text-gray-600 text-sm" }, user?.email))))),
                    React.createElement("div", { className: "flex gap-4" },
                        React.createElement("button", { type: "button", onClick: () => navigate('/my-profile'), className: "flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors" }, "Cancel"),
                        React.createElement("button", { type: "submit", disabled: loading, className: "flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" }, loading ? 'Updating...' : 'Update Profile')))))));
}
