const fs = require('fs');
const path = require('path');

const files = {
  'src/pages/Home.jsx': `
import React from 'react';
import { Link } from 'react-router-dom';
import Ticker from '../components/Ticker';
import FadeIn from '../components/FadeIn';
import styles from '../styles/Home.module.css';

function Home() {
  const reviews = [
    { text: "This jollof is a threat to my diet. Came hot to VI in under 40 mins.", author: "Tobi A., Victoria Island" },
    { text: "Ordered for 20 people at our Lekki office. Every plate was clean.", author: "Funke O., Lekki Phase 1" },
    { text: "The pepper soup is dangerous. I finished it before Netflix even loaded.", author: "Emeka D., Surulere" },
    { text: "Catered my wife's 40th in Ajah. Professional, punctual, food was elite.", author: "Biodun K., Ajah" }
  ];

  return (
    <main>
      <section className={styles.hero}>
        <div className={\`container \${styles.heroContainer}\`}>
          <div className={styles.heroContent}>
            <div className={styles.pill}>🔥 Lagos' Most Ordered Jollof</div>
            <h1 className={styles.title}>
              Lagos Eats.<br />
              <span className={styles.titleAccent}>Different.</span>
            </h1>
            <p className={styles.subtext}>Real Nigerian flavours. Cooked fresh. Delivered hot — straight to your door or your event.</p>
            <div className={styles.heroBtns}>
              <Link to="/menu" className="btn-primary">See The Menu</Link>
              <a href="https://wa.me/2347017847124" className="btn-outline">Order on WhatsApp</a>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800" alt="Delicious Food" className={styles.heroImage} />
          </div>
        </div>
      </section>

      <Ticker />

      <FadeIn>
        <section className={styles.bestSellers}>
          <div className="container">
            <h2>What Lagos Is Ordering</h2>
            <div className={styles.dishGrid}>
              {[
                { name: "Smoky Party Jollof & Grilled Chicken", price: "₦4,500", desc: "The one that started fights at the table", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
                { name: "Nkwobi (Spiced Cow Foot)", price: "₦3,200", desc: "Benin City's gift to Lagos", img: "/1499505922-a-plate-of-nkwobi.webp" },
                { name: "Ofada Rice & Ayamase", price: "₦3,500", desc: "The OG Lagos Sunday plate", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" }
              ].map((dish, i) => (
                <div key={i} className={styles.dishCard}>
                  <div className={styles.dishImgWrapper}>
                    <img src={dish.img} alt={dish.name} loading="lazy" />
                  </div>
                  <div className={styles.dishInfo}>
                    <h3>{dish.name}</h3>
                    <p>{dish.desc}</p>
                    <div className={styles.dishFooter}>
                      <span className={styles.price}>{dish.price}</span>
                      <a href="https://wa.me/2347017847124" className={styles.orderBtn}>Order</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className={styles.howItWorks}>
          <div className="container">
            <h2>How It Works</h2>
            <div className={styles.stepsGrid}>
              <div className={styles.step}>
                <div className={styles.stepNum}>1</div>
                <h3>Browse the menu</h3>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>2</div>
                <h3>Tap Order on WhatsApp</h3>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>3</div>
                <h3>We cook fresh and deliver</h3>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className={styles.whyUs}>
          <div className="container">
            <h2>Why Lagos Trusts Us</h2>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>🔥 200+ Orders Delivered</div>
              <div className={styles.statCard}>⭐ 4.9 Rating</div>
              <div className={styles.statCard}>🕐 45-min Average Delivery</div>
              <div className={styles.statCard}>🍽️ Catered 50+ Events</div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className={styles.cateringTeaser}>
          <div className="container">
            <h2>We Feed The Whole Owambe.</h2>
            <p>Weddings. Birthdays. Corporate lunches. We handle the food — you enjoy the party.</p>
            <Link to="/catering" className="btn-primary">See Catering Packages</Link>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className={styles.reviews}>
          <div className="container">
            <h2>What People Are Saying</h2>
            <div className={styles.carousel}>
              {reviews.map((rev, i) => (
                <div key={i} className={styles.reviewCard}>
                  <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                  <p className={styles.reviewText}>"{rev.text}"</p>
                  <p className={styles.reviewAuthor}>— {rev.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
export default Home;
`,
  'src/styles/Home.module.css': `
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 40px 0;
}
.heroContainer {
  display: flex;
  align-items: center;
  gap: 40px;
}
.heroContent {
  flex: 1;
}
.heroImageWrapper {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.heroImage {
  width: 100%;
  max-width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 50% 50% 0 50%;
  box-shadow: 0 20px 40px rgba(232, 87, 26, 0.15);
}
.pill {
  display: inline-block;
  background-color: var(--surface);
  color: var(--text-main);
  border: 1px solid var(--border-color);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 24px;
}
.title {
  font-size: 5rem;
  line-height: 1.1;
  margin-bottom: 24px;
}
.titleAccent {
  color: var(--primary);
  font-style: italic;
}
.subtext {
  font-size: 1.2rem;
  color: rgba(245, 240, 232, 0.8);
  margin-bottom: 40px;
  max-width: 80%;
}
.heroBtns {
  display: flex;
  gap: 20px;
}
.bestSellers {
  padding: 100px 0;
}
.bestSellers h2 {
  font-size: 3rem;
  margin-bottom: 60px;
  text-align: center;
}
.dishGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
.dishCard {
  background-color: var(--surface);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.dishCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(232, 87, 26, 0.15);
}
.dishImgWrapper {
  height: 250px;
  overflow: hidden;
}
.dishImgWrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}
.dishCard:hover .dishImgWrapper img {
  transform: scale(1.05);
}
.dishInfo {
  padding: 24px;
}
.dishInfo h3 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}
.dishInfo p {
  color: rgba(245, 240, 232, 0.6);
  margin-bottom: 20px;
  font-size: 0.95rem;
}
.dishFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  color: var(--secondary);
  font-weight: 700;
  font-size: 1.2rem;
}
.orderBtn {
  background-color: var(--primary);
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.9rem;
}
.howItWorks {
  background-color: #F5F0E8;
  color: var(--bg-color);
  padding: 100px 0;
  text-align: center;
}
.howItWorks h2 {
  font-size: 3rem;
  margin-bottom: 60px;
}
.stepsGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stepNum {
  width: 60px;
  height: 60px;
  background-color: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
}
.whyUs {
  padding: 100px 0;
  text-align: center;
}
.whyUs h2 {
  font-size: 3rem;
  margin-bottom: 60px;
}
.statsGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}
.statCard {
  background-color: var(--surface);
  padding: 30px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 500;
}
.cateringTeaser {
  padding: 120px 0;
  text-align: center;
  background: linear-gradient(rgba(10,10,10,0.8), rgba(10,10,10,0.8)), url('https://images.unsplash.com/photo-1555244162-803834f87a33?w=1200') center/cover;
}
.cateringTeaser h2 {
  font-size: 4rem;
  margin-bottom: 20px;
}
.cateringTeaser p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: rgba(245, 240, 232, 0.8);
}
.reviews {
  padding: 100px 0;
}
.reviews h2 {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 60px;
}
.carousel {
  display: flex;
  overflow-x: auto;
  gap: 24px;
  padding-bottom: 20px;
  scrollbar-width: none;
}
.carousel::-webkit-scrollbar {
  display: none;
}
.reviewCard {
  min-width: 300px;
  background-color: var(--surface);
  padding: 30px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}
.stars {
  margin-bottom: 15px;
}
.reviewText {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  font-style: italic;
}
.reviewAuthor {
  color: rgba(245, 240, 232, 0.6);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .heroContainer {
    flex-direction: column;
    text-align: center;
  }
  .title {
    font-size: 3.5rem;
  }
  .subtext {
    max-width: 100%;
  }
  .heroBtns {
    justify-content: center;
  }
  .heroImageWrapper {
    justify-content: center;
    margin-top: 40px;
  }
  .stepsGrid {
    grid-template-columns: 1fr;
  }
  .statsGrid {
    grid-template-columns: 1fr;
  }
}
`,
  'src/pages/Menu.jsx': `
import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { menuData } from '../data/menu';
import styles from '../styles/Menu.module.css';

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
    <main className={styles.menuPage}>
      <header className={styles.menuHeader}>
        <div className="container">
          <h1>What Are You Eating Today?</h1>
          <p>Everything is cooked fresh. Tap any dish to order on WhatsApp.</p>
        </div>
      </header>

      <div className={styles.stickyNav}>
        <div className="container">
          <div className={styles.tabBar}>
            {categories.map(cat => (
              <button 
                key={cat} 
                className={\`\${styles.tab} \${activeCategory === cat ? styles.activeTab : ''}\`}
                onClick={() => scrollToCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {categories.map((cat) => (
          <FadeIn key={cat}>
            <section id={cat} className={styles.categorySection}>
              <h2>{cat}</h2>
              <div className={styles.menuGrid}>
                {menuData[cat].map((item, i) => (
                  <div key={i} className={styles.menuCard} onClick={() => handleOrder(item)}>
                    <img src={item.img} alt={item.name} loading="lazy" />
                    <div className={styles.cardContent}>
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                      <div className={styles.cardBottom}>
                        <span className={styles.price}>₦{item.price.toLocaleString()}</span>
                        <button className={styles.orderBtn}>Order on WhatsApp</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        ))}
      </div>

      <div className={styles.deliveryBar}>
        <div className="container">
          <p>Lagos Island · Lekki · VI · Ajah · Surulere · Yaba — ₦1,000 flat fee · Free delivery above ₦10,000</p>
        </div>
      </div>
    </main>
  );
}
export default Menu;
`,
  'src/styles/Menu.module.css': `
.menuPage {
  padding-bottom: 60px;
}
.menuHeader {
  text-align: center;
  padding: 80px 0 40px;
}
.menuHeader h1 {
  font-size: 4rem;
  margin-bottom: 20px;
}
.menuHeader p {
  color: rgba(245, 240, 232, 0.7);
  font-size: 1.2rem;
}
.stickyNav {
  position: sticky;
  top: 70px;
  background-color: var(--bg-color);
  padding: 15px 0;
  z-index: 90;
  border-bottom: 1px solid var(--border-color);
}
.tabBar {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scrollbar-width: none;
}
.tabBar::-webkit-scrollbar { display: none; }
.tab {
  color: var(--text-main);
  opacity: 0.6;
  font-size: 1.1rem;
  white-space: nowrap;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s;
}
.tab:hover {
  opacity: 1;
}
.activeTab {
  opacity: 1;
  background-color: var(--surface);
  color: var(--primary);
}
.categorySection {
  padding: 60px 0;
}
.categorySection h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: var(--secondary);
}
.menuGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}
.menuCard {
  background-color: var(--surface);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}
.menuCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(232, 87, 26, 0.15);
}
.menuCard img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.cardContent {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.cardContent h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
}
.cardContent p {
  color: rgba(245, 240, 232, 0.6);
  font-size: 0.95rem;
  margin-bottom: 20px;
  flex: 1;
}
.cardBottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  color: var(--secondary);
  font-weight: 700;
  font-size: 1.2rem;
}
.orderBtn {
  color: var(--primary);
  font-weight: 500;
  font-size: 0.9rem;
  border: 1px solid var(--primary);
  padding: 6px 12px;
  border-radius: 4px;
  transition: all 0.3s;
}
.menuCard:hover .orderBtn {
  background-color: var(--primary);
  color: white;
}
.deliveryBar {
  background-color: var(--surface);
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  margin-top: 40px;
  color: rgba(245, 240, 232, 0.8);
  font-family: 'DM Mono', monospace;
  font-size: 0.9rem;
}
@media (max-width: 768px) {
  .menuHeader h1 { font-size: 2.5rem; }
}
`,
  'src/pages/Catering.jsx': `
import React from 'react';
import FadeIn from '../components/FadeIn';
import styles from '../styles/Catering.module.css';

function Catering() {
  const handleEnquire = (pkg) => {
    const text = \`Hello Lekki Flame Kitchen 👋\\n\\nI want to enquire about the \${pkg} Catering Package.\\n\\nEvent Type: \\nDate: \\nGuest Count: \\nBudget:\`;
    const url = \`https://wa.me/2347017847124?text=\${encodeURIComponent(text)}\`;
    window.open(url, '_blank');
  };

  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <h1>We Feed Lagos in Style</h1>
        </div>
      </section>

      <FadeIn>
        <section className={styles.packages}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.card}>
                <h2>Pepper Pot</h2>
                <p className={styles.guests}>50–100 guests</p>
                <p className={styles.price}>from ₦250,000</p>
                <ul className={styles.menuList}>
                  <li>Jollof & Fried Rice</li>
                  <li>Grilled Chicken</li>
                  <li>Moi Moi</li>
                  <li>Coleslaw</li>
                </ul>
                <button className="btn-primary" onClick={() => handleEnquire('Pepper Pot')}>Enquire on WhatsApp</button>
              </div>

              <div className={\`\${styles.card} \${styles.highlightCard}\`}>
                <h2>Owambe</h2>
                <p className={styles.guests}>100–200 guests</p>
                <p className={styles.price}>from ₦450,000</p>
                <ul className={styles.menuList}>
                  <li>Jollof, Fried & Ofada Rice</li>
                  <li>Chicken & Assorted Meat</li>
                  <li>Amala & Ewedu/Gbegiri</li>
                  <li>Small Chops Starter</li>
                </ul>
                <button className="btn-primary" onClick={() => handleEnquire('Owambe')}>Enquire on WhatsApp</button>
              </div>

              <div className={styles.card}>
                <h2>Full Lagos</h2>
                <p className={styles.guests}>200+ guests</p>
                <p className={styles.price}>from ₦800,000</p>
                <ul className={styles.menuList}>
                  <li>Full Custom Menu</li>
                  <li>Live Suya Stand</li>
                  <li>Drinks & Mocktails</li>
                  <li>Premium Service Staff</li>
                </ul>
                <button className="btn-primary" onClick={() => handleEnquire('Full Lagos')}>Enquire on WhatsApp</button>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
export default Catering;
`,
  'src/styles/Catering.module.css': `
.hero {
  padding: 100px 0;
  text-align: center;
  background: linear-gradient(rgba(10,10,10,0.7), rgba(10,10,10,0.7)), url('https://images.unsplash.com/photo-1555244162-803834f87a33?w=1200') center/cover;
}
.hero h1 {
  font-size: 4rem;
}
.packages {
  padding: 80px 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  align-items: center;
}
.card {
  background-color: var(--surface);
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--border-color);
}
.highlightCard {
  border: 1px solid var(--primary);
  transform: scale(1.05);
}
.card h2 {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 10px;
}
.guests {
  font-family: 'DM Mono', monospace;
  color: rgba(245, 240, 232, 0.7);
  margin-bottom: 15px;
}
.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--secondary);
  margin-bottom: 30px;
}
.menuList {
  list-style: none;
  margin-bottom: 30px;
  text-align: left;
}
.menuList li {
  padding: 10px 0;
  border-bottom: 1px solid var(--border-color);
}
.card button {
  width: 100%;
}
@media (max-width: 768px) {
  .highlightCard {
    transform: scale(1);
  }
}
`,
  'src/pages/About.jsx': `
import React from 'react';
import FadeIn from '../components/FadeIn';
import styles from '../styles/About.module.css';

function About() {
  return (
    <main className={styles.aboutPage}>
      <div className="container">
        <FadeIn>
          <h1 className={styles.title}>We Cook Like Your Mum.<br/>We Deliver Like a Brand.</h1>
          
          <div className={styles.content}>
            <div className={styles.text}>
              <p className={styles.story}>
                Lekki Flame Kitchen was born because Lagos deserves better. Not reheated food. Not generic menus. Real Nigerian cooking — from scratch, with pride, delivered fast.
              </p>
              
              <div className={styles.values}>
                <div className={styles.value}>
                  <h3>Fresh Daily</h3>
                  <p>Everything is prepared the day you order it. No compromises.</p>
                </div>
                <div className={styles.value}>
                  <h3>No Shortcuts</h3>
                  <p>Authentic recipes passed down, cooked with the best local ingredients.</p>
                </div>
                <div className={styles.value}>
                  <h3>Fast Delivery</h3>
                  <p>Hot food, on time, straight to your location in Lagos.</p>
                </div>
              </div>
              <p className={styles.localLine}>We are Lagos. We cook for Lagos.</p>
            </div>
            
            <div className={styles.image}>
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800" alt="Kitchen" />
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
export default About;
`,
  'src/styles/About.module.css': `
.aboutPage {
  padding: 80px 0;
}
.title {
  font-size: 4rem;
  margin-bottom: 60px;
  text-align: center;
}
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.story {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 40px;
  color: rgba(245, 240, 232, 0.9);
}
.values {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 40px;
}
.value h3 {
  color: var(--primary);
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.value p {
  color: rgba(245, 240, 232, 0.7);
}
.localLine {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-style: italic;
  color: var(--secondary);
}
.image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(232, 87, 26, 0.1);
}
@media (max-width: 768px) {
  .title { font-size: 2.5rem; }
  .content { grid-template-columns: 1fr; }
}
`,
  'src/pages/Contact.jsx': `
import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import styles from '../styles/Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = \`Hello! My name is \${formData.name}.\\nPhone: \${formData.phone}\\nMessage: \${formData.message}\`;
    const url = \`https://wa.me/2347017847124?text=\${encodeURIComponent(text)}\`;
    window.open(url, '_blank');
  };

  return (
    <main className={styles.contactPage}>
      <div className="container">
        <FadeIn>
          <h1 className={styles.title}>Let's Talk Food.</h1>
          
          <div className={styles.grid}>
            <div className={styles.info}>
              <div className={styles.infoBlock}>
                <h3>Phone</h3>
                <a href="tel:+2347017847124" className={styles.link}>+234 701 784 7124</a>
              </div>
              <div className={styles.infoBlock}>
                <h3>WhatsApp</h3>
                <a href="https://wa.me/2347017847124" className={styles.link}>Message us</a>
              </div>
              <div className={styles.infoBlock}>
                <h3>Location</h3>
                <p>Lekki Phase 1, Lagos</p>
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label>Name</label>
                <input type="text" required onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className={styles.inputGroup}>
                <label>Phone</label>
                <input type="tel" required onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div className={styles.inputGroup}>
                <label>Message</label>
                <textarea rows="4" required onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>
              <button type="submit" className="btn-primary">Send on WhatsApp</button>
            </form>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
export default Contact;
`,
  'src/styles/Contact.module.css': `
.contactPage {
  padding: 80px 0;
}
.title {
  font-size: 4rem;
  margin-bottom: 60px;
  text-align: center;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  max-width: 900px;
  margin: 0 auto;
}
.infoBlock {
  margin-bottom: 40px;
}
.infoBlock h3 {
  color: var(--secondary);
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.link {
  font-size: 1.2rem;
  color: var(--primary);
  text-decoration: underline;
}
.form {
  background-color: var(--surface);
  padding: 40px;
  border-radius: 12px;
}
.inputGroup {
  margin-bottom: 20px;
}
.inputGroup label {
  display: block;
  margin-bottom: 8px;
  color: rgba(245, 240, 232, 0.8);
}
.inputGroup input, .inputGroup textarea {
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-color);
  color: var(--text-main);
  font-family: inherit;
}
.form button {
  width: 100%;
}
@media (max-width: 768px) {
  .title { font-size: 2.5rem; }
  .grid { grid-template-columns: 1fr; }
}
`
};

for (const [filepath, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(__dirname, filepath), content.trim());
}
console.log('Pages generated successfully.');
