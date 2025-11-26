import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
export default function ServiceCard({ service }) {
    return (React.createElement("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300", "data-aos": "fade-up" },
        React.createElement("div", { className: "relative h-48 overflow-hidden" },
            React.createElement("img", { src: service.image, alt: service.serviceName, className: "w-full h-full object-cover hover:scale-110 transition-transform duration-300" }),
            React.createElement("div", { className: "absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm" }, service.category)),
        React.createElement("div", { className: "p-6" },
            React.createElement("h3", { className: "text-gray-900 mb-2" }, service.serviceName),
            React.createElement("div", { className: "flex items-center gap-2 text-gray-600 text-sm mb-3" },
                React.createElement(MapPin, { size: 16 }),
                React.createElement("span", null, service.providerName)),
            React.createElement("div", { className: "flex items-center gap-1 mb-3" },
                React.createElement(Star, { size: 16, className: "text-yellow-500 fill-yellow-500" }),
                React.createElement("span", { className: "text-sm" }, service.rating),
                React.createElement("span", { className: "text-gray-400 text-sm ml-2" },
                    "(",
                    service.slotsAvailable,
                    " slots available)")),
            React.createElement("p", { className: "text-gray-600 text-sm mb-4 line-clamp-2" }, service.description),
            React.createElement("div", { className: "flex items-center justify-between" },
                React.createElement("div", { className: "text-blue-600 text-2xl" },
                    "$",
                    service.price),
                React.createElement(Link, { to: `/service/${service.serviceId}`, className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" }, "View Details")))));
}
