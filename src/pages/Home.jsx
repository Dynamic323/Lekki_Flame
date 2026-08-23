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
              { name: "Smoky Party Jollof & Grilled Chicken", price: "₦4,500", desc: "The one that started fights at the table", img: "/smook.webp" },
              { name: "Nkwobi (Spiced Cow Foot)", price: "₦3,200", desc: "Benin City's gift to Lagos", img: "/1499505922-a-plate-of-nkwobi.webp" },
              { name: "Ofada Rice & Ayamase", price: "₦3,500", desc: "The OG Lagos Sunday plate", img: "/ofada-rice-1-standard.webp" }
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