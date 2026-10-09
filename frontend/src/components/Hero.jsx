import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const slides = [
    {
      title: "Master the Road with Confidence",
      subtitle: "Learn from certified instructors with our top-rated driving courses. High first-time pass rates and flexible scheduling tailored for you.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Safe and Modern Vehicles",
      subtitle: "Our fleet consists of modern, dual-controlled cars to ensure maximum safety and comfort while you learn the ropes.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Flexible Scheduling Just For You",
      subtitle: "We offer evening and weekend classes so you can fit your driving lessons perfectly into your busy life.",
      image: "https://images.unsplash.com/photo-1605335687258-009f61b0769d?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative pt-20 flex items-center h-screen bg-slate-50 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center lg:gap-16">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left pt-12 lg:pt-0">
          <div className="min-h-[200px] lg:min-h-[220px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {slides[currentSlide].title.split(' ').map((word, i, arr) => 
                i === arr.length - 1 ? <span key={i} className="text-blue-600 block sm:inline mt-2 sm:mt-0"> {word}</span> : word + ' '
              )}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {slides[currentSlide].subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#book" className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center justify-center hover:-translate-y-1">
              Start Your Journey
            </a>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center lg:justify-start space-x-3 mt-12">
            {slides.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'bg-blue-600 w-12' : 'bg-slate-300 w-3 hover:bg-slate-400'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Image / Visuals */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center lg:justify-end">
          {/* Offset accent border box */}
          <div className="absolute inset-0 rounded-[2rem] border-4 border-orange-200 translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 z-0 hidden sm:block max-w-[500px] ml-auto"></div>
          
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[350px] sm:h-[400px] lg:h-[480px] w-full max-w-[500px] bg-slate-200 group z-10">
            {slides.map((slide, i) => (
              <img 
                key={i}
                src={slide.image} 
                alt="Driving Lesson" 
                className={`absolute inset-0 object-cover w-full h-full transition-all duration-1000 transform ${i === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`} 
              />
            ))}
            
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 pointer-events-none"></div>
            
            {/* Controls */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md hover:bg-white text-slate-900 p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg border border-white/40">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md hover:bg-white text-slate-900 p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg border border-white/40">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
