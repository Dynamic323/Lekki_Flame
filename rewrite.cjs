const fs = require('fs');
const path = require('path');

const tailwindConfig = `
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FDFBF7',
          dark: '#0A0A0A'
        },
        primary: '#E8571A',
        secondary: '#D4A017',
        surface: {
          light: '#FFFFFF',
          dark: '#141414'
        },
        surfaceAlt: {
          light: '#F4F1EB',
          dark: '#1F1F1F'
        },
        borderc: {
          light: 'rgba(0,0,0,0.08)',
          dark: 'rgba(255,255,255,0.06)'
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
`;

const indexCss = `
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,400;500;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-background-light text-gray-900 dark:bg-background-dark dark:text-gray-100 transition-colors duration-300;
  }
}

.fade-in-section {
  opacity: 0;
  transform: translateY(20vh);
  visibility: hidden;
  transition: opacity 0.6s ease-out, transform 1.2s ease-out;
  will-change: opacity, visibility;
}
.fade-in-section.is-visible {
  opacity: 1;
  transform: none;
  visibility: visible;
}

@keyframes tickerScroll {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}
.animate-ticker {
  animation: tickerScroll 20s linear infinite;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  scrollbar-width: none;
}
`;

const appJsx = `
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Catering from './pages/Catering';
import About from './pages/About';
import Contact from './pages/Contact';
import WhatsAppFab from './components/WhatsAppFab';
import './index.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Router>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppFab />
    </Router>
  );
}

export default App;
`;

const navbarJsx = `
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';

function Navbar({ isDark, toggleTheme }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Catering', path: '/catering' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-borderc-light dark:border-borderc-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="font-serif text-2xl font-bold text-primary">Lekki Flame</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <Link 
                key={link.name} 
                to={link.path}
                className={\`text-sm font-medium transition-colors hover:text-primary \${location.pathname === link.path ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}\`}
              >
                {link.name}
              </Link>
            ))}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-700 dark:text-gray-300 p-2">
              {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface-light dark:bg-surface-dark border-b border-borderc-light dark:border-borderc-dark absolute w-full left-0 transition-colors duration-300">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {links.map(link => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
`;

const footerJsx = `
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-surfaceAlt-light dark:bg-surfaceAlt-dark border-t border-borderc-light dark:border-borderc-dark py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif text-2xl font-bold text-primary mb-2">Lekki Flame</h3>
          <p className="text-gray-600 dark:text-gray-400">Feeding Lagos Since 2021</p>
        </div>
        <div>
          <h4 className="text-secondary font-bold mb-4 font-sans">Quick Links</h4>
          <div className="flex flex-col space-y-3">
            <Link to="/menu" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Menu</Link>
            <Link to="/catering" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Catering</Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">About Us</Link>
          </div>
        </div>
        <div>
          <h4 className="text-secondary font-bold mb-4 font-sans">Contact</h4>
          <div className="space-y-3 text-gray-600 dark:text-gray-400">
            <p>Lekki Phase 1, Lagos</p>
            <p>+234 701 784 7124</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
`;

const whatsappFabJsx = `
import React from 'react';
import { MessageCircle } from 'lucide-react';

function WhatsAppFab() {
  return (
    <a 
      href="https://wa.me/2347017847124" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center z-50 shadow-lg hover:scale-110 transition-transform"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
      <MessageCircle size={28} className="relative z-10" />
    </a>
  );
}
export default WhatsAppFab;
`;

const tickerJsx = `
import React from 'react';

function Ticker() {
  const text = "JOLLOF · SUYA · PEPPER SOUP · OWAMBE CATERING · FRESH DAILY · ORDER ON WHATSAPP · ";
  return (
    <div className="w-full overflow-hidden bg-primary text-white py-3 whitespace-nowrap">
      <div className="inline-block animate-ticker">
        <div className="inline-block pr-12 font-mono font-medium tracking-wider">{text}</div>
        <div className="inline-block pr-12 font-mono font-medium tracking-wider">{text}</div>
      </div>
    </div>
  );
}
export default Ticker;
`;

