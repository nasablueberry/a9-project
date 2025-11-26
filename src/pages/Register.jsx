import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import { Eye, EyeOff, Mail, Lock, User, Image } from 'lucide-react';
export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const { signUp, googleSignIn, isDemoMode } = useAuth();
    const navigate = useNavigate();
    const validatePassword = (pass) => {
        const hasUpperCase = /[A-Z]/.test(pass);
        const hasLowerCase = /[a-z]/.test(pass);
        const isLongEnough = pass.length >= 6;
        if (!hasUpperCase) {
            return 'Password must contain at least one uppercase letter';
        }
        if (!hasLowerCase) {
            return 'Password must contain at least one lowercase letter';
        }
        if (!isLongEnough) {
            return 'Password must be at least 6 characters long';
        }
        return '';
    };
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordError(validatePassword(newPassword));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isDemoMode) {
            toast.error('Please configure Firebase credentials to use authentication');
            return;
        }
        const error = validatePassword(password);
        if (error) {
            setPasswordError(error);
            toast.error(error);
            return;
        }
        setLoading(true);
        try {
            await signUp(email, password, name, photoURL);
            toast.success('Account created successfully!');
            navigate('/');
        }
        catch (error) {
            toast.error(error.message || 'Failed to create account');
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
            toast.success('Signed up with Google successfully!');
            navigate('/');
        }
        catch (error) {
            toast.error(error.message || 'Failed to sign up with Google');
        }
    };
    return (React.createElement("div", { className: "min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4" },
        React.createElement("div", { className: "max-w-md w-full" },
            React.createElement("div", { className: "bg-white rounded-2xl shadow-xl p-8", "data-aos": "fade-up" },
                React.createElement("div", { className: "text-center mb-8" },
                    React.createElement("div", { className: "text-5xl mb-4" }, "\uD83D\uDC3E"),
                    React.createElement("h2", { className: "text-gray-900 mb-2" }, "Create Account"),
                    React.createElement("p", { className: "text-gray-600" }, "Join WarmPaws today")),
                React.createElement("form", { onSubmit: handleSubmit, className: "space-y-5" },
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "name", className: "block text-sm text-gray-700 mb-2" }, "Full Name"),
                        React.createElement("div", { className: "relative" },
                            React.createElement(User, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", size: 20 }),
                            React.createElement("input", { id: "name", type: "text", value: name, onChange: (e) => setName(e.target.value), required: true, className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "Enter your name" }))),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "email", className: "block text-sm text-gray-700 mb-2" }, "Email Address"),
                        React.createElement("div", { className: "relative" },
                            React.createElement(Mail, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", size: 20 }),
                            React.createElement("input", { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "Enter your email" }))),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "photoURL", className: "block text-sm text-gray-700 mb-2" }, "Photo URL"),
                        React.createElement("div", { className: "relative" },
                            React.createElement(Image, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", size: 20 }),
                            React.createElement("input", { id: "photoURL", type: "url", value: photoURL, onChange: (e) => setPhotoURL(e.target.value), required: true, className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent", placeholder: "Enter photo URL" }))),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "password", className: "block text-sm text-gray-700 mb-2" }, "Password"),
                        React.createElement("div", { className: "relative" },
                            React.createElement(Lock, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", size: 20 }),
                            React.createElement("input", { id: "password", type: showPassword ? 'text' : 'password', value: password, onChange: handlePasswordChange, required: true, className: `w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${passwordError ? 'border-red-500' : 'border-gray-300'}`, placeholder: "Create a password" }),
                            React.createElement("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600" }, showPassword ? React.createElement(EyeOff, { size: 20 }) : React.createElement(Eye, { size: 20 }))),
                        passwordError && (React.createElement("p", { className: "text-red-500 text-sm mt-1" }, passwordError)),
                        React.createElement("div", { className: "mt-2 text-xs text-gray-600 space-y-1" },
                            React.createElement("p", { className: password.length >= 6 ? 'text-green-600' : '' }, "\u2713 At least 6 characters"),
                            React.createElement("p", { className: /[A-Z]/.test(password) ? 'text-green-600' : '' }, "\u2713 One uppercase letter"),
                            React.createElement("p", { className: /[a-z]/.test(password) ? 'text-green-600' : '' }, "\u2713 One lowercase letter"))),
                    React.createElement("button", { type: "submit", disabled: loading || !!passwordError, className: "w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" }, loading ? 'Creating Account...' : 'Register')),
                React.createElement("div", { className: "flex items-center gap-4 my-6" },
                    React.createElement("div", { className: "flex-1 border-t border-gray-300" }),
                    React.createElement("span", { className: "text-gray-500 text-sm" }, "OR"),
                    React.createElement("div", { className: "flex-1 border-t border-gray-300" })),
                React.createElement("button", { onClick: handleGoogleSignIn, className: "w-full py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2" },
                    React.createElement("img", { src: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg", alt: "Google", className: "w-5 h-5" }),
                    React.createElement("span", null, "Continue with Google")),
                React.createElement("p", { className: "text-center text-gray-600 mt-6" },
                    "Already have an account?",
                    ' ',
                    React.createElement(Link, { to: "/login", className: "text-blue-600 hover:text-blue-700" }, "Login"))))));
}
