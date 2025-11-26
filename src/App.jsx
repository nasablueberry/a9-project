import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FirebaseSetupBanner from './components/FirebaseSetupBanner';
import Home from './pages/Home';
import ServiceDetails from './pages/ServiceDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import MyProfile from './pages/MyProfile';
import ForgotPassword from './pages/ForgotPassword';
import UpdateProfile from './pages/UpdateProfile';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
export default function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out',
        });
    }, []);
    return (React.createElement(Router, null,
        React.createElement(AuthProvider, null,
            React.createElement("div", { className: "flex flex-col min-h-screen" },
                React.createElement(FirebaseSetupBanner, null),
                React.createElement(Navbar, null),
                React.createElement("main", { className: "flex-grow" },
                    React.createElement(Routes, null,
                        React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
                        React.createElement(Route, { path: "/service/:id", element: React.createElement(ProtectedRoute, null,
                                React.createElement(ServiceDetails, null)) }),
                        React.createElement(Route, { path: "/login", element: React.createElement(Login, null) }),
                        React.createElement(Route, { path: "/register", element: React.createElement(Register, null) }),
                        React.createElement(Route, { path: "/forgot-password", element: React.createElement(ForgotPassword, null) }),
                        React.createElement(Route, { path: "/my-profile", element: React.createElement(ProtectedRoute, null,
                                React.createElement(MyProfile, null)) }),
                        React.createElement(Route, { path: "/update-profile", element: React.createElement(ProtectedRoute, null,
                                React.createElement(UpdateProfile, null)) }))),
                React.createElement(Footer, null),
                React.createElement(Toaster, { position: "top-right" })))));
}
