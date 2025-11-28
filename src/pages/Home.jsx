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
      icon: <ThermometerSnowflake size={40} className="text-blue-500" />,
      title: 'Monitor Temperature',
      description: 'Keep your home warm and avoid long exposure to extreme cold.'
    },
    {
      icon: <Snowflake size={40} className="text-blue-500" />,
      title: 'Protect Paws',
      description: 'Use paw balm and booties to protect against ice, salt, and snow.'
    },
    {
      icon: <Heart size={40} className="text-blue-500" />,
      title: 'Proper Nutrition',
      description: 'Adjust diet to maintain healthy weight during less active months.'
    },
    {
      icon: <Shield size={40} className="text-blue-500" />,
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

  const popularServices = [...services].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="h-[500px] md:h-[600px]"
        >
          <SwiperSlide>
            <div className="relative h-full">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&h=1080&fit=crop"
                alt="Dog in winter coat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-5xl md:text-6xl mb-4" data-aos="fade-down">
                    Keep Your Pets Warm This Winter
                  </h1>
                  <p className="text-xl md:text-2xl mb-6" data-aos="fade-up">
                    Professional winter care services for your furry friends
                  </p>
                  <a
                    href="#services"
                    className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    data-aos="zoom-in"
                  >
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Add other slides similarly */}
        </Swiper>
      </section>

      {/* Why Choose WarmPaws */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12" data-aos="fade-up">
            Why Choose WarmPaws?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Example Feature */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="text-blue-600" size={32} />
                </div>
              </div>
              <h3 className="mb-2">Expert Care</h3>
              <p className="text-gray-600 text-sm">Certified professionals dedicated to your pet's wellbeing</p>
            </div>
            {/* Repeat for other features */}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-4" data-aos="fade-up">
            Popular Winter Care Services
          </h2>
          <p className="text-center text-gray-600 mb-12" data-aos="fade-up">
            Discover our most loved services to keep your pets cozy this winter
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularServices.map(service => (
              <ServiceCard key={service.serviceId} service={service} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/services"
              className="inline-block px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View all services
            </a>
          </div>
        </div>
      </section>

      {/* Winter Tips */}
      <section id="tips" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-4" data-aos="fade-up">
            Winter Care Tips for Pets
          </h2>
          <p className="text-center text-gray-600 mb-12" data-aos="fade-up">
            Essential advice to keep your pets healthy during cold months
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {winterTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4">{tip.icon}</div>
                <h3 className="mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-4" data-aos="fade-up">
            Meet Our Expert Vets
          </h2>
          <p className="text-center text-gray-600 mb-12" data-aos="fade-up">
            Trusted professionals with years of experience in winter pet care
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative mb-4 inline-block">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                  />
                  <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {expert.experience}
                  </div>
                </div>
                <h3 className="mb-1">{expert.name}</h3>
                <p className="text-blue-600 text-sm">{expert.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12" data-aos="fade-up">
            What Pet Owners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-yellow-500">⭐</span>)}</div>
              <p className="text-gray-600 mb-4">
                "WarmPaws helped my dog Max stay comfortable all winter. The grooming service was exceptional!"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                  alt="Customer"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p>Jennifer Smith</p>
                  <p className="text-gray-500 text-sm">Dog Owner</p>
                </div>
              </div>
            </div>

            {/* Add other testimonials similarly */}
          </div>
        </div>
      </section>
    </div>
  );
}
