import { useState, useEffect } from 'react';
import { 
  Calendar, ArrowRight, ArrowLeft, Gift, 
  PhoneCall, MessageCircle, 
  Armchair, ConciergeBell, Flower2, CalendarDays, HeartHandshake,
  PawPrint, Wind, CookingPot, CircleParking, Zap,
  Leaf, Globe, Heart, Sprout,
  Mail, MapPin,
  Tent, Coffee, Sun, Sparkles, Camera, Key,
  Phone, MailOpen, Navigation,
  Images, X, ChevronLeft, ChevronRight, Home
} from 'lucide-react';
import indoorAcImg from './assets/facilities/Indoor AC Hall.png';
import indoorDiningImg from './assets/facilities/Indoor Dining.png';
import miniLoungeImg from './assets/facilities/Mini Lounge.png';
import outdoorBuffetImg from './assets/facilities/Outdoor Buffet Lounge.png';
import outdoorLoungeImg from './assets/facilities/Outdoor Lounge.png';
import parkingImg from './assets/facilities/Parking.png';
import photographySpotsImg from './assets/facilities/Photography Spots.png';
import heroBg1 from './assets/herobgset/bg1.png';
import heroBg3 from './assets/herobgset/bg3.png';
import heroBg4 from './assets/herobgset/bg4.png';
import heroBg5 from './assets/herobgset/bg5.png';
import heroBg6 from './assets/herobgset/bg6.png';
import heroBg7 from './assets/herobgset/bg7.png';
import heroBg8 from './assets/herobgset/bg8.png';
import heroBg10 from './assets/herobgset/bg10.png';
import heroBg11 from './assets/herobgset/bg11.png';
import heroBg12 from './assets/herobgset/bg12.png';
import heroImg from './assets/herobgset/image.png';
import heroImgCopy from './assets/herobgset/image copy.png';
import heroImgCopy2 from './assets/herobgset/image copy 2.png';
import heroImgCopy3 from './assets/herobgset/image copy 3.png';
import heroImgCopy4 from './assets/herobgset/image copy 4.png';
import heroImgCopy5 from './assets/herobgset/image copy 5.png';

const heroImages = [
  heroBg1,
  heroBg3,
  heroBg4,
  heroBg5,
  heroBg6,
  heroBg7,
  heroBg8,
  heroBg10,
  heroBg11,
  heroBg12,
  heroImg,
  heroImgCopy,
  heroImgCopy2,
  heroImgCopy3,
  heroImgCopy4,
  heroImgCopy5,
];

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




const galleryItems = heroImages.map((img, idx) => ({
  src: img,
  category: 'hall',
  title: `Hero Image ${idx + 1}`
}));

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

