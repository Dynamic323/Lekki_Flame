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