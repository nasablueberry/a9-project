import React from 'react';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { login, googleSignIn, isDemoMode } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isDemoMode) {
            toast.error('Please configure Firebase credentials to use authentication');
            return;
        }
        setLoading(true);
        try {
            await login(email, password);
            toast.success('Logged in successfully!');
            navigate(from, { replace: true });
        }
        catch (error) {
            toast.error(error.message || 'Failed to login');
        }
        finally {
            setLoading(false);
        }
    };
    const handleGoogleSignIn = async () => {
        if (isDemoMode) {
            toast.error('Please configure Firebase credentials to use authentication');
            return;
        }
        try {
            await googleSignIn();
            toast.success('Logged in with Google successfully!');
            navigate(from, { replace: true });
        }
        catch (error) {
            toast.error(error.message || 'Failed to login with Google');
        }
    };
    return (React.createElement("div", { className: "min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4" },
        React.createElement("div", { className: "max-w-md w-full" },
            React.createElement("div", { className: "bg-white rounded-2xl shadow-xl p-8", "data-aos": "fade-up" },
                React.createElement("div", { className: "text-center mb-8" },
                    React.createElement("div", { className: "text-5xl mb-4" }, "\uD83D\uDC3E"),
                    React.createElement("h2", { className: "text-gray-900 mb-2" }, "Welcome Back!"),
                    React.createElement("p", { className: "text-gray-600" }, "Login to access your account")),
                React.createElement("form", { onSubmit: handleSubmit, className: "space-y-6" },
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "email", className: "block text-sm text-gray-700 mb-2" }, "Email Address"),
                        React.createElement("div", { className: "relative" },
                            React.createElement(Mail, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", size: 20 }),
                            React.createElement("input", { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "Enter your email" }))),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "password", className: "block text-sm text-gray-700 mb-2" }, "Password"),
                        React.createElement("div", { className: "relative" },
                            React.createElement(Lock, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", size: 20 }),
                            React.createElement("input", { id: "password", type: showPassword ? 'text' : 'password', value: password, onChange: (e) => setPassword(e.target.value), required: true, className: "w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "Enter your password" }),
                            React.createElement("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600" }, showPassword ? React.createElement(EyeOff, { size: 20 }) : React.createElement(Eye, { size: 20 })))),
                    React.createElement("div", { className: "text-right" },
                        React.createElement(Link, { to: "/forgot-password", state: { email }, className: "text-sm text-blue-600 hover:text-blue-700" }, "Forgot Password?")),
                    React.createElement("button", { type: "submit", disabled: loading || isDemoMode, className: "w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" }, loading ? 'Logging in...' : 'Login')),
                React.createElement("div", { className: "flex items-center gap-4 my-6" },
                    React.createElement("div", { className: "flex-1 border-t border-gray-300" }),
                    React.createElement("span", { className: "text-gray-500 text-sm" }, "OR"),
                    React.createElement("div", { className: "flex-1 border-t border-gray-300" })),
                React.createElement("button", { onClick: handleGoogleSignIn, disabled: isDemoMode, className: "w-full py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" },
                    React.createElement("img", { src: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg", alt: "Google", className: "w-5 h-5" }),
                    React.createElement("span", null, "Continue with Google")),
                React.createElement("p", { className: "text-center text-gray-600 mt-6" },
                    "Don't have an account?",
                    ' ',
                    React.createElement(Link, { to: "/register", className: "text-blue-600 hover:text-blue-700" }, "Sign Up"))))));
}