const occasions = [
  { title: "Wedding", shortDesc: "Celebrate your big day in a magical setting.", image: weddingImg, Icon: WeddingIcon,
    popupDesc: "Your dream wedding deserves a dream venue. Our grand hall transforms into a breathtaking celebration space with elegant decor, premium lighting, and world-class amenities. From traditional ceremonies to modern receptions, every detail is curated to perfection.",
    features: ["Grand Stage Setup", "500+ Guest Capacity", "Bridal Suite Available", "Custom Decor Themes", "Premium Sound & Lighting", "Valet Parking"] },
  { title: "Engagement", shortDesc: "Mark the beginning of forever with elegance.", image: engagementImg, Icon: EngagementIcon,
    popupDesc: "Begin your journey of togetherness in a venue that radiates love and elegance. Our beautifully decorated spaces set the perfect tone for your engagement ceremony, with intimate seating, floral arrangements, and stunning backdrops for timeless photos.",
    features: ["Elegant Stage Decor", "Ring Ceremony Setup", "Photo Backdrop Walls", "Intimate Seating", "Floral Arrangements", "Custom Lighting"] },
  { title: "Birthday", shortDesc: "Make birthdays extra special with grand celebrations.", image: birthdayImg, Icon: BirthdayIcon,
    popupDesc: "Whether it's a milestone birthday or an intimate gathering, our versatile spaces transform into the ultimate party zone. From themed decorations to live entertainment areas, we make every birthday a grand affair to remember.",
    features: ["Theme Decorations", "Cake & Dessert Counter", "DJ & Music Setup", "Kids Play Area", "Balloon Decor", "Photography Corners"] },
  { title: "Haldi", shortDesc: "Vibrant haldi ceremonies full of laughter and joy.", image: haldiImg, Icon: HaldiIcon,
    popupDesc: "Embrace the vibrant tradition of Haldi in our beautifully curated outdoor and indoor spaces. With waterproof setups, colorful decor, and ample space for dancing and celebrations, your Haldi ceremony will be nothing short of spectacular.",
    features: ["Outdoor Garden Setup", "Waterproof Arrangements", "Traditional Decor", "Music & Dance Floor", "Colorful Floral Decor", "Photo Zones"] },
  { title: "Mehendi", shortDesc: "Vibrant mehendi events to cherish.", image: mehendiImg, Icon: MehendiIcon,
    popupDesc: "Host a mesmerizing Mehendi function in our lush garden spaces or elegant indoor lounges. With comfortable seating, ambient lighting, and beautiful Rajasthani-inspired decor, your Mehendi evening will be filled with fun, music, and memories.",
    features: ["Bohemian Decor Theme", "Comfortable Floor Seating", "Ambient String Lights", "Mehendi Artist Space", "Music & Dance Setup", "Snack Counters"] },
  { title: "Puberty Function\n(Half Saree)", shortDesc: "Traditional celebrations with grace.", image: pubertyImg, Icon: DressIcon,
    popupDesc: "Celebrate this beautiful milestone with traditional grandeur in our elegantly decorated hall. We offer customized stage setups, traditional decor themes, and a warm ambiance that honors the cultural significance of this special occasion.",
    features: ["Traditional Stage Setup", "Floral Decorations", "Cultural Decor Themes", "Guest Seating Layout", "Photo & Video Zones", "Catering Services"] },
  { title: "Corporate Events", shortDesc: "Professional spaces for meetings, conferences & more.", image: corporateImg, Icon: CorporateIcon,
    popupDesc: "Elevate your corporate events with our state-of-the-art facilities. From boardroom meetings to large-scale conferences and team-building activities, our venue offers professional infrastructure with a touch of premium hospitality.",
    features: ["Projector & AV Setup", "Conference Seating", "Wi-Fi Enabled", "Breakout Rooms", "Refreshment Service", "Ample Parking"] },
  { title: "Get Together", shortDesc: "Perfect place for reunions and social gatherings.", image: gettogetherImg, Icon: GatheringIcon,
    popupDesc: "Reconnect with loved ones in a warm and welcoming environment. Our versatile spaces are perfect for family reunions, alumni meets, community gatherings, and social celebrations of every kind.",
    features: ["Flexible Layouts", "Indoor & Outdoor Options", "Buffet & Dining Setup", "Music System", "Garden Access", "Kid-Friendly Spaces"] }
];

const marqueeFeatures = [
  { icon: Armchair, title: "LUXURIOUS SPACES", desc: "Beautifully designed venues for grand celebrations." },
  { icon: ConciergeBell, title: "PREMIUM CATERING", desc: "Exquisite menus crafted by expert chefs." },
  { icon: Flower2, title: "BESPOKE DECOR", desc: "Custom themes that bring your vision to life." },
  { icon: CalendarDays, title: "SEAMLESS PLANNING", desc: "End-to-end planning for a stress-free experience." },
  { icon: HeartHandshake, title: "MEMORABLE EXPERIENCES", desc: "Creating moments you'll cherish forever." },
  { icon: Leaf, title: "NATURE FRIENDLY", desc: "Lush green surroundings and eco-conscious venue operations." },
  { icon: PawPrint, title: "PET FRIENDLY", desc: "Welcoming environment for your beloved furry companions." },
  { icon: Wind, title: "GREEN OXYGEN", desc: "We contribute one lakh oxygen per day." },
  { icon: Globe, title: "ENVIRONMENT ARCHITECTURE", desc: "Sustainable architectural design harmonized with nature." },
  { icon: Armchair, title: "PREMIUM OUTDOOR LOUNGE", desc: "Luxurious open-air seating for all your functions." },
  { icon: CircleParking, title: "AMPLE PARKING", desc: "Ample parking space for 25 cars and 500+ bikes." }
];

