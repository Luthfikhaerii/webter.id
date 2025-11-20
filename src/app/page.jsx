"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code, Smartphone, Globe, Database, ArrowRight, Instagram, Send, Mail, Sparkles, Zap, Award, Handshake } from 'lucide-react';

export default function WebterProfile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Website Development",
      description: "Membangun website modern, responsif, dan SEO-friendly untuk bisnis Anda",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Sistem Informasi",
      description: "Solusi sistem informasi terintegrasi untuk meningkatkan efisiensi operasional",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      title: "Consultation",
      description: "Konsultasi kebutuhan website dan system untuk perusahaan",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Custom Software",
      description: "Pengembangan software custom sesuai kebutuhan spesifik bisnis Anda",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const features = [
    { icon: <Sparkles className="w-6 h-6" />, text: "Modern Tech Stack" },
    { icon: <Zap className="w-6 h-6" />, text: "Fast Delivery" },
    { icon: <Award className="w-6 h-6" />, text: "Quality Assurance" }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold tracking-tight cursor-pointer flex items-center" onClick={() => scrollToSection('home')}>
              <span>
                <img src="/logo.png" className="h-20 w-20"/>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {['home', 'services', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-6 py-2 text-sm font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                    activeSection === item 
                      ? 'bg-black text-white' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 py-6 space-y-3">
            {['home', 'services', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 text-sm font-semibold uppercase tracking-wider text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 border border-gray-200">
                Software House Terpercaya
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                <span className="block text-black animate-fade-in-up animation-delay-200">WEBTER</span>
                <span className="block bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl mt-2 animate-fade-in-up animation-delay-400">
                  Software House
                </span>
              </h1>
              
              <p className="text-xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-600">
                Transformasi Digital Dimulai dari Sini.<br/>
                <span className="text-lg md:text-xl text-gray-500">Wujudkan Inovasi Teknologi untuk Bisnis Anda</span>
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center items-center pt-8 animate-fade-in-up animation-delay-800">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                  <span className="text-black">{feature.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up animation-delay-1000">
              <button 
                onClick={() => scrollToSection('services')}
                className="group px-10 py-5 bg-black text-white font-bold text-lg rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center space-x-3 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>Lihat Layanan</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Hubungi Kami
              </button>
            </div>

            <div className="pt-16 text-gray-500 text-sm uppercase tracking-widest font-semibold animate-fade-in-up animation-delay-1200">
              📍 Bandung, Indonesia
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gray-400 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-32 bg-white transition-all duration-1000 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-bold text-gray-700 mb-6">
              WHAT WE DO
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Layanan Kami</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              Solusi digital komprehensif untuk mengembangkan bisnis Anda ke level berikutnya
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative p-10 bg-white rounded-3xl border-2 border-gray-200 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden ${
                  visibleSections.has('services') ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white relative overflow-hidden transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className=" gap-16 items-center">
            <div className={`space-y-8 ${visibleSections.has('about') ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-bold text-white/80 border border-white/20">
                ABOUT US
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-tight">
                Tentang 
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent ml-4">Webter</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="text-xl">
                  Webter adalah software house yang berlokasi di Bandung, Indonesia. Kami berdedikasi untuk memberikan solusi digital terbaik bagi bisnis Anda.
                </p>
                <p>
                  Dengan tim developer berpengalaman dan passionate, kami menghadirkan website dan sistem informasi yang tidak hanya fungsional, tetapi juga elegant dan user-friendly.
                </p>
                <p>
                  Kami percaya bahwa teknologi yang tepat dapat mengubah cara bisnis beroperasi dan berkembang di era digital ini.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold">
                  React & Next.js
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold">
                  PHP & Laravel
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold">
                  Vue & Nuxt.js
                </div>
                 <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold">
                  Express.js
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold">
                  Nest.js
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className={`${visibleSections.has('contact') ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-block px-4 py-2 bg-black/5 rounded-full text-sm font-bold text-gray-700 mb-6">
              GET IN TOUCH
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Mari Berkolaborasi</h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto font-light">
              Siap untuk membawa bisnis Anda ke level berikutnya?<br/>Hubungi kami sekarang dan mulai transformasi digital Anda!
            </p>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://instagram.com/webter.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-3 px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>@webter.id</span>
                </a>
                
                <a
                  href="https://tiktok.com/@webter.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-3 px-10 py-5 bg-black text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>@webter.id</span>
                </a>
              </div>

              <a
                href="mailto:hello@webter.id"
                className="group inline-flex items-center justify-center space-x-3 px-10 py-5 bg-white text-black font-bold text-lg rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>hello@webter.id</span>
              </a>
            </div>

            <div className="mt-20 pt-12 border-t-2 border-gray-200">
              <p className="text-gray-500 text-lg font-semibold">
                📍 Bandung, Indonesia
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Jl.Terusan Bojongsoang, Bandung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-950 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="text-4xl md:text-5xl font-black tracking-tight">
              <span>WEB</span><span className="text-gray-500">TER</span>
            </div>
            <p className="text-gray-400 text-lg font-light">
              Software House | Bandung, Indonesia
            </p>
            <div className="flex justify-center space-x-6 pt-4">
              <a href="https://instagram.com/webter.id" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://tiktok.com/@webter.id" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Send className="w-6 h-6" />
              </a>
              <a href="mailto:hello@webter.id" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-500">
                © 2024 Webter. All rights reserved. Made with ❤️ in Bandung
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        .animation-delay-1200 {
          animation-delay: 1200ms;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #00000008 1px, transparent 1px),
            linear-gradient(to bottom, #00000008 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .bg-grid-pattern-white {
          background-image: 
            linear-gradient(to right, #ffffff08 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff08 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}