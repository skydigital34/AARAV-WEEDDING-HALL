import React, { useState, useEffect } from 'react';
import { 
  Calendar, Menu, ArrowRight, Users, Building, 
  Award, Briefcase, PhoneCall, MessageCircle, Play, 
  Armchair, ConciergeBell, Flower2, CalendarDays, HeartHandshake,
  TreePine, PawPrint, Home, Wind, UtensilsCrossed, CookingPot, Sun, CircleParking, BedDouble, Zap,
  CarFront, ShieldCheck, Leaf, Droplets, Globe, Heart, CloudSun, Sprout,
  Mail, MapPin
} from 'lucide-react';
import heroBg1 from './assets/herobgset/bg1.png';
import heroBg2 from './assets/herobgset/bg2.png';
import heroBg3 from './assets/herobgset/bg3.png';
import heroBg4 from './assets/herobgset/bg4.png';
import heroBg5 from './assets/herobgset/bg5.png';
import heroBg6 from './assets/herobgset/bg6.png';
import heroBg7 from './assets/herobgset/bg7.png';
import heroBg8 from './assets/herobgset/bg8.png';
import heroBg9 from './assets/herobgset/bg9.png';
import heroBg10 from './assets/herobgset/bg10.png';
import heroBg11 from './assets/herobgset/bg11.png';
import bambooGazebo from './assets/bamboo_gazebo.png';
import weddingImg from './assets/occasions/wedding.png';
import engagementImg from './assets/occasions/engagement.png';
import birthdayImg from './assets/occasions/birthday.png';
import haldiImg from './assets/occasions/haldi.png';
import mehendiImg from './assets/occasions/mehendi.png';
import pubertyImg from './assets/occasions/puberty.png';
import corporateImg from './assets/occasions/corporate.png';
import gettogetherImg from './assets/occasions/gettogether.png';
import './index.css';

const heroImages = [
  heroBg1, heroBg2, heroBg3, heroBg4, heroBg5,
  heroBg6, heroBg7, heroBg8, heroBg9, heroBg10, heroBg11
];

const BambooIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22V2M8 17h1M8 12h1M8 7h1" />
    <path d="M8 15c2-1 3-3 3-5" />
    <path d="M8 9c1.5-0.5 2-2 2-3" />
    <path d="M14 22V6M14 18h1M14 13h1M14 8h1" />
    <path d="M14 15c2-1 3.5-2 3.5-4" />
    <path d="M14 10c1.5-0.5 2.5-1.5 2.5-3.5" />
  </svg>
);

const O2Icon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.48 0-.96.06-1.4.17A5.5 5.5 0 0 0 4 13.5a3.5 3.5 0 0 0 3.5 3.5" />
    <text x="8" y="17" fontSize="5.5" fontWeight="bold" fill="currentColor" stroke="none">O₂</text>
  </svg>
);

const WeddingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="12" r="5" />
    <circle cx="16" cy="12" r="5" />
  </svg>
);

const EngagementIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="14" r="5" />
    <path d="M12 9L9 6h6L12 9z" />
  </svg>
);

const BirthdayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="9" rx="2" />
    <rect x="6" y="6" width="12" height="5" rx="1" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="11" x2="12" y2="20" />
    <line x1="3" y1="15" x2="21" y2="15" />
  </svg>
);

const HaldiIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 11h16c.6 0 1 .4 1 1a9 9 0 0 1-18 0c0-.6.4-1 1-1z" />
    <path d="M12 5a3 3 0 0 1 3 3v3H9V8a3 3 0 0 1 3-3z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

const MehendiIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 11V6a2 2 0 0 0-4 0v5m-2-3V4a2 2 0 0 0-4 0v7m-2-1V7a2 2 0 0 0-4 0v9c0 4.4 3.6 8 8 8s8-3.6 8-8v-3" />
  </svg>
);

const DressIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12l3 6-4 2v10H7V11L3 9z" />
  </svg>
);

const CorporateIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const GatheringIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2" />
    <circle cx="11" cy="8" r="3" />
    <path d="M23 21v-2a3 3 0 0 0-3-3m-3.5 0a3.5 3.5 0 0 0 0-6" />
  </svg>
);

const facilities = [
  { icon: TreePine, title: "Nature Friendly", desc: "Lush green surroundings for a serene and refreshing celebration.", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop" },
  { icon: PawPrint, title: "Pet Friendly", desc: "Your pets are welcome to be a part of your special moments.", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop" },
  { icon: Home, title: "Spacious Hall", desc: "Grand and elegant halls designed for your dream celebrations.", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=600&auto=format&fit=crop" },
  { icon: Wind, title: "Indoor AC Hall", desc: "Fully air-conditioned halls with 500+ seating capacity.", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600&auto=format&fit=crop" },
  { icon: UtensilsCrossed, title: "Indoor Dining", desc: "Delicious dining experience with a luxurious ambience.", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop" },
  { icon: CookingPot, title: "Kitchen", desc: "Hygienic and fully equipped kitchen for exceptional catering.", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop" },
  { icon: Sun, title: "Outdoor Hall", desc: "Beautiful open-air spaces perfect for magical evening events.", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=600&auto=format&fit=crop" },
  { icon: CircleParking, title: "Parking", desc: "Ample parking space for 25 cars and 500+ bikes (up to 1000).", image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=600&auto=format&fit=crop" },
  { icon: BedDouble, title: "Guest Rooms", desc: "Comfortable stay with 10 premium AC guest rooms.", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600&auto=format&fit=crop" },
  { icon: Zap, title: "Power Backup", desc: "24x7 power backup with 24x7 generator support.", image: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=600&auto=format&fit=crop" }
];

function CountUp({ end, duration = 2000, suffix = "+" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

function App() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active-reveal');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="navbar">
        <div className="logo-container">
          <div className="logo-icon">
            <span className="logo-w">A</span>
          </div>
          <div className="logo-text">
            <h2>AARAV WEDDING HALL</h2>
            <p>CELEBRATE ELEGANCE</p>
          </div>
        </div>
        
        <nav className="nav-links">
          <a href="#home" className="active">HOME</a>
          <a href="#facilities">FACILITIES</a>
          <a href="#nature">NATURE</a>
          <a href="#occasions">OCCASIONS</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <div className="nav-actions">
          <button className="btn-tour-nav">
            BOOK A TOUR <Calendar size={14} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg-wrapper">
          {heroImages.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`Background ${idx + 1}`} 
              className={`hero-bg-img ${idx === currentBg ? 'active' : ''}`} 
            />
          ))}
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content-wrapper">
          <div className="hero-left reveal reveal-left">
            <div className="subtitle-wrap">
              <span className="line"></span>
              <span className="subtitle">WHERE DREAMS COME TRUE</span>
            </div>
            
            <h1 className="main-title">
              Celebrate Your <br />
              Forever <span className="gold-text">Moments</span>
            </h1>
            
            <p className="description">
              Step into a world of elegance and luxury. Our stunning venues and exceptional services make every celebration truly unforgettable.
            </p>
            
            <div className="action-buttons">
              <button className="btn-primary">
                EXPLORE VENUES <ArrowRight size={18} />
              </button>
            </div>

            <div className="stats-container">
              <div className="stat-item">
                <Users size={26} className="stat-icon" />
                <div className="stat-text">
                  <h3><CountUp end={500} /></h3>
                  <p>Happy Couples</p>
                </div>
              </div>
              <div className="stat-item">
                <Building size={26} className="stat-icon" />
                <div className="stat-text">
                  <h3><CountUp end={10} /></h3>
                  <p>Premium Venues</p>
                </div>
              </div>
              <div className="stat-item">
                <Award size={26} className="stat-icon" />
                <div className="stat-text">
                  <h3><CountUp end={15} /></h3>
                  <p>Years of Experience</p>
                </div>
              </div>
              <div className="stat-item">
                <Briefcase size={26} className="stat-icon" />
                <div className="stat-text">
                  <h3><CountUp end={50} /></h3>
                  <p>Expert Team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side floating elements */}
          <div className="hero-right reveal reveal-right">
            <div className="vertical-sidebar">
              <div className="sidebar-item">
                <Calendar size={18} />
                <span>BOOK A TOUR</span>
              </div>
              <div className="sidebar-item">
                <PhoneCall size={18} />
                <span>CALL NOW</span>
              </div>
              <div className="sidebar-item">
                <MessageCircle size={18} />
                <span>WHATSAPP</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium Facilities Section */}
      <section id="facilities" className="facilities">
        {/* Features Strip */}
        <div className="features-strip reveal reveal-up">
          <div className="feature-card">
            <div className="feature-icon"><Armchair size={24} color="#C89B7B" strokeWidth={1.5} /></div>
            <div className="feature-content">
              <h4>LUXURIOUS SPACES</h4>
              <p>Beautifully designed venues for grand celebrations.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><ConciergeBell size={24} color="#C89B7B" strokeWidth={1.5} /></div>
            <div className="feature-content">
              <h4>PREMIUM CATERING</h4>
              <p>Exquisite menus crafted by expert chefs.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Flower2 size={24} color="#C89B7B" strokeWidth={1.5} /></div>
            <div className="feature-content">
              <h4>BESPOKE DECOR</h4>
              <p>Custom themes that bring your vision to life.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><CalendarDays size={24} color="#C89B7B" strokeWidth={1.5} /></div>
            <div className="feature-content">
              <h4>SEAMLESS PLANNING</h4>
              <p>End-to-end planning for a stress-free experience.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><HeartHandshake size={24} color="#C89B7B" strokeWidth={1.5} /></div>
            <div className="feature-content">
              <h4>MEMORABLE EXPERIENCES</h4>
              <p>Creating moments you'll cherish forever.</p>
            </div>
          </div>
        </div>
        <div className="section-header reveal reveal-up">
          <div className="subtitle-container">
            <span className="subtitle">WORLD-CLASS AMENITIES</span>
            <div className="ornament"></div>
          </div>
          <h2>Premium Facilities</h2>
          <p className="section-desc">Experience unmatched luxury with our world-class amenities<br/>designed to make your celebration extraordinary</p>
        </div>
        
        <div className="facilities-grid">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <div className="facility-card reveal reveal-up" key={index}>
                <div className="fc-image-container">
                  <img src={facility.image} alt={facility.title} className="fc-image" />
                </div>
                <div className="fc-content-wrapper">
                  <div className="fc-icon">
                    <IconComponent size={20} strokeWidth={2} />
                  </div>
                  <div className="fc-content">
                    <h3>{facility.title}</h3>
                    <p>{facility.desc}</p>
                  </div>
                  <button className="fc-arrow-btn">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Nature Section */}
      <section id="nature" className="nature-section">
        <div className="nature-overlay"></div>
        <div className="nature-light-rays"></div>
        <div className="nature-particles">
          <span className="n-leaf">🍃</span>
          <span className="n-leaf">🌿</span>
          <span className="n-leaf">🍃</span>
          <span className="n-leaf">🌿</span>
          <span className="n-leaf">🍃</span>
          <span className="n-leaf">🌿</span>
        </div>

        <div className="nature-main">
          {/* Left Text Content */}
          <div className="nature-left reveal reveal-left">
            <span className="nature-badge">
              <Leaf size={14} />
              NATURE'S GREATEST GIFT
            </span>
            <h2 className="nature-title">
              <span className="nature-count"><CountUp end={500} duration={3} />++</span>
              <span className="nature-sub">Bamboo Trees</span>
            </h2>
            <div className="nature-title-separator">
              <span className="ns-line"></span>
              <Leaf size={10} className="ns-icon" />
              <span className="ns-line"></span>
            </div>
            <h3 className="nature-tagline">
              Creating A Natural<br />
              <span className="nature-highlight">Oxygen Paradise</span>
            </h3>
            <div className="nature-leaf-divider">
              <Leaf size={14} className="n-leaf-divider-icon" />
            </div>
            <div className="nature-desc-block">
              <p className="nature-desc">
                Experience celebrations surrounded by lush greenery and over <span className="nature-desc-highlight">500 bamboo trees</span> that naturally enrich the atmosphere.
              </p>
              <p className="nature-desc">
                Our plantation ecosystem contributes approximately <span className="nature-desc-highlight">1 lakh litre oxygen</span> per day, offering your guests a refreshing and unforgettable wedding experience.
              </p>
            </div>
          </div>

          {/* Right Image + Stats */}
          <div className="nature-right">
            <div className="nature-circle-container reveal reveal-zoom">
              <div className="nature-circle-wrapper">
                <img src={bambooGazebo} alt="Bamboo Garden Gazebo" className="nature-circle-img" />
                <div className="nature-circle-badge">
                  <Leaf size={12} className="badge-leaf-top" />
                  <span>Breathe</span>
                  <span>Pure, Celebrate</span>
                  <em>Naturally</em>
                  <Leaf size={12} className="badge-leaf-bot" />
                </div>
              </div>
            </div>
            <div className="nature-stats">
              <div className="n-stat reveal reveal-up">
                <div className="n-stat-icon"><BambooIcon /></div>
                <h4><CountUp end={500} duration={3} />++</h4>
                <p className="n-stat-label">Bamboo Trees</p>
                <p className="n-stat-desc">Naturally enriching our environment</p>
              </div>
              <div className="n-stat reveal reveal-up">
                <div className="n-stat-icon"><O2Icon /></div>
                <h4>1 Lakh Litre</h4>
                <p className="n-stat-label">Oxygen / Per Day</p>
                <p className="n-stat-desc">Fresh oxygen for a healthier tomorrow</p>
              </div>
              <div className="n-stat reveal reveal-up">
                <div className="n-stat-icon"><Leaf size={28} strokeWidth={1.5} /></div>
                <h4><CountUp end={100} duration={3} suffix="%" /></h4>
                <p className="n-stat-label">Eco-Friendly</p>
                <p className="n-stat-desc">Committed to a greener planet</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Green Bar */}
        <div className="nature-bottom-bar reveal reveal-up">
          <div className="nbb-left">
            <div className="nbb-icon-circle">
              <Sprout size={16} />
            </div>
            <span>A Greener Celebration for a Better Tomorrow</span>
          </div>
          <span className="nbb-divider">|</span>
          <div className="nbb-right">
            <div className="nbb-tag"><Wind size={16} /> Cleaner Air</div>
            <div className="nbb-tag"><Globe size={16} /> Sustainable Future</div>
            <div className="nbb-tag"><Heart size={16} /> Happier Planet</div>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section id="occasions" className="occasions-section">
        <div className="section-header reveal reveal-up">
          <div className="subtitle-container">
            <span className="subtitle">EVENTS</span>
            <div className="ornament"></div>
          </div>
          <h2>Celebrate Your <span className="gold-italic">Occasions</span></h2>
          <p className="section-desc">From intimate gatherings to grand celebrations, we make every occasion unforgettable.</p>
        </div>

        <div className="occasions-grid">
          <div className="occasion-card reveal reveal-up">
            <div className="oc-image-container">
              <img src={weddingImg} alt="Wedding" className="oc-image" />
              <div className="oc-icon-badge">
                <WeddingIcon />
              </div>
            </div>
            <div className="oc-content">
              <h3>Wedding</h3>
              <p>Celebrate your big day in a magical setting.</p>
              <div className="oc-divider"></div>
            </div>
          </div>

          <div className="occasion-card reveal reveal-up">
            <div className="oc-image-container">
              <img src={engagementImg} alt="Engagement" className="oc-image" />
              <div className="oc-icon-badge">
                <EngagementIcon />
              </div>
            </div>
            <div className="oc-content">
              <h3>Engagement</h3>
              <p>Mark the beginning of forever with elegance.</p>
              <div className="oc-divider"></div>
            </div>
          </div>

          <div className="occasion-card reveal reveal-up">
            <div className="oc-image-container">
              <img src={birthdayImg} alt="Birthday" className="oc-image" />
              <div className="oc-icon-badge">
                <BirthdayIcon />
              </div>
            </div>
            <div className="oc-content">
              <h3>Birthday</h3>
              <p>Make birthdays extra special with grand celebrations.</p>
              <div className="oc-divider"></div>
            </div>
          </div>

          <div className="occasion-card reveal reveal-up">
            <div className="oc-image-container">
              <img src={haldiImg} alt="Haldi" className="oc-image" />
              <div className="oc-icon-badge">
                <HaldiIcon />
              </div>
            </div>
            <div className="oc-content">
              <h3>Haldi</h3>
              <p>Vibrant haldi ceremonies full of laughter and joy.</p>
              <div className="oc-divider"></div>
            </div>
          </div>

          <div className="occasion-card reveal reveal-up">
            <div className="oc-image-container">
              <img src={mehendiImg} alt="Mehendi" className="oc-image" />
              <div className="oc-icon-badge">
                <MehendiIcon />
              </div>
            </div>
            <div className="oc-content">
              <h3>Mehendi</h3>
              <p>Vibrant mehendi events to cherish.</p>
              <div className="oc-divider"></div>
            </div>
          </div>

          <div className="occasion-card reveal reveal-up">
            <div className="oc-image-container">
              <img src={pubertyImg} alt="Puberty Function (Half Saree)" className="oc-image" />
              <div className="oc-icon-badge">
                <DressIcon />
              </div>
            </div>
            <div className="oc-content">
              <h3>Puberty Function<br/>(Half Saree)</h3>
              <p>Traditional celebrations with grace.</p>
              <div className="oc-divider"></div>
            </div>
          </div>

          <div className="occasion-card reveal reveal-up">
            <div className="oc-image-container">
              <img src={corporateImg} alt="Corporate Events" className="oc-image" />
              <div className="oc-icon-badge">
                <CorporateIcon />
              </div>
            </div>
            <div className="oc-content">
              <h3>Corporate Events</h3>
              <p>Professional spaces for meetings, conferences & more.</p>
              <div className="oc-divider"></div>
            </div>
          </div>

          <div className="occasion-card reveal reveal-up">
            <div className="oc-image-container">
              <img src={gettogetherImg} alt="Get Together" className="oc-image" />
              <div className="oc-icon-badge">
                <GatheringIcon />
              </div>
            </div>
            <div className="oc-content">
              <h3>Get Together</h3>
              <p>Perfect place for reunions and social gatherings.</p>
              <div className="oc-divider"></div>
            </div>
          </div>
        </div>

        {/* Planning Capsule Bar */}
        <div className="planning-capsule-bar reveal reveal-zoom">
          <div className="pcb-left">
            <div className="pcb-icon-circle">
              <Calendar size={18} />
            </div>
            <div className="pcb-text">
              <h4>Planning Something Special?</h4>
              <p>Our team is here to help you create memories that last a lifetime.</p>
            </div>
          </div>
          <button className="pcb-button">
            BOOK A TOUR <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* Left Info Column */}
          <div className="contact-info reveal reveal-left">
            <span className="contact-subtitle">CONTACT US <span className="sub-line">—</span></span>
            <h2 className="contact-title">
              We'd Love to Hear <br />
              <span className="gold-italic">From You</span>
            </h2>
            <p className="contact-desc">
              Have questions or want to book our hall? Get in touch with us today!
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="c-icon-circle">
                  <PhoneCall size={18} />
                </div>
                <div className="c-text">
                  <span className="c-label">CALL US</span>
                  <a href="tel:+919688433666" className="c-val">+91 96884 33666</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="c-icon-circle">
                  <Mail size={18} />
                </div>
                <div className="c-text">
                  <span className="c-label">EMAIL US</span>
                  <a href="mailto:info@aaravweddinghall.com" className="c-val">info@aaravweddinghall.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="c-icon-circle">
                  <MapPin size={18} />
                </div>
                <div className="c-text">
                  <span className="c-label">VISIT US</span>
                  <p className="c-val address">
                    8/24, Pudhu Thottam, Ramasamy Nagar Extension,<br />
                    Urumandampalayam, Gounder Mills,<br />
                    Coimbatore - 641029
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-card reveal reveal-right">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required className="form-input" />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" required className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <input type="email" placeholder="Your Email" required className="form-input" />
              </div>

              <div className="form-group">
                <select required className="form-select">
                  <option value="" disabled selected hidden>Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="engagement">Engagement</option>
                  <option value="birthday">Birthday</option>
                  <option value="haldi">Haldi</option>
                  <option value="mehendi">Mehendi</option>
                  <option value="puberty">Puberty Function (Half Saree)</option>
                  <option value="corporate">Corporate Events</option>
                  <option value="gettogether">Get Together</option>
                </select>
              </div>

              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required className="form-textarea"></textarea>
              </div>

              <button type="submit" className="btn-send-message">
                SEND MESSAGE <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="advanced-footer">
        <div className="footer-top">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-col brand-col">
              <div className="footer-logo">
                <div className="logo-icon-circle">
                  <span>A</span>
                </div>
                <div className="logo-text-wrapper">
                  <h3>AARAV WEDDING HALL</h3>
                  <p>CELEBRATE ELEGANCE</p>
                </div>
              </div>
              <p className="brand-desc">
                Experience celebrations surrounded by lush greenery and fresh air. Our plantation ecosystem contributes fresh oxygen daily, creating an exquisite setting for your unforgettable moments.
              </p>
              <div className="footer-socials">
                <a href="#" className="social-link" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <YoutubeIcon />
                </a>
                <a href="https://wa.me/919688433666" className="social-link" aria-label="WhatsApp">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col links-col">
              <h4>QUICK LINKS</h4>
              <div className="col-line"></div>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#facilities">Facilities</a></li>
                <li><a href="#nature">Nature</a></li>
                <li><a href="#occasions">Occasions</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Venues Column */}
            <div className="footer-col links-col">
              <h4>OUR SPACES</h4>
              <div className="col-line"></div>
              <ul>
                <li><a href="#venues">Indoor AC Hall</a></li>
                <li><a href="#venues">Outdoor Garden Hall</a></li>
                <li><a href="#venues">Spacious Dining Hall</a></li>
                <li><a href="#venues">Bamboo Garden Gazebo</a></li>
                <li><a href="#venues">Premium AC Guest Rooms</a></li>
                <li><a href="#venues">Ample Parking Area</a></li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="footer-col contact-col">
              <h4>GET IN TOUCH</h4>
              <div className="col-line"></div>
              <ul className="footer-contact-info">
                <li>
                  <PhoneCall size={16} className="fc-icon" />
                  <a href="tel:+919688433666">+91 96884 33666</a>
                </li>
                <li>
                  <Mail size={16} className="fc-icon" />
                  <a href="mailto:info@aaravweddinghall.com">info@aaravweddinghall.com</a>
                </li>
                <li>
                  <MapPin size={16} className="fc-icon" />
                  <p>
                    8/24, Pudhu Thottam, Ramasamy Nagar Extension,<br />
                    Urumandampalayam, Gounder Mills,<br />
                    Coimbatore - 641029
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Aarav Wedding Hall. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span className="dot-divider">&middot;</span>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
