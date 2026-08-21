import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello! My name is ${formData.name}.\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const url = `https://wa.me/2347017847124?text=${encodeURIComponent(text)}`;
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