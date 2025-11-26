import React from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import toast from 'react-hot-toast';
import { Star, MapPin, Mail, Clock, DollarSign, ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
export default function ServiceDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        name: user?.displayName || '',
        email: user?.email || '',
    });
    const service = services.find((s) => s.serviceId === Number(id));
    if (!service) {
        return (React.createElement("div", { className: "container mx-auto px-4 py-16 text-center" },
            React.createElement("h2", { className: "mb-4" }, "Service Not Found"),
            React.createElement("button", { onClick: () => navigate('/'), className: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" }, "Back to Home")));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success(`Service "${service.serviceName}" booked successfully!`);
        setFormData({ name: '', email: '' });
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    return (React.createElement("div", { className: "bg-gray-50 min-h-screen py-12" },
        React.createElement("div", { className: "container mx-auto px-4" },
            React.createElement("button", { onClick: () => navigate('/'), className: "flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6" },
                React.createElement(ArrowLeft, { size: 20 }),
                React.createElement("span", null, "Back to Services")),
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8" },
                React.createElement("div", null,
                    React.createElement("div", { className: "bg-white rounded-2xl shadow-lg overflow-hidden", "data-aos": "fade-right" },
                        React.createElement("img", { src: service.image, alt: service.serviceName, className: "w-full h-96 object-cover" }),
                        React.createElement("div", { className: "p-8" },
                            React.createElement("div", { className: "flex items-center justify-between mb-4" },
                                React.createElement("span", { className: "px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm" }, service.category),
                                React.createElement("div", { className: "flex items-center gap-1" },
                                    React.createElement(Star, { size: 20, className: "text-yellow-500 fill-yellow-500" }),
                                    React.createElement("span", { className: "text-xl" }, service.rating))),
                            React.createElement("h1", { className: "text-gray-900 mb-4" }, service.serviceName),
                            React.createElement("div", { className: "space-y-3 mb-6" },
                                React.createElement("div", { className: "flex items-center gap-3 text-gray-600" },
                                    React.createElement(MapPin, { size: 20, className: "text-blue-600" }),
                                    React.createElement("span", null, service.providerName)),
                                React.createElement("div", { className: "flex items-center gap-3 text-gray-600" },
                                    React.createElement(Mail, { size: 20, className: "text-blue-600" }),
                                    React.createElement("span", null, service.providerEmail)),
                                React.createElement("div", { className: "flex items-center gap-3 text-gray-600" },
                                    React.createElement(Clock, { size: 20, className: "text-blue-600" }),
                                    React.createElement("span", null,
                                        service.slotsAvailable,
                                        " slots available")),
                                React.createElement("div", { className: "flex items-center gap-3" },
                                    React.createElement(DollarSign, { size: 20, className: "text-blue-600" }),
                                    React.createElement("span", { className: "text-3xl text-blue-600" },
                                        "$",
                                        service.price))),
                            React.createElement("div", { className: "border-t pt-6" },
                                React.createElement("h3", { className: "text-gray-900 mb-3" }, "Service Description"),
                                React.createElement("p", { className: "text-gray-600 leading-relaxed" }, service.description)),
                            React.createElement("div", { className: "mt-6 bg-blue-50 p-4 rounded-lg" },
                                React.createElement("h4", { className: "text-blue-900 mb-2" }, "What's Included:"),
                                React.createElement("ul", { className: "space-y-2 text-blue-700 text-sm" },
                                    React.createElement("li", null, "\u2713 Professional service by certified experts"),
                                    React.createElement("li", null, "\u2713 Premium quality products and materials"),
                                    React.createElement("li", null, "\u2713 Follow-up care instructions"),
                                    React.createElement("li", null, "\u2713 100% satisfaction guarantee")))))),
                React.createElement("div", null,
                    React.createElement("div", { className: "bg-white rounded-2xl shadow-lg p-8 sticky top-24", "data-aos": "fade-left" },
                        React.createElement("h2", { className: "text-gray-900 mb-2" }, "Book This Service"),
                        React.createElement("p", { className: "text-gray-600 mb-6" },
                            "Fill in your details to book ",
                            service.serviceName),
                        React.createElement("form", { onSubmit: handleSubmit, className: "space-y-6" },
                            React.createElement("div", null,
                                React.createElement("label", { htmlFor: "name", className: "block text-sm text-gray-700 mb-2" }, "Your Name *"),
                                React.createElement("input", { id: "name", name: "name", type: "text", value: formData.name, onChange: handleChange, required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "Enter your name" })),
                            React.createElement("div", null,
                                React.createElement("label", { htmlFor: "email", className: "block text-sm text-gray-700 mb-2" }, "Your Email *"),
                                React.createElement("input", { id: "email", name: "email", type: "email", value: formData.email, onChange: handleChange, required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "Enter your email" })),
                            React.createElement("div", { className: "bg-gray-50 p-4 rounded-lg" },
                                React.createElement("h4", { className: "text-gray-900 mb-3" }, "Booking Summary"),
                                React.createElement("div", { className: "space-y-2 text-sm" },
                                    React.createElement("div", { className: "flex justify-between" },
                                        React.createElement("span", { className: "text-gray-600" }, "Service:"),
                                        React.createElement("span", { className: "text-gray-900" }, service.serviceName)),
                                    React.createElement("div", { className: "flex justify-between" },
                                        React.createElement("span", { className: "text-gray-600" }, "Provider:"),
                                        React.createElement("span", { className: "text-gray-900" }, service.providerName)),
                                    React.createElement("div", { className: "flex justify-between" },
                                        React.createElement("span", { className: "text-gray-600" }, "Price:"),
                                        React.createElement("span", { className: "text-blue-600 text-xl" },
                                            "$",
                                            service.price)))),
                            React.createElement("button", { type: "submit", className: "w-full py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg" }, "Book Now"),
                            React.createElement("p", { className: "text-center text-gray-500 text-sm" }, "By booking, you agree to our Terms of Service and Privacy Policy"))))),
            React.createElement("div", { className: "mt-16" },
                React.createElement("h2", { className: "text-center mb-8", "data-aos": "fade-up" }, "Similar Services"),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6" }, services
                    .filter((s) => s.category === service.category && s.serviceId !== service.serviceId)
                    .slice(0, 3)
                    .map((relatedService) => (React.createElement("div", { key: relatedService.serviceId, className: "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer", onClick: () => navigate(`/service/${relatedService.serviceId}`), "data-aos": "fade-up" },
                    React.createElement("img", { src: relatedService.image, alt: relatedService.serviceName, className: "w-full h-48 object-cover" }),
                    React.createElement("div", { className: "p-6" },
                        React.createElement("h3", { className: "text-gray-900 mb-2" }, relatedService.serviceName),
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("div", { className: "flex items-center gap-1" },
                                React.createElement(Star, { size: 16, className: "text-yellow-500 fill-yellow-500" }),
                                React.createElement("span", { className: "text-sm" }, relatedService.rating)),
                            React.createElement("span", { className: "text-blue-600 text-xl" },
                                "$",
                                relatedService.price)))))))))));
}