const fadeInJsx = `
import React, { useEffect, useRef, useState } from 'react';

function FadeIn({ children, className = "" }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      className={\`fade-in-section \${isVisible ? 'is-visible' : ''} \${className}\`}
      ref={domRef}
    >
      {children}
    </div>
  );
}
export default FadeIn;
`;

const homeJsx = `
import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Star, Clock, Utensils } from 'lucide-react';
import Ticker from '../components/Ticker';
import FadeIn from '../components/FadeIn';

function Home() {
  const reviews = [
    { text: "This jollof is a threat to my diet. Came hot to VI in under 40 mins.", author: "Tobi A., Victoria Island" },
    { text: "Ordered for 20 people at our Lekki office. Every plate was clean.", author: "Funke O., Lekki Phase 1" },
    { text: "The pepper soup is dangerous. I finished it before Netflix even loaded.", author: "Emeka D., Surulere" },
    { text: "Catered my wife's 40th in Ajah. Professional, punctual, food was elite.", author: "Biodun K., Ajah" }
  ];

  return (
    <main>
      <section className="min-h-[85vh] flex items-center py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 w-full">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-surface-light dark:bg-surface-dark border border-borderc-light dark:border-borderc-dark px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Flame size={16} className="text-primary" /> Lagos' Most Ordered Jollof
            </div>
            <h1 className="font-serif text-6xl md:text-8xl leading-tight mb-6 text-gray-900 dark:text-white">
              Lagos Eats.<br />
              <span className="text-primary italic">Different.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto md:mx-0">
              Real Nigerian flavours. Cooked fresh. Delivered hot — straight to your door or your event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/menu" className="bg-primary text-white px-8 py-4 rounded-md font-medium hover:shadow-lg hover:shadow-primary/30 transition-all text-center">See The Menu</Link>
              <a href="https://wa.me/2347017847124" className="border border-primary text-primary px-8 py-4 rounded-md font-medium hover:bg-primary hover:text-white transition-all text-center">Order on WhatsApp</a>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800" 
              alt="Delicious Food" 
              className="w-full max-w-lg aspect-square object-cover rounded-t-full rounded-br-full shadow-2xl shadow-primary/10" 
            />
          </div>
        </div>
      </section>

      <Ticker />

      <FadeIn className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-gray-900 dark:text-white">What Lagos Is Ordering</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Smoky Party Jollof & Grilled Chicken", price: "₦4,500", desc: "The one that started fights at the table", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
              { name: "Nkwobi (Spiced Cow Foot)", price: "₦3,200", desc: "Benin City's gift to Lagos", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
              { name: "Ofada Rice & Ayamase", price: "₦3,500", desc: "The OG Lagos Sunday plate", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" }
            ].map((dish, i) => (
              <div key={i} className="bg-surface-light dark:bg-surface-dark border border-borderc-light dark:border-borderc-dark rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all group">
                <div className="h-64 overflow-hidden">
                  <img src={dish.img} alt={dish.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2 text-gray-900 dark:text-white">{dish.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">{dish.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary font-bold text-lg">{dish.price}</span>
                    <a href="https://wa.me/2347017847124" className="bg-primary text-white px-4 py-2 rounded text-sm font-medium hover:bg-orange-600 transition-colors">Order</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn className="bg-surfaceAlt-light dark:bg-surfaceAlt-dark py-24 border-y border-borderc-light dark:border-borderc-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-16 text-gray-900 dark:text-white">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-serif text-2xl font-bold mb-6">1</div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Browse the menu</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-serif text-2xl font-bold mb-6">2</div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Tap Order on WhatsApp</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-serif text-2xl font-bold mb-6">3</div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">We cook fresh and deliver</h3>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-16 text-gray-900 dark:text-white">Why Lagos Trusts Us</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-surface-light dark:bg-surface-dark border border-borderc-light dark:border-borderc-dark p-8 rounded-xl flex flex-col items-center gap-3">
              <Flame className="text-primary w-8 h-8" />
              <span className="font-medium text-gray-900 dark:text-white">200+ Orders Delivered</span>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark border border-borderc-light dark:border-borderc-dark p-8 rounded-xl flex flex-col items-center gap-3">
              <Star className="text-secondary w-8 h-8" />
              <span className="font-medium text-gray-900 dark:text-white">4.9 Rating</span>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark border border-borderc-light dark:border-borderc-dark p-8 rounded-xl flex flex-col items-center gap-3">
              <Clock className="text-primary w-8 h-8" />
              <span className="font-medium text-gray-900 dark:text-white">45-min Average Delivery</span>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark border border-borderc-light dark:border-borderc-dark p-8 rounded-xl flex flex-col items-center gap-3">
              <Utensils className="text-secondary w-8 h-8" />
              <span className="font-medium text-gray-900 dark:text-white">Catered 50+ Events</span>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <section className="py-32 text-center relative">
          <div className="absolute inset-0 bg-black/80 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555244162-803834f87a33?w=1200')] bg-cover bg-center"></div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-white">
            <h2 className="font-serif text-5xl md:text-7xl mb-6">We Feed The Whole Owambe.</h2>
            <p className="text-xl text-gray-300 mb-10">Weddings. Birthdays. Corporate lunches. We handle the food — you enjoy the party.</p>
            <Link to="/catering" className="bg-primary text-white px-8 py-4 rounded-md font-medium hover:bg-orange-600 transition-colors">See Catering Packages</Link>
          </div>
        </section>
      </FadeIn>

      <FadeIn className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-gray-900 dark:text-white">What People Are Saying</h2>
          <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x">
            {reviews.map((rev, i) => (
              <div key={i} className="min-w-[320px] bg-surface-light dark:bg-surface-dark border border-borderc-light dark:border-borderc-dark p-8 rounded-xl snap-center">
                <div className="flex text-secondary mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                </div>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">"{rev.text}"</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">— {rev.author}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
export default Home;
`;

