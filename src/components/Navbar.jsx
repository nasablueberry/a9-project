import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
export default function Navbar() {
    const { user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleLogout = async () => {
        try {
            await logout();
            toast.success('Logged out successfully!');
        }
        catch (error) {
            toast.error('Failed to logout');
        }
    };
    const navLinks = (React.createElement(React.Fragment, null,
        React.createElement(NavLink, { to: "/", className: ({ isActive }) => `hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : ''}`, onClick: () => setIsMenuOpen(false) }, "Home"),
        user && (React.createElement(NavLink, { to: "/my-profile", className: ({ isActive }) => `hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : ''}`, onClick: () => setIsMenuOpen(false) }, "My Profile"))));
    return (React.createElement("nav", { className: "bg-white shadow-md sticky top-0 z-50" },
        React.createElement("div", { className: "container mx-auto px-4" },
            React.createElement("div", { className: "flex items-center justify-between h-16" },
                React.createElement(Link, { to: "/", className: "flex items-center gap-2" },
                    React.createElement("div", { className: "text-3xl" }, "\uD83D\uDC3E"),
                    React.createElement("span", { className: "text-blue-600" }, "WarmPaws")),
                React.createElement("div", { className: "hidden md:flex items-center gap-8" }, navLinks),
                React.createElement("div", { className: "hidden md:flex items-center gap-4" }, user ? (React.createElement("div", { className: "flex items-center gap-3" },
                    React.createElement("div", { className: "group relative" },
                        React.createElement("img", { src: user.photoURL || 'https://via.placeholder.com/40', alt: user.displayName || 'User', className: "w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer" }),
                        React.createElement("div", { className: "absolute top-full right-0 mt-2 bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" }, user.displayName || 'User')),
                    React.createElement("button", { onClick: handleLogout, className: "flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors" },
                        React.createElement(LogOut, { size: 18 }),
                        "Logout"))) : (React.createElement("div", { className: "flex gap-3" },
                    React.createElement(Link, { to: "/login", className: "px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors" }, "Login"),
                    React.createElement(Link, { to: "/register", className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" }, "Register")))),
                React.createElement("button", { className: "md:hidden p-2", onClick: () => setIsMenuOpen(!isMenuOpen) }, isMenuOpen ? React.createElement(X, { size: 24 }) : React.createElement(Menu, { size: 24 }))),
            isMenuOpen && (React.createElement("div", { className: "md:hidden py-4 border-t" },
                React.createElement("div", { className: "flex flex-col gap-4" },
                    navLinks,
                    user ? (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "flex items-center gap-3 py-2" },
                            React.createElement("img", { src: user.photoURL || 'https://via.placeholder.com/40', alt: user.displayName || 'User', className: "w-10 h-10 rounded-full border-2 border-blue-500" }),
                            React.createElement("span", null, user.displayName || 'User')),
                        React.createElement("button", { onClick: handleLogout, className: "flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors" },
                            React.createElement(LogOut, { size: 18 }),
                            "Logout"))) : (React.createElement("div", { className: "flex flex-col gap-3" },
                        React.createElement(Link, { to: "/login", className: "px-4 py-2 text-center text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors", onClick: () => setIsMenuOpen(false) }, "Login"),
                        React.createElement(Link, { to: "/register", className: "px-4 py-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors", onClick: () => setIsMenuOpen(false) }, "Register")))))))));
}
