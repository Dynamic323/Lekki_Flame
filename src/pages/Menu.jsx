import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { menuData } from '../data/menu';

function Menu() {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleOrder = (item) => {
    const text = `Hello Lekki Flame Kitchen 👋\n\nI want to order: ${item.name} — ₦${item.price}\n\nDelivery address: \nDelivery time: \nPayment: Transfer / Cash`;
    const url = `https://wa.me/2347017847124?text=${encodeURIComponent(text)}`;
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
                className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-primary text-white' : 'bg-surfaceAlt-light dark:bg-surfaceAlt-dark text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
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