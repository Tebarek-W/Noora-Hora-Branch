import React, { useState, useEffect } from 'react';

import {
  Waves,
  Leaf,
  Home,
  Utensils,
  Sparkles,
  Globe,
  MapPin,
  Calendar,
  Phone,
  Wifi,
  Wind,
  Tv,
  Users,
  Sprout,
  Zap,
  Recycle,
  Train,
  Car,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './components/ui/Reveal';
import Footer from './components/ui/Footer';
import logoSrc from './assets/nooralogo.png';
import heroBg from './assets/Hero.jpg';
import exteriorImg from './assets/Resort Exterior.jpg';
import interiorImg from './assets/Interior.jpg';
import lakeViewImg from './assets/Lake view.JPG';
import space1 from './assets/Space1.jpg';
import space2 from './assets/Space2.jpg';
import space3 from './assets/Space3.jpg';
import space4 from './assets/Space4.jpg';
import diningImg from './assets/Dining.jpg';
import cinemaImg from './assets/cinema.jpg';
import centerImg from './assets/center.jpg';
import sustainabilityImg from './assets/Environment.jpg';








const App = () => {
  const allImages = [
    heroBg,
    exteriorImg,
    interiorImg,
    lakeViewImg,
    space1,
    space2,
    space3,
    space4,
    diningImg,
    cinemaImg,
    centerImg,
    sustainabilityImg
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [allImages.length]);

  return (

    <div className="bg-taupe-50 min-h-screen font-jost overflow-x-hidden w-full">
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />
        </div>

        <Reveal animation="fade-up" delay={0} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 mb-8">
            <img 
              src={logoSrc} 
              alt="Noora Logo" 
              className="h-16 md:h-20 lg:h-24 object-contain brightness-0 invert transform translate-y-2" 
            />
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-jost text-white leading-none uppercase tracking-[0.3em] -ml-6 md:-ml-10 transform scale-y-105" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
              HORA BRANCH
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl text-gold font-semibold font-jost mb-6 uppercase tracking-[0.2em]" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}>
            Lake Hora, one of five crater lakes in Bishoftu
          </h2>
          <p className="text-sm md:text-base text-white/90 mb-10 max-w-2xl mx-auto font-normal leading-relaxed tracking-wide" style={{ textShadow: '0 1px 16px rgba(0,0,0,0.5)' }}>
            Lying just north of the town centre, Lake Hora is the wildest of 
            Bishoftu's lakes and features some outstanding birdlife along its 
            lushly vegetated slopes. There's a footpath around the lake.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="#"
              className="group relative px-10 py-4 bg-gold text-white font-bold tracking-[0.2em] uppercase text-xs overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,169,110,0.4)] w-full sm:w-auto text-center rounded-full"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Calendar size={16} />
                Book Your Stay
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <Link
              to="#"
              className="group px-10 py-4 border border-white/30 text-white font-bold tracking-[0.2em] uppercase text-xs transition-all duration-500 hover:bg-white hover:text-lux-gray-900 w-full sm:w-auto text-center rounded-full backdrop-blur-sm"
            >
              <span className="flex items-center justify-center gap-3">
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                Explore Experiences
              </span>
            </Link>
          </div>

        </Reveal>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-white/30" />
        </div>
      </section>

      {/* 2. Introduction & Highlights Integrated */}
      <section className="py-32 px-4 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Text Content */}
            <div className="lg:col-span-5 space-y-12">
              <Reveal animation="fade-in" delay={100} className="space-y-6">
                <div className="space-y-4">
                  <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold block">Introduction</span>
                  <h2 className="text-4xl md:text-5xl font-jost text-lux-gray-900 leading-tight">A Sanctuary Defined by Nature & Luxury</h2>
                </div>
                <div className="text-med-gray leading-relaxed text-lg font-light">
                  Noora Hora Branch represents the pinnacle of luxury living, set within the breathtaking crater landscape of Bishoftu. 
                  Our resort offers a curated escape designed for those who seek tranquility without compromising on modern comfort.
                </div>
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-taupe-100">
                  <div>
                    <div className="text-3xl font-jost text-gold mb-1">100%</div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-lux-gray-400 font-bold">Exclusive</div>
                  </div>
                  <div>
                    <div className="text-3xl font-jost text-gold mb-1">Premium</div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-lux-gray-400 font-bold">Service</div>
                  </div>
                  <div>
                    <div className="text-3xl font-jost text-gold mb-1">Luxury</div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-lux-gray-400 font-bold">Living</div>
                  </div>
                </div>
              </Reveal>

              {/* Integrated Highlights Icons */}
              <div className="grid grid-cols-2 gap-y-10 gap-x-6 pt-12 border-t border-taupe-100">
                {[
                  { icon: <Waves className="w-6 h-6" />, label: "Scenic Views", desc: "Panoramic crater lake vistas" },
                  { icon: <Leaf className="w-6 h-6" />, label: "Eco-Conscious", desc: "Sustainability at our core" },
                  { icon: <Utensils className="w-6 h-6" />, label: "Fine Dining", desc: "Globally inspired flavors" },
                  { icon: <Sparkles className="w-6 h-6" />, label: "Wellness", desc: "Holistic rejuvenation" },
                ].map((item, idx) => (
                  <Reveal animation="fade-up" delay={150 * idx} key={idx} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-gold group-hover:text-white text-gold">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-lux-gray-900">{item.label}</div>
                      <div className="text-xs text-med-gray font-light leading-snug">{item.desc}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right: Premium Staggered Gallery */}
            <div className="lg:col-span-7">
              <Reveal animation="fade-left" delay={300} className="relative h-[650px] w-full">
                {/* Decorative Background Frame */}
                <div className="absolute top-10 right-10 w-4/5 h-[480px] border border-gold/20 -z-10 translate-x-6 translate-y-6" />
                
                {/* Main Image (Lake View) - Back Layer */}
                <div className="absolute right-0 top-0 w-4/5 h-[480px] overflow-hidden rounded shadow-luxury group transition-all duration-700">
                  <img
                    src={lakeViewImg}
                    alt="Scenic Lake View"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                {/* Exterior Image - Middle Layer */}
                <div className="absolute left-0 top-32 w-3/5 h-[380px] overflow-hidden rounded shadow-luxury border-4 border-white z-10 group transition-all duration-700 hover:z-30">
                  <img
                    src={exteriorImg}
                    alt="Resort Exterior"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Interior Image - Front Layer */}
                <div className="absolute left-1/4 bottom-0 w-2/5 h-[280px] overflow-hidden rounded shadow-luxury border-4 border-white z-20 group transition-all duration-700 hover:z-30">
                  <img
                    src={interiorImg}
                    alt="Luxury Interior"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Floating Accent Element */}
                <div className="absolute -right-6 bottom-24 bg-gold p-6 shadow-luxury z-30 hidden md:block rotate-1 translate-x-4">
                  <div className="border border-white/30 p-3 text-white text-[11px] uppercase tracking-[0.3em] font-bold">
                    The Hora Experience
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>


      {/* 3. Staggered Accommodation (Stay With Us) */}
      <section className="py-32 px-4 bg-taupe-50">
        <div className="max-w-[1440px] mx-auto">
          <Reveal animation="fade-down" delay={0} className="text-center mb-24 space-y-4">
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold block">Refined Living</span>
            <h2 className="text-4xl md:text-5xl font-jost tracking-tight text-lux-gray-900">Your Private Sanctuary</h2>
            <div className="w-24 h-px bg-gold/30 mx-auto mt-6" />
          </Reveal>

          <div className="space-y-32">
            {[
              {
                name: "Presidential Suite",
                image: space1,
                desc: "An exclusive environment featuring elegant interiors and national heritage. Designed for distinguished guests who appreciate the finer things in life.",
                features: ["Private Lounge", "Heritage Decor", "Panoramic Views"]
              },
              {
                name: "Luxury King Room",
                image: space2,
                desc: "Spacious and modern living spaces with premium amenities and bespoke design. Experience ultimate comfort in a setting of contemporary elegance.",
                features: ["King Size Bed", "Smart Automation", "Bespoke Furniture"]
              },
              {
                name: "Stone Terrace Villa",
                image: space3,
                desc: "Immerse yourself in nature with our traditional stone-crafted outdoor living spaces. A perfect blend of organic textures and modern luxury.",
                features: ["Outdoor Bar", "Private Terrace", "Natural Stone Architecture"]
              },
              {
                name: "Serene Spa Suite",
                image: space4,
                desc: "Experience ultimate relaxation in our marble-clad suites with private wellness facilities. Your personal oasis for rejuvenation and peace.",
                features: ["Marble Bathroom", "Wellness Zone", "Rain Shower"]
              },
            ].map((acc, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                {/* Image Side */}
                <Reveal animation={idx % 2 === 0 ? "fade-right" : "fade-left"} delay={200} className="w-full lg:w-3/5">
                  <div className="relative group overflow-hidden shadow-luxury">
                    <img
                      src={acc.image}
                      alt={acc.name}
                      className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </Reveal>

                {/* Text Side */}
                <Reveal animation={idx % 2 === 0 ? "fade-left" : "fade-right"} delay={300} className="w-full lg:w-2/5 space-y-8">
                  <div className="space-y-4">
                    <span className="text-gold font-jost text-4xl opacity-20">0{idx + 1}</span>
                    <h3 className="text-3xl font-jost text-lux-gray-900 tracking-wide">{acc.name}</h3>
                    <p className="text-med-gray font-light leading-relaxed text-lg italic">
                      {acc.desc}
                    </p>
                  </div>
                  
                  <div className="space-y-4 pt-6 border-t border-taupe-100">
                    <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-4">Features & Amenities</div>
                    <ul className="grid grid-cols-1 gap-4">
                      {acc.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center gap-3 text-sm text-lux-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <Link to="#" className="inline-flex items-center gap-4 text-lux-gray-900 group">
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-gold pb-1 group-hover:border-gold-hover transition-colors">Explore Suite</span>
                      <ChevronRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-2" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 4. The Experience (Dining + Facilities Combined) */}
      <section className="py-32 px-4 text-white" style={{ backgroundColor: '#1a1816' }}>
        <div className="max-w-[1440px] mx-auto">
          <Reveal animation="fade-down" delay={0} className="text-center mb-20 space-y-4">
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold block">The Complete Experience</span>
            <h2 className="text-4xl md:text-5xl font-jost tracking-tight">Dine, Unwind & Discover</h2>
            <div className="w-24 h-px bg-gold/30 mx-auto mt-6" />
          </Reveal>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Large Dining Image */}
            <Reveal animation="fade-in" delay={100} className="md:col-span-7 group relative overflow-hidden h-[500px] cursor-pointer">
              <img src={diningImg} alt="Dining Experience" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
                <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 backdrop-blur-sm px-3 py-1.5 mb-4">
                  <Utensils size={10} className="text-gold" />
                  <span className="text-gold text-[9px] uppercase tracking-[0.3em] font-bold">Culinary Excellence</span>
                </div>
                <h3 className="text-3xl font-jost tracking-wide mb-2">Exquisite Dining</h3>
                <p className="text-white/60 text-sm font-light max-w-md">International fusion, traditional coffee ceremonies, and bespoke private dining experiences.</p>
              </div>
            </Reveal>

            {/* Right Column: Dining Details */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <Reveal animation="fade-up" delay={200} className="bg-white/5 backdrop-blur-sm p-8 flex-1 border border-white/5">
                <div className="space-y-6">
                  {[
                    { name: "Main Restaurant", desc: "International fusion in a magical setting." },
                    { name: "Terrace Bar", desc: "Panoramic views with fresh refreshments." },
                    { name: "Garden Coffee", desc: "Traditional ceremonies with heart." },
                    { name: "Private Dining", desc: "Tailored culinary experiences." }
                  ].map((rest, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-8 h-px bg-gold/30 mt-3 transition-all duration-300 group-hover:w-14 group-hover:bg-gold shrink-0" />
                      <div>
                        <h4 className="text-sm font-jost text-white tracking-wide">{rest.name}</h4>
                        <p className="text-xs text-white/40 font-light">{rest.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Cinema */}
            <Reveal animation="fade-up" delay={300} className="md:col-span-5 group relative overflow-hidden h-[400px] cursor-pointer">
              <img src={cinemaImg} alt="Private Cinema" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 backdrop-blur-sm px-3 py-1.5 mb-3">
                  <Tv size={10} className="text-gold" />
                  <span className="text-gold text-[9px] uppercase tracking-[0.3em] font-bold">Entertainment</span>
                </div>
                <h4 className="text-2xl font-jost text-white tracking-wide">Private Cinema</h4>
              </div>
            </Reveal>

            {/* Wellness */}
            <Reveal animation="fade-up" delay={400} className="md:col-span-7 group relative overflow-hidden h-[400px] cursor-pointer">
              <img src={centerImg} alt="Wellness Center" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-sm px-3 py-1.5 mb-3">
                  <Sparkles size={10} className="text-emerald-300" />
                  <span className="text-emerald-300 text-[9px] uppercase tracking-[0.3em] font-bold">Wellness</span>
                </div>
                <h4 className="text-2xl font-jost text-white tracking-wide">Wellness Center</h4>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Philosophy (Sustainability) */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
          {/* Image Half */}
          <Reveal animation="fade-in" delay={0} className="relative h-[400px] lg:h-auto">
            <img
              src={sustainabilityImg}
              alt="Sustainability"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-8 left-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 hidden md:block">
              <Leaf className="text-white w-10 h-10 mb-2" />
              <div className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">Environment First</div>
            </div>
          </Reveal>

          {/* Content Half */}
          <div className="bg-taupe-50 flex items-center">
            <Reveal animation="fade-left" delay={200} className="p-12 lg:p-24 space-y-10 max-w-xl">
              <div className="space-y-4">
                <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold block">Our Philosophy</span>
                <h2 className="text-4xl md:text-5xl font-jost text-lux-gray-900 leading-tight">Harmony with Nature</h2>
              </div>
              <p className="text-med-gray leading-relaxed text-lg font-light">
                Sustainability is our foundation. We believe that true luxury coexists beautifully with the environment.
              </p>

              <div className="space-y-8 pt-8 border-t border-taupe-100">
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white text-gold transition-all duration-300">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-jost text-lux-gray-800 mb-1 text-lg">Renewable Energy</h4>
                    <p className="text-sm text-med-gray font-light">Powering our branch with clean, sustainable energy sources.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white text-gold transition-all duration-300">
                    <Recycle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-jost text-lux-gray-800 mb-1 text-lg">Zero Waste</h4>
                    <p className="text-sm text-med-gray font-light">Advanced treatment and comprehensive recycling initiatives.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={allImages[currentImageIndex]}
            alt="Rotating Gallery"
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-lux-gray-900/40" />
        </div>


        <Reveal animation="fade-up" delay={0} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-jost text-white mb-8" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>Your Escape Awaits</h2>

          <p className="text-lg text-white mb-12 font-light tracking-wide max-w-xl mx-auto" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>

            Reconnect with nature and yourself in the heart of Noora Hora Branch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="#"
              className="group flex items-center justify-center gap-4 bg-gold hover:bg-gold-hover text-white px-10 py-5 transition-all duration-300 min-w-[240px]"
            >
              <Calendar size={18} />
              <span className="font-bold tracking-[0.2em] uppercase text-xs">Book Now</span>
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center gap-4 bg-transparent border border-white/30 hover:bg-white hover:text-lux-gray-900 text-white px-10 py-5 transition-all duration-300 min-w-[240px]"
            >
              <Phone size={18} />
              <span className="font-bold tracking-[0.2em] uppercase text-xs">Contact Us</span>
            </Link>
          </div>
        </Reveal>
      </section>
      {/* 9. Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
