import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { Heart, Shield, Clock, Award, Snowflake, ThermometerSnowflake } from 'lucide-react';
export default function Home() {
    const winterTips = [
        {
            icon: React.createElement(ThermometerSnowflake, { size: 40, className: "text-blue-500" }),
            title: 'Monitor Temperature',
            description: 'Keep your home warm and avoid long exposure to extreme cold.'
        },
        {
            icon: React.createElement(Snowflake, { size: 40, className: "text-blue-500" }),
            title: 'Protect Paws',
            description: 'Use paw balm and booties to protect against ice, salt, and snow.'
        },
        {
            icon: React.createElement(Heart, { size: 40, className: "text-blue-500" }),
            title: 'Proper Nutrition',
            description: 'Adjust diet to maintain healthy weight during less active months.'
        },
        {
            icon: React.createElement(Shield, { size: 40, className: "text-blue-500" }),
            title: 'Winter Clothing',
            description: 'Use coats and sweaters for short-haired or small pets.'
        }
    ];
    const experts = [
        {
            name: 'Dr. Sarah Johnson',
            specialty: 'Winter Pet Care Specialist',
            image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
            experience: '12 years'
        },
        {
            name: 'Dr. Michael Chen',
            specialty: 'Veterinary Dermatologist',
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
            experience: '10 years'
        },
        {
            name: 'Dr. Emily Roberts',
            specialty: 'Pet Nutrition Expert',
            image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
            experience: '8 years'
        },
        {
            name: 'Dr. James Wilson',
            specialty: 'Emergency Pet Care',
            image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
            experience: '15 years'
        }
    ];
    // Show only the top popular services on the home page (top 4 by rating)
    const popularServices = [...services]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);
    return (React.createElement("div", null,
        React.createElement("section", { className: "relative" },
            React.createElement(Swiper, { modules: [Autoplay, Pagination, Navigation], spaceBetween: 0, slidesPerView: 1, autoplay: { delay: 4000, disableOnInteraction: false }, pagination: { clickable: true }, navigation: true, loop: true, className: "h-[500px] md:h-[600px]" },
                React.createElement(SwiperSlide, null,
                    React.createElement("div", { className: "relative h-full" },
                        React.createElement("img", { src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&h=1080&fit=crop", alt: "Dog in winter coat", className: "w-full h-full object-cover" }),
                        React.createElement("div", { className: "absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center" },
                            React.createElement("div", { className: "text-center text-white px-4" },
                                React.createElement("h1", { className: "text-5xl md:text-6xl mb-4", "data-aos": "fade-down" }, "Keep Your Pets Warm This Winter"),
                                React.createElement("p", { className: "text-xl md:text-2xl mb-6", "data-aos": "fade-up" }, "Professional winter care services for your furry friends"),
                                React.createElement("a", { href: "#services", className: "inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors", "data-aos": "zoom-in" }, "Explore Services"))))),
                React.createElement(SwiperSlide, null,
                    React.createElement("div", { className: "relative h-full" },
                        React.createElement("img", { src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&h=1080&fit=crop", alt: "Pet grooming", className: "w-full h-full object-cover" }),
                        React.createElement("div", { className: "absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center" },
                            React.createElement("div", { className: "text-center text-white px-4" },
                                React.createElement("h1", { className: "text-5xl md:text-6xl mb-4", "data-aos": "fade-down" }, "Winter Grooming & Care"),
                                React.createElement("p", { className: "text-xl md:text-2xl mb-6", "data-aos": "fade-up" }, "Expert grooming services tailored for cold weather"),
                                React.createElement("a", { href: "#services", className: "inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors", "data-aos": "zoom-in" }, "Book Now"))))),
                React.createElement(SwiperSlide, null,
                    React.createElement("div", { className: "relative h-full" },
                        React.createElement("img", { src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1920&h=1080&fit=crop", alt: "Happy pet", className: "w-full h-full object-cover" }),
                        React.createElement("div", { className: "absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center" },
                            React.createElement("div", { className: "text-center text-white px-4" },
                                React.createElement("h1", { className: "text-5xl md:text-6xl mb-4", "data-aos": "fade-down" }, "Trusted by Pet Owners"),
                                React.createElement("p", { className: "text-xl md:text-2xl mb-6", "data-aos": "fade-up" }, "Join thousands of happy pets and their families"),
                                React.createElement("a", { href: "#services", className: "inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors", "data-aos": "zoom-in" }, "Get Started"))))))),
        React.createElement("section", { className: "py-16 bg-gray-50" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("h2", { className: "text-center mb-12", "data-aos": "fade-up" }, "Why Choose WarmPaws?"),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8" },
                    React.createElement("div", { className: "text-center", "data-aos": "fade-up", "data-aos-delay": "100" },
                        React.createElement("div", { className: "flex justify-center mb-4" },
                            React.createElement("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center" },
                                React.createElement(Heart, { className: "text-blue-600", size: 32 }))),
                        React.createElement("h3", { className: "mb-2" }, "Expert Care"),
                        React.createElement("p", { className: "text-gray-600 text-sm" }, "Certified professionals dedicated to your pet's wellbeing")),
                    React.createElement("div", { className: "text-center", "data-aos": "fade-up", "data-aos-delay": "200" },
                        React.createElement("div", { className: "flex justify-center mb-4" },
                            React.createElement("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center" },
                                React.createElement(Shield, { className: "text-blue-600", size: 32 }))),
                        React.createElement("h3", { className: "mb-2" }, "Safety First"),
                        React.createElement("p", { className: "text-gray-600 text-sm" }, "All services follow strict safety and hygiene protocols")),
                    React.createElement("div", { className: "text-center", "data-aos": "fade-up", "data-aos-delay": "300" },
                        React.createElement("div", { className: "flex justify-center mb-4" },
                            React.createElement("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center" },
                                React.createElement(Clock, { className: "text-blue-600", size: 32 }))),
                        React.createElement("h3", { className: "mb-2" }, "24/7 Support"),
                        React.createElement("p", { className: "text-gray-600 text-sm" }, "Round-the-clock assistance for your peace of mind")),
                    React.createElement("div", { className: "text-center", "data-aos": "fade-up", "data-aos-delay": "400" },
                        React.createElement("div", { className: "flex justify-center mb-4" },
                            React.createElement("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center" },
                                React.createElement(Award, { className: "text-blue-600", size: 32 }))),
                        React.createElement("h3", { className: "mb-2" }, "Top Rated"),
                        React.createElement("p", { className: "text-gray-600 text-sm" }, "Consistently rated 5 stars by pet owners nationwide"))))),
        React.createElement("section", { id: "services", className: "py-16" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("h2", { className: "text-center mb-4", "data-aos": "fade-up" }, "Popular Winter Care Services"),
                React.createElement("p", { className: "text-center text-gray-600 mb-12", "data-aos": "fade-up" }, "Discover our most loved services to keep your pets cozy this winter"),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" }, popularServices.map((service) => (React.createElement(ServiceCard, { key: service.serviceId, service: service })))),
                React.createElement("div", { className: "text-center mt-8" },
                    React.createElement("a", { href: "/services", className: "inline-block px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors" }, "View all services"))),
        React.createElement("section", { id: "tips", className: "py-16 bg-blue-50" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("h2", { className: "text-center mb-4", "data-aos": "fade-up" }, "Winter Care Tips for Pets"),
                React.createElement("p", { className: "text-center text-gray-600 mb-12", "data-aos": "fade-up" }, "Essential advice to keep your pets healthy during cold months"),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" }, winterTips.map((tip, index) => (React.createElement("div", { key: index, className: "bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow", "data-aos": "fade-up", "data-aos-delay": index * 100 },
                    React.createElement("div", { className: "mb-4" }, tip.icon),
                    React.createElement("h3", { className: "mb-2" }, tip.title),
                    React.createElement("p", { className: "text-gray-600 text-sm" }, tip.description))))))),
        React.createElement("section", { className: "py-16" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("h2", { className: "text-center mb-4", "data-aos": "fade-up" }, "Meet Our Expert Vets"),
                React.createElement("p", { className: "text-center text-gray-600 mb-12", "data-aos": "fade-up" }, "Trusted professionals with years of experience in winter pet care"),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" }, experts.map((expert, index) => (React.createElement("div", { key: index, className: "text-center", "data-aos": "fade-up", "data-aos-delay": index * 100 },
                    React.createElement("div", { className: "relative mb-4 inline-block" },
                        React.createElement("img", { src: expert.image, alt: expert.name, className: "w-48 h-48 rounded-full object-cover mx-auto shadow-lg" }),
                        React.createElement("div", { className: "absolute bottom-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-full text-sm" }, expert.experience)),
                    React.createElement("h3", { className: "mb-1" }, expert.name),
                    React.createElement("p", { className: "text-blue-600 text-sm" }, expert.specialty))))))),
        React.createElement("section", { className: "py-16 bg-gray-50" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("h2", { className: "text-center mb-12", "data-aos": "fade-up" }, "What Pet Owners Say"),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" },
                    React.createElement("div", { className: "bg-white p-6 rounded-xl shadow-md", "data-aos": "fade-up", "data-aos-delay": "100" },
                        React.createElement("div", { className: "flex items-center gap-1 mb-4" }, [...Array(5)].map((_, i) => (React.createElement("span", { key: i, className: "text-yellow-500" }, "\u2B50")))),
                        React.createElement("p", { className: "text-gray-600 mb-4" }, "\"WarmPaws helped my dog Max stay comfortable all winter. The grooming service was exceptional!\""),
                        React.createElement("div", { className: "flex items-center gap-3" },
                            React.createElement("img", { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", alt: "Customer", className: "w-12 h-12 rounded-full object-cover" }),
                            React.createElement("div", null,
                                React.createElement("p", null, "Jennifer Smith"),
                                React.createElement("p", { className: "text-gray-500 text-sm" }, "Dog Owner")))),
                    React.createElement("div", { className: "bg-white p-6 rounded-xl shadow-md", "data-aos": "fade-up", "data-aos-delay": "200" },
                        React.createElement("div", { className: "flex items-center gap-1 mb-4" }, [...Array(5)].map((_, i) => (React.createElement("span", { key: i, className: "text-yellow-500" }, "\u2B50")))),
                        React.createElement("p", { className: "text-gray-600 mb-4" }, "\"The winter coat fitting service was perfect! My cat Luna looks adorable and stays warm.\""),
                        React.createElement("div", { className: "flex items-center gap-3" },
                            React.createElement("img", { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", alt: "Customer", className: "w-12 h-12 rounded-full object-cover" }),
                            React.createElement("div", null,
                                React.createElement("p", null, "David Johnson"),
                                React.createElement("p", { className: "text-gray-500 text-sm" }, "Cat Owner")))),
                    React.createElement("div", { className: "bg-white p-6 rounded-xl shadow-md", "data-aos": "fade-up", "data-aos-delay": "300" },
                        React.createElement("div", { className: "flex items-center gap-1 mb-4" }, [...Array(5)].map((_, i) => (React.createElement("span", { key: i, className: "text-yellow-500" }, "\u2B50")))),
                        React.createElement("p", { className: "text-gray-600 mb-4" }, "\"Excellent service! The vets are knowledgeable and truly care about pets. Highly recommend!\""),
                        React.createElement("div", { className: "flex items-center gap-3" },
                            React.createElement("img", { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", alt: "Customer", className: "w-12 h-12 rounded-full object-cover" }),
                            React.createElement("div", null,
                                React.createElement("p", null, "Sarah Williams"),
                                React.createElement("p", { className: "text-gray-500 text-sm" }, "Pet Owner")))))))))"
}