const menuJsx = `
import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { menuData } from '../data/menu';

function Menu() {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleOrder = (item) => {
    const text = \`Hello Lekki Flame Kitchen 👋\\n\\nI want to order: \${item.name} — ₦\${item.price}\\n\\nDelivery address: \\nDelivery time: \\nPayment: Transfer / Cash\`;
    const url = \`https://wa.me/2347017847124?text=\${encodeURIComponent(text)}\`;
    window.open(url, '_blank');
  };

  const scrollToCategory = (cat) => {
    setActiveCategory(cat);
    const element = document.getElementById(cat);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="pb-16">
      <header className="text-center py-20 px-4">
        <h1 className="font-serif text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white">What Are You Eating Today?</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Everything is cooked fresh. Tap any dish to order on WhatsApp.</p>
      </header>

      <div className="sticky top-20 z-40 bg-background-light dark:bg-background-dark border-b border-borderc-light dark:border-borderc-dark py-4 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar">
          <div className="flex gap-4 w-max">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={\`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-all \${activeCategory === cat ? 'bg-primary text-white' : 'bg-surfaceAlt-light dark:bg-surfaceAlt-dark text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}\`}
                onClick={() => scrollToCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        {categories.map((cat) => (
          <FadeIn key={cat}>
            <section id={cat} className="scroll-mt-40">
              <h2 className="font-serif text-4xl mb-10 text-secondary border-b border-borderc-light dark:border-borderc-dark pb-4">{cat}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuData[cat].map((item, i) => (
                  <div key={i} className="bg-surface-light dark:bg-surface-dark border border-borderc-light dark:border-borderc-dark rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all cursor-pointer group flex flex-col" onClick={() => handleOrder(item)}>
                    <img src={item.img} alt={item.name} loading="lazy" className="w-full h-56 object-cover" />
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-serif text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm flex-1">{item.desc}</p>
                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-secondary font-bold text-lg">₦{item.price.toLocaleString()}</span>
                        <button className="border border-primary text-primary px-4 py-2 rounded text-sm font-medium group-hover:bg-primary group-hover:text-white transition-colors">Order</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        ))}
      </div>

      <div className="mt-20 border-y border-borderc-light dark:border-borderc-dark bg-surfaceAlt-light dark:bg-surfaceAlt-dark py-6 text-center transition-colors duration-300">
        <p className="font-mono text-sm text-gray-600 dark:text-gray-400 px-4">Lagos Island · Lekki · VI · Ajah · Surulere · Yaba — ₦1,000 flat fee · Free delivery above ₦10,000</p>
      </div>
    </main>
  );
}
export default Menu;
`;

