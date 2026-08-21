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