const facilities = [
  { icon: Wind, title: "Indoor AC Hall", desc: "500+ Seating", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600&auto=format&fit=crop",
    popupImage: indoorAcImg,
    popupDesc: "Our grand Indoor AC Hall is a masterpiece of elegance, featuring state-of-the-art climate control and luxurious interiors. Perfect for weddings, receptions, and large-scale celebrations with comfortable seating for over 500 guests.",
    highlights: ["Centralized AC", "500+ Seating Capacity", "Premium Sound System", "Stage & Lighting"] },
  { icon: Tent, title: "Outdoor Lounge", desc: "Mini Open Hall", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=600&auto=format&fit=crop",
    popupImage: outdoorLoungeImg,
    popupDesc: "An enchanting open-air lounge surrounded by lush greenery, perfect for intimate pre-wedding ceremonies, cocktail parties, and evening celebrations under the stars.",
    highlights: ["Open Air Setup", "Garden View", "Ambient Lighting", "Flexible Layout"] },
  { icon: Coffee, title: "Indoor Dining", desc: "Leaf Serve 200pack", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop",
    popupImage: indoorDiningImg,
    popupDesc: "A sophisticated indoor dining area designed for traditional leaf-serve meals. Accommodates up to 200 guests with comfortable seating and an elegant ambiance that complements every feast.",
    highlights: ["200 Pax Capacity", "Traditional Leaf Serve", "AC Dining", "Hygienic Setup"] },
  { icon: Sun, title: "Outdoor Buffet Lounge", desc: "400 pax", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=600&auto=format&fit=crop",
    popupImage: outdoorBuffetImg,
    popupDesc: "A spacious outdoor buffet lounge capable of serving 400 guests at once. Beautifully designed with dedicated buffet counters, live cooking stations, and ample space for a grand dining experience.",
    highlights: ["400 Pax Capacity", "Live Cooking Stations", "Buffet Counters", "Scenic Ambiance"] },
  { icon: CircleParking, title: "Parking", desc: "350 Cars + 500 Bikes", image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=600&auto=format&fit=crop",
    popupImage: parkingImg,
    popupDesc: "Expansive parking facilities ensuring a hassle-free experience for all your guests. Our well-organized parking area can accommodate 350 cars and 500 bikes with dedicated security.",
    highlights: ["350 Car Slots", "500 Bike Slots", "24/7 Security", "Well-Lit Area"] },
  { icon: Zap, title: "Power Backup", desc: "24x7 Generator", image: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=600&auto=format&fit=crop",
    popupImage: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1200&auto=format&fit=crop",
    popupDesc: "Never worry about power interruptions during your event. Our robust 24x7 generator backup ensures uninterrupted electricity supply for lighting, sound systems, and all event equipment.",
    highlights: ["24x7 Availability", "Full Load Backup", "Auto Switchover", "Zero Downtime"] },
  { icon: Sparkles, title: "Mini Lounge", desc: "70 members", image: miniLoungeImg,
    popupImage: miniLoungeImg,
    popupDesc: "An intimate and stylish mini lounge perfect for smaller gatherings, family functions, and private celebrations. Accommodates up to 70 members with a cozy and premium atmosphere.",
    highlights: ["70 Pax Capacity", "Cozy Interiors", "Private Setting", "Premium Decor"] },
  { icon: Key, title: "Guest Rooms", desc: "4 Individual rooms + 2 dormitory rooms + Total Occupancy 28 no's", image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=600&auto=format&fit=crop",
    popupImage: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop",
    popupDesc: "Comfortable and well-furnished guest rooms for your family and VIP guests. Featuring 4 individual rooms and 2 dormitory rooms with a total occupancy of 28 persons, complete with modern amenities.",
    highlights: ["4 Individual Rooms", "2 Dormitory Rooms", "28 Total Occupancy", "Modern Amenities"] },
  { icon: Camera, title: "Photography Spots", desc: "Lush Green Backdrop", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
    popupImage: photographySpotsImg,
    popupDesc: "Capture your most precious moments at our stunning photography spots. Featuring lush green backdrops, scenic garden pathways, and beautifully curated corners designed for picture-perfect memories.",
    highlights: ["Lush Green Backdrop", "Scenic Garden Paths", "Golden Hour Spots", "Instagrammable Corners"] },
  { icon: CookingPot, title: "Kitchen", desc: "Catering equipements", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop",
    popupImage: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop",
    popupDesc: "A fully equipped commercial kitchen with all the catering equipment your caterers need. Spacious prep areas, industrial burners, and modern facilities to prepare a grand feast for any occasion.",
    highlights: ["Industrial Equipment", "Spacious Prep Area", "Gas & Electric Setup", "Hygienic Standards"] }
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [facilityPopup, setFacilityPopup] = useState(null);
  const [eventPopup, setEventPopup] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('landing');

  const filteredGalleryItems = galleryItems.filter(item => 
    galleryFilter === 'all' || item.category === galleryFilter
  );

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => 
      prev === 0 ? filteredGalleryItems.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => 
      prev === filteredGalleryItems.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isGalleryOpen) return;
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else {
          setIsGalleryOpen(false);
        }
      } else if (e.key === 'ArrowLeft' && lightboxIndex !== null) {
        setLightboxIndex(prev => prev === 0 ? filteredGalleryItems.length - 1 : prev - 1);
      } else if (e.key === 'ArrowRight' && lightboxIndex !== null) {
        setLightboxIndex(prev => prev === filteredGalleryItems.length - 1 ? 0 : prev + 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen, lightboxIndex, filteredGalleryItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentPage !== 'landing') return;

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
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (currentPage !== 'landing') return;
      const sections = ['home', 'facilities', 'nature', 'occasions', 'contact'];
      const scrollPosition = window.scrollY + 220; // offset for the navbar height plus margins

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  return (
    <div className="app-container">
      {currentPage === 'landing' ? (
        <>
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
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>HOME</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); window.scrollTo(0, 0); }} className={currentPage === 'about' ? 'active' : ''}>ABOUT</a>
          <a href="#facilities" className={activeSection === 'facilities' ? 'active' : ''}>FACILITIES</a>
          <a href="#nature" className={activeSection === 'nature' ? 'active' : ''}>NATURE</a>
          <a href="#occasions" className={activeSection === 'occasions' ? 'active' : ''}>OCCASIONS</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>CONTACT</a>
        </nav>

        <div className="nav-actions">
          
          <button 
            className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Drawer Overlay */}
      {isMenuOpen && (
        <div 
          className="drawer-overlay" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Drawer Menu */}
      <div className={`drawer ${isMenuOpen ? 'open' : ''}`} role="navigation">
        <nav className="drawer-links">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>HOME</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); setIsMenuOpen(false); window.scrollTo(0, 0); }} className={currentPage === 'about' ? 'active' : ''}>ABOUT</a>
          <a href="#facilities" className={activeSection === 'facilities' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>FACILITIES</a>
          <a href="#nature" className={activeSection === 'nature' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>NATURE</a>
          <a href="#occasions" className={activeSection === 'occasions' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>OCCASIONS</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>CONTACT</a>
        </nav>
      </div>

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
              <span className="subtitle">Destination Wedding Hall</span>
            </div>
            
            <h1 className="main-title">
              Celebrate Your <br />
              Forever <span className="gold-text">Moments</span>
            </h1>
            
            <p className="description">
              Step into a world of elegance and luxury. Our stunning venues and exceptional services make every celebration truly unforgettable.
            </p>
            
            <div className="action-buttons">
              <a href="#occasions" className="btn-primary">
                EXPLORE EVENTS <ArrowRight size={18} />
              </a>
              <button className="btn-secondary" onClick={() => setIsModalOpen(true)}>
                VIEW PACKAGES <Gift size={18} />
              </button>
            </div>
          </div>

          {/* Right side floating elements */}
          <div className="hero-right reveal reveal-right">
            <div className="vertical-sidebar">

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
        <div className="features-strip reveal reveal-up active-reveal">
          <div className="marquee-track">
            <div className="marquee-group">
              {marqueeFeatures.map((feat, index) => {
                const IconComponent = feat.icon;
                return (
                  <div key={`feat-1-${index}`} className="feature-card">
                    <div className="feature-icon">
                      <IconComponent size={24} color="#C89B7B" strokeWidth={1.5} />
                    </div>
                    <div className="feature-content">
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="marquee-group" aria-hidden="true">
              {marqueeFeatures.map((feat, index) => {
                const IconComponent = feat.icon;
                return (
                  <div key={`feat-2-${index}`} className="feature-card">
                    <div className="feature-icon">
                      <IconComponent size={24} color="#C89B7B" strokeWidth={1.5} />
                    </div>
                    <div className="feature-content">
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
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
              <div className="facility-card" key={index} onClick={() => setFacilityPopup(index)}>
                <div className="fc-image-container">
                  <img src={facility.image} alt={facility.title} className="fc-image" loading="lazy" />
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

      {/* Facility Popup Modal */}
      {facilityPopup !== null && (() => {
        const facility = facilities[facilityPopup];
        const FacIcon = facility.icon;
        const whatsappMsg = encodeURIComponent(`Hi! I'm interested in knowing more about your "${facility.title}" facility. Could you share more details?`);
        return (
          <div className="facility-popup-overlay" onClick={() => setFacilityPopup(null)}>
            <div className="facility-popup-card" onClick={(e) => e.stopPropagation()}>
              <button className="facility-popup-close" onClick={() => setFacilityPopup(null)}>
                <X size={20} />
              </button>
              <div className="facility-popup-image-wrapper">
                <img src={facility.popupImage} alt={facility.title} className="facility-popup-image" />
                <div className="facility-popup-image-overlay"></div>
                <div className="facility-popup-image-badge">
                  <FacIcon size={18} />
                  <span>{facility.title}</span>
                </div>
              </div>
              <div className="facility-popup-body">
                <h3 className="facility-popup-title">{facility.title}</h3>
                <p className="facility-popup-subtitle">{facility.desc}</p>
                <p className="facility-popup-desc">{facility.popupDesc}</p>
                <div className="facility-popup-highlights">
                  {facility.highlights.map((item, i) => (
                    <span className="facility-popup-tag" key={i}>
                      <Sparkles size={12} />
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/919655501679?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facility-popup-whatsapp-btn"
                >
                  <MessageCircle size={18} />
                  <span>Enquire on WhatsApp</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        );
      })()}

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
              <span className="nature-count">We Contribute</span>
              <span className="nature-sub">1 Lakh Oxygen / Day</span>
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
                Our plantation ecosystem contributes approximately <span className="nature-desc-highlight">1 lakh litres of fresh oxygen</span> every day, offering your guests a refreshing and unforgettable wedding experience.
              </p>
            </div>
          </div>

          {/* Right Image + Stats */}
          <div className="nature-right">
            <div className="nature-circle-container reveal reveal-zoom">
              <div className="nature-circle-wrapper">
                <img src={bambooGazebo} alt="Bamboo Garden Gazebo" className="nature-circle-img" loading="lazy" />
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
                <h4>1 Lakh L</h4>
                <p className="n-stat-label">Oxygen / Day</p>
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
          {occasions.map((occ, index) => {
            const OccIcon = occ.Icon;
            return (
              <div className="occasion-card reveal reveal-up" key={index} onClick={() => setEventPopup(index)}>
                <div className="oc-image-container">
                  <img src={occ.image} alt={occ.title} className="oc-image" loading="lazy" />
                  <div className="oc-icon-badge">
                    <OccIcon />
                  </div>
                </div>
                <div className="oc-content">
                  <h3>{occ.title.includes('\n') ? occ.title.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br/>}</span>) : occ.title}</h3>
                  <p>{occ.shortDesc}</p>
                  <div className="oc-divider"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Event Popup Modal */}
        {eventPopup !== null && (() => {
          const occ = occasions[eventPopup];
          const OccIcon = occ.Icon;
          const whatsappMsg = encodeURIComponent(`Hi! I'd like to book your venue for a "${occ.title.replace('\n', ' ')}" event. Could you share availability and pricing details?`);
          return (
            <div className="event-popup-overlay" onClick={() => setEventPopup(null)}>
              <div className="event-popup-card" onClick={(e) => e.stopPropagation()}>
                <button className="event-popup-close" onClick={() => setEventPopup(null)}>
                  <X size={20} />
                </button>
                <div className="event-popup-image-wrapper">
                  <img src={occ.image} alt={occ.title} className="event-popup-image" />
                  <div className="event-popup-image-overlay"></div>
                  <div className="event-popup-image-badge">
                    <OccIcon />
                    <span>{occ.title.replace('\n', ' ')}</span>
                  </div>
                </div>
                <div className="event-popup-body">
                  <h3 className="event-popup-title">{occ.title.replace('\n', ' ')}</h3>
                  <p className="event-popup-short">{occ.shortDesc}</p>
                  <p className="event-popup-desc">{occ.popupDesc}</p>
                  <div className="event-popup-features">
                    {occ.features.map((feat, i) => (
                      <span className="event-popup-feature-tag" key={i}>
                        <Sparkles size={12} />
                        {feat}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/919655501679?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-popup-book-btn"
                  >
                    <Calendar size={18} />
                    <span>Book Now via WhatsApp</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          );
        })()}


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
                  <a href="tel:+919655501679" className="c-val">+91 96555 01679</a>
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
                <a href="https://wa.me/919655501679" className="social-link" aria-label="WhatsApp">
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
                  <div className="contact-icon-circle">
                    <Phone size={15} />
                  </div>
                  <a href="tel:+919655501679">+91 96555 01679</a>
                </li>
                <li>
                  <div className="contact-icon-circle">
                    <MailOpen size={15} />
                  </div>
                  <a href="mailto:info@aaravweddinghall.com">info@aaravweddinghall.com</a>
                </li>
                <li className="address-li">
                  <div className="contact-icon-circle">
                    <Navigation size={15} strokeWidth={2} />
                  </div>
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

      {/* Sticky Bottom Navigation Bar for Mobile */}
      <div className="mobile-bottom-nav">
        <a 
          href="#home" 
          className={`bottom-nav-item ${activeSection === 'home' ? 'active' : ''}`}
        >
          <Home size={20} />
          <span>Home</span>
        </a>
        <a 
          href="#facilities" 
          className={`bottom-nav-item ${(activeSection === 'facilities' || activeSection === 'nature') ? 'active' : ''}`}
        >
          <ConciergeBell size={20} />
          <span>Facilities</span>
        </a>
        <a 
          href="#occasions" 
          className={`bottom-nav-item ${activeSection === 'occasions' ? 'active' : ''}`}
        >
          <Calendar size={20} />
          <span>Events</span>
        </a>
        <button 
          onClick={() => { setIsGalleryOpen(true); setGalleryFilter('all'); }}
          className={`bottom-nav-item ${isGalleryOpen ? 'active' : ''}`}
        >
          <Images size={20} />
          <span>Gallery</span>
        </button>
        <a 
          href="#contact" 
          className={`bottom-nav-item ${activeSection === 'contact' ? 'active' : ''}`}
        >
          <Phone size={20} />
          <span>Contact</span>
        </a>
      </div>
      </>
      ) : (
        <div className="about-page-view">
          {/* About Page Header */}
          <header className="about-page-header">
            <div className="logo-container">
              <div className="logo-icon">
                <span className="logo-w">A</span>
              </div>
              <div className="logo-text">
                <h2>AARAV WEDDING HALL</h2>
                <p>CELEBRATE ELEGANCE</p>
              </div>
            </div>
            <button 
              onClick={() => { setCurrentPage('landing'); window.scrollTo(0, 0); }} 
              className="btn-back-home"
            >
              <ArrowLeft size={18} /> BACK TO HOME
            </button>
          </header>

          {/* About Page Banner */}
          <section className="about-page-banner">
            <div className="about-page-banner-bg" style={{ backgroundImage: `url(${heroBg4})` }}></div>
            <div className="about-page-banner-overlay"></div>
            <div className="about-page-banner-content">
              <span className="subtitle-badge">WELCOME TO AARAV</span>
              <h1>Our Story & Essence</h1>
              <p>Coimbatore's premium nature & eco-friendly event venue</p>
            </div>
          </section>

          {/* About Page Content */}
          <section className="about-page-content">
            <div className="about-page-container">
              <div className="about-page-left">
                <h2>Where Elegance Meets Nature</h2>
                <div className="about-ornament"></div>
                <blockquote className="about-page-quote">
                  "Where nature becomes part of your celebration. Surrounded by lush greenery and sustainability at its heart, our destination wedding venue offers a timeless setting where luxury and environmental responsibility exist in perfect harmony."
                </blockquote>
                <p className="highlight-text">
                  Designed with nature, not against it.
                </p>
                <p>
                  Our destination wedding hall integrates green landscapes, sustainable architecture, and eco-friendly practices to provide a breathtaking venue where every celebration honors both love and the planet.
                </p>
                <p>
                  Our venue stands as a symbol of conscious luxury—a place where love is celebrated, nature is honored, and unforgettable moments are created in perfect harmony with the environment. We are committed to a future where elegance and sustainability walk hand in hand.
                </p>
              </div>
              <div className="about-page-right">
                <div className="about-page-features-list">
                  <div className="about-page-feature">
                    <div className="feature-icon-wrapper">
                      <Leaf size={24} />
                    </div>
                    <div className="feature-text-wrapper">
                      <h3>Eco-Friendly Venue</h3>
                      <p>Surrounded by 500+ bamboo trees providing fresh oxygen-rich air naturally.</p>
                    </div>
                  </div>
                  
                  <div className="about-page-feature">
                    <div className="feature-icon-wrapper">
                      <Armchair size={24} />
                    </div>
                    <div className="feature-text-wrapper">
                      <h3>Luxurious Indoor AC Hall</h3>
                      <p>State-of-the-art centralized climate control with seating for 500+ guests.</p>
                    </div>
                  </div>

                  <div className="about-page-feature">
                    <div className="feature-icon-wrapper">
                      <CircleParking size={24} />
                    </div>
                    <div className="feature-text-wrapper">
                      <h3>Ample Safe Parking</h3>
                      <p>Dedicated secured space accommodating up to 350 cars and 500+ bikes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Page Nature Details */}
          <section className="about-page-nature-details">
            <div className="about-page-nature-container">
              <div className="about-page-nature-image">
                <img src={bambooGazebo} alt="Bamboo Garden" className="nature-img" />
              </div>
              <div className="about-page-nature-content">
                <span className="nature-badge-small">ECO VENUE PHILOSOPHY</span>
                <h2>A Breath of Fresh Air for Your Guests</h2>
                <p>
                  Our plantation ecosystem contributes approximately 1 lakh litres of fresh oxygen every day. The lush bamboo gazebos and beautifully landscaped gardens offer the perfect backdrop for photos and a cooling breeze that naturally enriches the atmosphere.
                </p>
                <div className="nature-stats-small">
                  <div className="stat-box">
                    <h4>500+</h4>
                    <p>Bamboo Trees</p>
                  </div>
                  <div className="stat-box">
                    <h4>1 Lakh Litres</h4>
                    <p>Oxygen / Day</p>
                  </div>
                  <div className="stat-box">
                    <h4>100%</h4>
                    <p>Eco-Friendly</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back Button Footer Action */}
          <div className="about-page-footer-action">
            <button 
              onClick={() => { setCurrentPage('landing'); window.scrollTo(0, 0); }} 
              className="btn-back-home-large"
            >
              <ArrowLeft size={18} /> BACK TO HOME PAGE
            </button>
          </div>

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
                  <p className="footer-brand-desc">
                    Experience weddings and grand occasions in Coimbatore's premium nature-friendly venue, offering luxurious AC hall and open outdoor lounges.
                  </p>
                  <div className="footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <FacebookIcon />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <InstagramIcon />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                      <YoutubeIcon />
                    </a>
                  </div>
                </div>

                {/* Quick Links Column */}
                <div className="footer-col">
                  <h4>QUICK LINKS</h4>
                  <ul>
                    <li><a href="#home" onClick={(e) => { e.preventDefault(); setCurrentPage('landing'); setTimeout(() => { const el = document.getElementById('home'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 50); }}>Home</a></li>
                    <li><a href="#about" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>About Us</a></li>
                    <li><a href="#facilities" onClick={(e) => { e.preventDefault(); setCurrentPage('landing'); setTimeout(() => { const el = document.getElementById('facilities'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 50); }}>Facilities</a></li>
                    <li><a href="#nature" onClick={(e) => { e.preventDefault(); setCurrentPage('landing'); setTimeout(() => { const el = document.getElementById('nature'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 50); }}>Oxygen Paradise</a></li>
                    <li><a href="#occasions" onClick={(e) => { e.preventDefault(); setCurrentPage('landing'); setTimeout(() => { const el = document.getElementById('occasions'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 50); }}>Occasions</a></li>
                    <li><a href="#contact" onClick={(e) => { e.preventDefault(); setCurrentPage('landing'); setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 50); }}>Contact</a></li>
                  </ul>
                </div>

                {/* Occasions Column */}
                <div className="footer-col">
                  <h4>CELEBRATIONS</h4>
                  <ul>
                    <li><a href="#occasions" onClick={(e) => { e.preventDefault(); setCurrentPage('landing'); setTimeout(() => { const el = document.getElementById('occasions'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 50); }}>Weddings</a></li>
                    <li><a href="#occasions" onClick={(e) => { e.preventDefault(); setCurrentPage('landing'); setTimeout(() => { const el = document.getElementById('occasions'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 50); }}>Engagements</a></li>
                    <li><a href="#occasions" onClick={(e) => { e.preventDefault(); setCurrentPage('landing'); setTimeout(() => { const el = document.getElementById('occasions'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 50); }}>Birthday Parties</a></li>
                    <li><a href="#occasions" onClick={(e) => { e.preventDefault(); setCurrentPage('landing'); setTimeout(() => { const el = document.getElementById('occasions'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 50); }}>Haldi & Mehendi</a></li>
                    <li><a href="#occasions" onClick={(e) => { e.preventDefault(); setCurrentPage('landing'); setTimeout(() => { const el = document.getElementById('occasions'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 50); }}>Corporate Events</a></li>
                  </ul>
                </div>

                {/* Contact Column */}
                <div className="footer-col contact-col">
                  <h4>CONTACT US</h4>
                  <ul className="footer-contact-info">
                    <li>
                      <div className="contact-icon-circle">
                        <Phone size={14} />
                      </div>
                      <a href="tel:+919655501679">+91 96555 01679</a>
                    </li>
                    <li>
                      <div className="contact-icon-circle">
                        <MailOpen size={14} />
                      </div>
                      <a href="mailto:info@aaravweddinghall.com">info@aaravweddinghall.com</a>
                    </li>
                    <li className="address-li">
                      <div className="contact-icon-circle">
                        <Navigation size={15} strokeWidth={2} />
                      </div>
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
      )}
    </div>
  );
}

export default App;