const cateringJsx = `
import React from 'react';
import FadeIn from '../components/FadeIn';

function Catering() {
  const handleEnquire = (pkg) => {
    const text = \`Hello Lekki Flame Kitchen 👋\\n\\nI want to enquire about the \${pkg} Catering Package.\\n\\nEvent Type: \\nDate: \\nGuest Count: \\nBudget:\`;
    const url = \`https://wa.me/2347017847124?text=\${encodeURIComponent(text)}\`;
    window.open(url, '_blank');
  };

  return (
    <main>
      <section className="relative py-32 text-center">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555244162-803834f87a33?w=1200')] bg-cover bg-center"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl text-white">We Feed Lagos in Style</h1>
        </div>
      </section>

      <FadeIn className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="bg-surface-light dark:bg-surface-dark border border-borderc-light dark:border-borderc-dark p-10 rounded-2xl text-center">
            <h2 className="font-serif text-3xl text-primary mb-2">Pepper Pot</h2>
            <p className="font-mono text-gray-500 dark:text-gray-400 mb-4">50–100 guests</p>
            <p className="text-2xl font-bold text-secondary mb-8">from ₦250,000</p>
            <ul className="text-left space-y-4 mb-10 text-gray-700 dark:text-gray-300">
              <li className="border-b border-borderc-light dark:border-borderc-dark pb-2">Jollof & Fried Rice</li>
              <li className="border-b border-borderc-light dark:border-borderc-dark pb-2">Grilled Chicken</li>
              <li className="border-b border-borderc-light dark:border-borderc-dark pb-2">Moi Moi</li>
              <li className="pb-2">Coleslaw</li>
            </ul>
            <button className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-orange-600 transition-colors" onClick={() => handleEnquire('Pepper Pot')}>Enquire on WhatsApp</button>
          </div>

          <div className="bg-surface-light dark:bg-surface-dark border-2 border-primary p-12 rounded-2xl text-center lg:scale-105 shadow-2xl shadow-primary/10">
            <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">Most Popular</div>
            <h2 className="font-serif text-4xl text-primary mb-2">Owambe</h2>
            <p className="font-mono text-gray-500 dark:text-gray-400 mb-4">100–200 guests</p>
            <p className="text-3xl font-bold text-secondary mb-8">from ₦450,000</p>
            <ul className="text-left space-y-4 mb-10 text-gray-700 dark:text-gray-300 font-medium">
              <li className="border-b border-borderc-light dark:border-borderc-dark pb-2">Jollof, Fried & Ofada Rice</li>
              <li className="border-b border-borderc-light dark:border-borderc-dark pb-2">Chicken & Assorted Meat</li>
              <li className="border-b border-borderc-light dark:border-borderc-dark pb-2">Amala & Ewedu/Gbegiri</li>
              <li className="pb-2">Small Chops Starter</li>
            </ul>
            <button className="w-full bg-primary text-white py-4 rounded-md font-medium hover:bg-orange-600 transition-colors" onClick={() => handleEnquire('Owambe')}>Enquire on WhatsApp</button>
          </div>

          <div className="bg-surface-light dark:bg-surface-dark border border-borderc-light dark:border-borderc-dark p-10 rounded-2xl text-center">
            <h2 className="font-serif text-3xl text-primary mb-2">Full Lagos</h2>
            <p className="font-mono text-gray-500 dark:text-gray-400 mb-4">200+ guests</p>
            <p className="text-2xl font-bold text-secondary mb-8">from ₦800,000</p>
            <ul className="text-left space-y-4 mb-10 text-gray-700 dark:text-gray-300">
              <li className="border-b border-borderc-light dark:border-borderc-dark pb-2">Full Custom Menu</li>
              <li className="border-b border-borderc-light dark:border-borderc-dark pb-2">Live Suya Stand</li>
              <li className="border-b border-borderc-light dark:border-borderc-dark pb-2">Drinks & Mocktails</li>
              <li className="pb-2">Premium Service Staff</li>
            </ul>
            <button className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-orange-600 transition-colors" onClick={() => handleEnquire('Full Lagos')}>Enquire on WhatsApp</button>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
export default Catering;
`;

