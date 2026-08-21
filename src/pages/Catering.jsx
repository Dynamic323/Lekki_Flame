import React from 'react';
import FadeIn from '../components/FadeIn';

function Catering() {
  const handleEnquire = (pkg) => {
    const text = `Hello Lekki Flame Kitchen 👋\n\nI want to enquire about the ${pkg} Catering Package.\n\nEvent Type: \nDate: \nGuest Count: \nBudget:`;
    const url = `https://wa.me/2347017847124?text=${encodeURIComponent(text)}`;
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