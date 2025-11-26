import React from 'react';
import { AlertCircle, X } from 'lucide-react';
import { useState } from 'react';
import { isUsingDemoConfig } from '../firebase/config';
export default function FirebaseSetupBanner() {
    const [isVisible, setIsVisible] = useState(true);
    if (!isUsingDemoConfig || !isVisible) {
        return null;
    }
    return (React.createElement("div", { className: "bg-yellow-50 border-b border-yellow-200" },
        React.createElement("div", { className: "container mx-auto px-4 py-3" },
            React.createElement("div", { className: "flex items-center justify-between gap-4" },
                React.createElement("div", { className: "flex items-center gap-3" },
                    React.createElement(AlertCircle, { className: "text-yellow-600 flex-shrink-0", size: 20 }),
                    React.createElement("div", { className: "text-sm" },
                        React.createElement("span", { className: "text-yellow-800" },
                            React.createElement("strong", null, "Firebase Setup Required:"),
                            " Please configure your Firebase credentials in ",
                            React.createElement("code", { className: "bg-yellow-100 px-1 rounded" }, "firebase.config.json"),
                            " or ",
                            React.createElement("code", { className: "bg-yellow-100 px-1 rounded" }, ".env"),
                            " to enable authentication."),
                        React.createElement("a", { href: "https://console.firebase.google.com/", target: "_blank", rel: "noopener noreferrer", className: "text-yellow-700 underline ml-2 hover:text-yellow-900" }, "Get Firebase Config \u2192"))),
                React.createElement("button", { onClick: () => setIsVisible(false), className: "text-yellow-600 hover:text-yellow-800 flex-shrink-0", "aria-label": "Dismiss" },
                    React.createElement(X, { size: 20 }))))));
}