const aboutJsx = `
import React from 'react';
import FadeIn from '../components/FadeIn';

function About() {
  return (
    <main className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="font-serif text-4xl md:text-6xl text-center mb-16 text-gray-900 dark:text-white leading-tight">We Cook Like Your Mum.<br/>We Deliver Like a Brand.</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 mb-10">
                Lekki Flame Kitchen was born because Lagos deserves better. Not reheated food. Not generic menus. Real Nigerian cooking — from scratch, with pride, delivered fast.
              </p>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Fresh Daily</h3>
                  <p className="text-gray-600 dark:text-gray-400">Everything is prepared the day you order it. No compromises.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">No Shortcuts</h3>
                  <p className="text-gray-600 dark:text-gray-400">Authentic recipes passed down, cooked with the best local ingredients.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Fast Delivery</h3>
                  <p className="text-gray-600 dark:text-gray-400">Hot food, on time, straight to your location in Lagos.</p>
                </div>
              </div>
              <p className="font-serif text-3xl italic text-secondary border-l-4 border-secondary pl-6">We are Lagos. We cook for Lagos.</p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 transform translate-x-4 translate-y-4 rounded-2xl z-0"></div>
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800" alt="Kitchen" className="rounded-2xl relative z-10 shadow-2xl" />
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
export default About;
`;

const contactJsx = `
import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = \`Hello! My name is \${formData.name}.\\nPhone: \${formData.phone}\\nMessage: \${formData.message}\`;
    const url = \`https://wa.me/2347017847124?text=\${encodeURIComponent(text)}\`;
    window.open(url, '_blank');
  };

  return (
    <main className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="font-serif text-5xl md:text-6xl text-center mb-16 text-gray-900 dark:text-white">Let's Talk Food.</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div className="space-y-12">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Phone</h3>
                  <a href="tel:+2347017847124" className="text-xl text-gray-900 dark:text-white hover:text-primary transition-colors">+234 701 784 7124</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">WhatsApp</h3>
                  <a href="https://wa.me/2347017847124" className="text-xl text-primary underline hover:text-orange-600 transition-colors">Message us right now</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Location</h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300">Lekki Phase 1, Lagos</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark border border-borderc-light dark:border-borderc-dark p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input type="text" required onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-background-light dark:bg-background-dark border border-borderc-light dark:border-borderc-dark rounded-md px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                  <input type="tel" required onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-background-light dark:bg-background-dark border border-borderc-light dark:border-borderc-dark rounded-md px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea rows="4" required onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-background-light dark:bg-background-dark border border-borderc-light dark:border-borderc-dark rounded-md px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white py-4 rounded-md font-medium hover:bg-orange-600 transition-colors flex justify-center items-center gap-2">
                  <MessageCircle size={20} /> Send on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
export default Contact;
`;


const writeMap = {
  'tailwind.config.js': tailwindConfig,
  'src/index.css': indexCss,
  'src/App.jsx': appJsx,
  'src/components/Navbar.jsx': navbarJsx,
  'src/components/Footer.jsx': footerJsx,
  'src/components/WhatsAppFab.jsx': whatsappFabJsx,
  'src/components/Ticker.jsx': tickerJsx,
  'src/components/FadeIn.jsx': fadeInJsx,
  'src/pages/Home.jsx': homeJsx,
  'src/pages/Menu.jsx': menuJsx,
  'src/pages/Catering.jsx': cateringJsx,
  'src/pages/About.jsx': aboutJsx,
  'src/pages/Contact.jsx': contactJsx,
};

for (const [filepath, content] of Object.entries(writeMap)) {
  fs.writeFileSync(path.join(__dirname, filepath), content.trim());
}
console.log('Successfully refactored to Tailwind CSS and Lucide React!');
