import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 shadow-md bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-2xl tracking-tighter">
              Drive<span className="text-orange-500">Pro</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
            <a href="#features" className="hover:text-orange-500 transition-colors">Why Us</a>
            <a href="#testimonials" className="hover:text-orange-500 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
            <a href="#book" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-orange-500/30">
              Book a Lesson
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-orange-500">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-800 pb-4 px-4 border-t border-slate-700">
          <div className="flex flex-col space-y-4 pt-4">
            <a href="#home" className="block hover:text-orange-500" onClick={()=>setIsOpen(false)}>Home</a>
            <a href="#services" className="block hover:text-orange-500" onClick={()=>setIsOpen(false)}>Services</a>
            <a href="#features" className="block hover:text-orange-500" onClick={()=>setIsOpen(false)}>Why Us</a>
            <a href="#testimonials" className="block hover:text-orange-500" onClick={()=>setIsOpen(false)}>Testimonials</a>
            <a href="#contact" className="block hover:text-orange-500" onClick={()=>setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
