import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
export default function ProtectedRoute({ children }) {
    const { user, loading, isDemoMode } = useAuth();
    const location = useLocation();
    if (loading) {
        return (React.createElement("div", { className: "flex items-center justify-center min-h-screen" },
            React.createElement("div", { className: "animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500" })));
    }
    // In demo mode, allow access but show warning
    if (isDemoMode) {
        return (React.createElement("div", { className: "container mx-auto px-4 py-12" },
            React.createElement("div", { className: "max-w-2xl mx-auto bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8 text-center" },
                React.createElement("div", { className: "text-5xl mb-4" }, "\u26A0\uFE0F"),
                React.createElement("h2", { className: "text-gray-900 mb-4" }, "Firebase Configuration Required"),
                React.createElement("p", { className: "text-gray-700 mb-6" }, "This page requires authentication, but Firebase is not configured yet. Please set up your Firebase credentials to access protected features."),
                React.createElement("div", { className: "space-y-2 text-sm text-gray-600" },
                    React.createElement("p", null,
                        "1. Go to ",
                        React.createElement("a", { href: "https://console.firebase.google.com/", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline" }, "Firebase Console")),
                    React.createElement("p", null, "2. Create or select a project"),
                    React.createElement("p", null,
                        "3. Get your configuration and update ",
                        React.createElement("code", { className: "bg-yellow-100 px-1 rounded" }, "firebase.config.json"))))));
    }
    if (!user) {
        return React.createElement(Navigate, { to: "/login", state: { from: location }, replace: true });
    }
    return React.createElement(React.Fragment, null, children);
}
