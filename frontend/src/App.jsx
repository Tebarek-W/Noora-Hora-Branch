import React from 'react';
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




const App = () => {
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
          <h2 className="text-xl md:text-2xl text-gold font-jost mb-6 uppercase tracking-[0.2em]" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}>
            Lake Hora, one of five crater lakes in Bishoftu
          </h2>
          <p className="text-sm md:text-base text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed tracking-wide" style={{ textShadow: '0 1px 16px rgba(0,0,0,0.5)' }}>
            Lying just north of the town centre, Lake Hora is the wildest of 
            Bishoftu's lakes and features some outstanding birdlife along its 
            lushly vegetated slopes. There's a footpath around the lake.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="#"
              className="px-8 py-4 bg-gold hover:bg-gold-hover text-white font-medium tracking-widest uppercase text-sm transition-all duration-300 w-full sm:w-auto"
            >
              Book Your Stay
            </Link>
            <Link
              to="#"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-medium tracking-widest uppercase text-sm transition-all duration-300 w-full sm:w-auto"
            >
              Explore Experiences
            </Link>
          </div>
        </Reveal>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-white/30" />
        </div>
      </section>

      {/* 2. About Section */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal animation="fade-in" delay={100} className="space-y-8">
              <div className="space-y-4">
                <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">WELCOME TO NOORA HORA BRANCH</span>
                <h2 className="text-3xl md:text-4xl font-jost text-lux-gray-900">A Modern Sanctuary</h2>
              </div>
              <div className="text-med-gray leading-relaxed text-lg">
                Noora Hora Branch represents the pinnacle of luxury living, set within a breathtaking landscape. 
                Our resort offers a curated escape designed for those who seek tranquility without compromising on comfort.
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-2xl font-jost text-gold mb-1">100%</div>
                  <div className="text-[10px] uppercase tracking-wider text-lux-gray-400">Exclusive</div>
                </div>
                <div className="w-px h-10 bg-lux-gray-100" />
                <div>
                  <div className="text-2xl font-jost text-gold mb-1">Premium</div>
                  <div className="text-[10px] uppercase tracking-wider text-lux-gray-400">Service</div>
                </div>
                <div className="w-px h-10 bg-lux-gray-100" />
                <div>
                  <div className="text-2xl font-jost text-gold mb-1">Luxury</div>
                  <div className="text-[10px] uppercase tracking-wider text-lux-gray-400">Living</div>
                </div>
              </div>
            </Reveal>

            <Reveal animation="fade-down" delay={300} className="grid grid-cols-2 gap-4 relative">
              <div className="space-y-4 pt-12">
                <img
                  src={exteriorImg}
                  alt="Resort Exterior"
                  className="w-full h-80 object-cover rounded shadow-luxury"
                />
                <img
                  src={interiorImg}
                  alt="Luxury Interior"
                  className="w-full h-64 object-cover rounded shadow-luxury"
                />

              </div>
              <div className="space-y-4">
                <img
                  src={lakeViewImg}
                  alt="Scenic Lake View"
                  className="w-full h-[450px] object-cover rounded shadow-luxury"
                />

              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Highlights Grid */}
      <section className="py-20 text-white" style={{ backgroundColor: '#1a1816' }}>
        <div className="max-w-[1440px] mx-auto px-4">
          <Reveal animation="fade-up" delay={0} className="text-center mb-16 space-y-4">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Unmatched Features</span>
            <h2 className="text-3xl font-jost tracking-wider">Project Highlights</h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: <Waves className="w-8 h-8" />, label: "Scenic Views" },
              { icon: <Leaf className="w-8 h-8" />, label: "Eco-Conscious" },
              { icon: <Home className="w-8 h-8" />, label: "Luxury Suites" },
              { icon: <Utensils className="w-8 h-8" />, label: "Fine Dining" },
              { icon: <Sparkles className="w-8 h-8" />, label: "Wellness" },
              { icon: <Globe className="w-8 h-8" />, label: "Cultural" },
            ].map((item, idx) => (
              <Reveal animation="fade-up" delay={100 * idx} key={idx} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-gold group-hover:bg-gold/5">
                  <div className="text-gold transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-white group-hover:text-gold transition-colors">
                  {item.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Accommodation Section */}
      <section className="py-24 px-4 bg-taupe-100">
        <div className="max-w-[1440px] mx-auto">
          <Reveal animation="fade-down" delay={0} duration={1600} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Stay With Us</span>
              <h2 className="text-3xl md:text-4xl font-jost text-lux-gray-900">Luxury Living Spaces</h2>
            </div>
            <p className="max-w-md text-med-gray font-light">
              Discover a variety of elegant environments designed to immerse you in the beauty of the landscape.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Heritage Suites",
                image: "https://placehold.co/800x600/ffffff/gold?text=HERITAGE+SUITE",
                desc: "Traditional design elements meets modern luxury."
              },
              {
                name: "Modern Lofts",
                image: "https://placehold.co/800x600/ffffff/gold?text=MODERN+LOFT",
                desc: "Spacious environments with premium bespoke interiors."
              },
              {
                name: "Private Villas",
                image: "https://placehold.co/800x600/ffffff/gold?text=PRIVATE+VILLA",
                desc: "The ultimate privacy with dedicated personal service."
              },
              {
                name: "Garden Lodges",
                image: "https://placehold.co/800x600/ffffff/gold?text=GARDEN+LODGE",
                desc: "Wake up to serene views of our lush organic gardens."
              },
            ].map((acc, idx) => (
              <Reveal animation="scale-up" delay={100 * idx} duration={1600} key={idx} className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                <Link to="#" className="flex-1 flex flex-col">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={acc.image}
                      alt={acc.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 space-y-4 flex flex-col flex-1">
                    <h3 className="text-xl font-jost text-lux-gray-800">{acc.name}</h3>
                    <p className="text-sm text-med-gray leading-relaxed flex-1">{acc.desc}</p>
                    <div className="flex gap-4 pt-2 border-t border-taupe-100 flex-wrap">
                      <div className="flex items-center gap-1.5 text-lux-gray-400"><Wifi size={14} /><span className="text-[10px] uppercase tracking-wider">Wifi</span></div>
                      <div className="flex items-center gap-1.5 text-lux-gray-400"><Wind size={14} /><span className="text-[10px] uppercase tracking-wider">AC</span></div>
                      <div className="flex items-center gap-1.5 text-lux-gray-400"><Tv size={14} /><span className="text-[10px] uppercase tracking-wider">Smart TV</span></div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dining Section */}
      <section className="py-24 px-4 bg-taupe-50">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal animation="fade-in" delay={0} className="order-2 lg:order-1 relative">
            <img
              src="https://placehold.co/1200x800/e5e1da/666?text=DINING+EXPERIENCE"
              alt="Dining Experience Placeholder"
              className="w-full h-[600px] object-cover rounded shadow-luxury"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 max-w-xs shadow-luxury hidden md:block">
              <h4 className="font-jost text-gold mb-2 text-lg uppercase tracking-wider">Signature Grill</h4>
              <p className="text-xs text-med-gray font-light leading-relaxed">Experience authentic local flavors with premium globally inspired techniques.</p>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2 space-y-10">
            <Reveal animation="slide-left" delay={100} className="space-y-4">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Culinary Excellence</span>
              <h2 className="text-3xl md:text-4xl font-jost text-lux-gray-900">Exquisite Dining</h2>
            </Reveal>

            <div className="space-y-8">
              {[
                { name: "Main Restaurant", desc: "International fusion in a magical architectural setting." },
                { name: "Terrace Bar", desc: "Fresh refreshments with panoramic views of the branch landscape." },
                { name: "Garden Coffee", desc: "Traditional coffee ceremonies served with heritage and heart." },
                { name: "Private Dining", desc: "Customized culinary experiences tailored to your personal preferences." }
              ].map((rest, idx) => (
                <Reveal animation="fade-up" delay={200 + (idx * 100)} key={idx} className="flex gap-6 items-start group">
                  <div className="w-10 h-px bg-gold/30 mt-3 transition-all duration-300 group-hover:w-16 group-hover:bg-gold" />
                  <div className="space-y-1">
                    <h4 className="text-lg font-jost text-lux-gray-800 tracking-wide">{rest.name}</h4>
                    <p className="text-sm text-med-gray font-light">{rest.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Facilities Section */}
      <section className="py-24 px-4 overflow-hidden relative bg-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(201,169,110,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10 bg-white">
          <Reveal animation="fade-down" delay={0} className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="space-y-4">
              <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold block">World-Class Services</span>
              <h2 className="text-3xl md:text-5xl font-jost tracking-wider text-black">Premier Facilities</h2>
            </div>
            <div className="max-w-md h-px bg-gold/30 w-full hidden lg:block mb-4" />
          </Reveal>

          <Reveal animation="fade-in" delay={200} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 group relative overflow-hidden h-[420px] border border-black/5 cursor-pointer">
              <img src="https://placehold.co/1200x800/1a1816/white?text=PRIVATE+CINEMA" alt="Private Cinema Placeholder" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 backdrop-blur-sm px-3 py-1.5 mb-3">
                  <Tv size={10} className="text-gold" />
                  <span className="text-gold text-[9px] uppercase tracking-[0.3em] font-bold">Entertainment</span>
                </div>
                <h4 className="text-2xl font-jost text-white tracking-wide">Private Cinema</h4>
              </div>
            </div>

            <div className="group relative overflow-hidden h-[420px] border border-black/5 cursor-pointer">
              <img src="https://placehold.co/800x1200/1a1816/white?text=WELLNESS+CENTER" alt="Wellness Center Placeholder" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-sm px-3 py-1.5 mb-3">
                  <Sparkles size={10} className="text-emerald-300" />
                  <span className="text-emerald-300 text-[9px] uppercase tracking-[0.3em] font-bold">Wellness</span>
                </div>
                <h4 className="text-xl font-jost text-white tracking-wide">Wellness Center</h4>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Sustainability Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal animation="slide-right" delay={0} className="space-y-8">
            <div className="space-y-4">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Environment First</span>
              <h2 className="text-3xl md:text-4xl font-jost text-lux-gray-900">Eco-Conscious Luxury</h2>
            </div>
            <p className="text-med-gray leading-relaxed text-lg font-light">
              Sustainability is our foundation. We believe that true luxury coexists beautifully with the environment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start">
                <Zap className="text-gold w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-jost text-lux-gray-800 mb-1">Renewable Energy</h4>
                  <p className="text-xs text-med-gray">Powering our branch with clean, sustainable energy sources.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Recycle className="text-gold w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-jost text-lux-gray-800 mb-1">Zero Waste</h4>
                  <p className="text-xs text-med-gray">Advanced treatment and comprehensive recycling initiatives.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal animation="scale-up" delay={200} className="relative">
            <div className="aspect-square bg-taupe-100 rounded-full flex items-center justify-center p-8">
              <img
                src="https://placehold.co/800x800/e5e1da/gold?text=SUSTAINABILITY"
                alt="Sustainability Placeholder"
                className="w-full h-full object-cover rounded-full shadow-luxury"
              />
            </div>
            <div className="absolute top-0 right-0 p-6 bg-white shadow-luxury rounded-lg -rotate-12 translate-x-1/4 translate-y-1/4">
              <Leaf className="text-gold w-8 h-8" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://placehold.co/1920x1080/1a1816/white?text=FINAL+ESCAPE"
            alt="Final Escape Placeholder"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-lux-gray-900/80" />
        </div>

        <Reveal animation="fade-up" delay={0} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-jost text-white mb-8">Your Escape Awaits</h2>
          <p className="text-lg text-white/70 mb-12 font-light tracking-wide max-w-xl mx-auto">
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
