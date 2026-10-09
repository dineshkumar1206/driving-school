import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <span className="font-bold text-2xl tracking-tighter text-white mb-4 block">
            Drive<span className="text-orange-500">Pro</span>
          </span>
          <p className="max-w-sm mb-6">Empowering drivers with the skills and confidence needed to safely navigate the roads.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-orange-500 transition-colors">Packages</a></li>
            <li><a href="#features" className="hover:text-orange-500 transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} DrivePro Driving School. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Facebook</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
