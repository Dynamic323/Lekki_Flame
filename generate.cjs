const fs = require('fs');
const path = require('path');

const files = {
  'src/index.css': `
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,400;500;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap');

:root {
  --bg-color: #0A0A0A;
  --primary: #E8571A;
  --secondary: #D4A017;
  --text-main: #F5F0E8;
  --surface: #141414;
  --border-color: rgba(255, 255, 255, 0.06);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-color);
  color: var(--text-main);
  font-family: 'DM Sans', sans-serif;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
}

.mono {
  font-family: 'DM Mono', monospace;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  border: none;
  background: none;
}

.btn-primary {
  background-color: var(--primary);
  color: var(--text-main);
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 500;
  transition: box-shadow 0.3s ease;
}

.btn-primary:hover {
  box-shadow: 0 4px 15px rgba(232, 87, 26, 0.4);
}

.btn-outline {
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background-color: var(--primary);
  color: var(--text-main);
  box-shadow: 0 4px 15px rgba(232, 87, 26, 0.4);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Animations */
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
`,
  'src/App.jsx': `
import React from 'react';
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
  return (
    <Router>
      <Navbar />
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
`,
  'src/main.jsx': `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`,
  'src/components/Navbar.jsx': `
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navInner}>
          <Link to="/" className={styles.logo}>Lekki Flame</Link>
          <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/catering">Catering</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
`,
  'src/styles/Navbar.module.css': `
.navbar {
  padding: 20px 0;
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  background-color: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  z-index: 100;
}
.navInner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
}
.links {
  display: flex;
  gap: 20px;
}
.links a {
  font-weight: 500;
  transition: color 0.3s;
}
.links a:hover {
  color: var(--primary);
}
`,
  'src/components/Footer.jsx': `
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={\`container \${styles.footerGrid}\`}>
        <div>
          <h3 className={styles.logo}>Lekki Flame</h3>
          <p className={styles.tagline}>Feeding Lagos Since 2021</p>
        </div>
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <Link to="/menu">Menu</Link>
          <Link to="/catering">Catering</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div className={styles.contact}>
          <h4>Contact</h4>
          <p>Lekki Phase 1, Lagos</p>
          <p>+234 701 784 7124</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
`,
  'src/styles/Footer.module.css': `
.footer {
  background-color: var(--surface);
  padding: 60px 0 40px;
  border-top: 1px solid var(--border-color);
  margin-top: 60px;
}
.footerGrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}
.logo {
  color: var(--primary);
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.tagline {
  color: rgba(245, 240, 232, 0.7);
}
.links h4, .contact h4 {
  margin-bottom: 15px;
  color: var(--secondary);
}
.links a {
  display: block;
  margin-bottom: 8px;
  color: rgba(245, 240, 232, 0.7);
}
.links a:hover {
  color: var(--primary);
}
.contact p {
  margin-bottom: 8px;
  color: rgba(245, 240, 232, 0.7);
}
@media (max-width: 768px) {
  .footerGrid {
    grid-template-columns: 1fr;
  }
}
`,
  'src/components/WhatsAppFab.jsx': `
import React from 'react';
import styles from '../styles/WhatsAppFab.module.css';

function WhatsAppFab() {
  return (
    <a 
      href="https://wa.me/2347017847124" 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.fab}
    >
      <div className={styles.pulse}></div>
      <span className={styles.icon}>💬</span>
    </a>
  );
}
export default WhatsAppFab;
`,
  'src/styles/WhatsAppFab.module.css': `
.fab {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}
.icon {
  font-size: 24px;
  position: relative;
  z-index: 2;
}
.pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #25D366;
  border-radius: 50%;
  z-index: 1;
  animation: pulseAnim 2s infinite;
}
@keyframes pulseAnim {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.5); opacity: 0; }
}
`,
  'src/components/Ticker.jsx': `
import React from 'react';
import styles from '../styles/Ticker.module.css';

function Ticker() {
  const text = "JOLLOF · SUYA · PEPPER SOUP · OWAMBE CATERING · FRESH DAILY · ORDER ON WHATSAPP · ";
  return (
    <div className={styles.tickerWrap}>
      <div className={styles.ticker}>
        <div className={styles.tickerItem}>{text}</div>
        <div className={styles.tickerItem}>{text}</div>
      </div>
    </div>
  );
}
export default Ticker;
`,
  'src/styles/Ticker.module.css': `
.tickerWrap {
  width: 100%;
  overflow: hidden;
  background-color: var(--primary);
  color: white;
  padding: 15px 0;
  white-space: nowrap;
}
.ticker {
  display: inline-block;
  animation: tickerScroll 20s linear infinite;
}
.tickerItem {
  display: inline-block;
  padding-right: 50px;
  font-family: 'DM Mono', monospace;
  font-weight: 500;
  letter-spacing: 1px;
}
@keyframes tickerScroll {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}
`,
  'src/components/FadeIn.jsx': `
import React, { useEffect, useRef, useState } from 'react';

function FadeIn({ children }) {
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
      className={\`fade-in-section \${isVisible ? 'is-visible' : ''}\`}
      ref={domRef}
    >
      {children}
    </div>
  );
}
export default FadeIn;
`
};

for (const [filepath, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(__dirname, filepath), content.trim());
}
console.log('Files generated successfully.');
