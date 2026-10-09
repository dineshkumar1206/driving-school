import React from 'react';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  const packages = [
    { title: "Beginner Course", price: "$299", hours: "10 Hours", desc: "Perfect for completely new drivers.", features: ["Basic maneuvers", "Traffic rules & signs", "City driving basics", "Mock test included"] },
    { title: "Refresher Course", price: "$149", hours: "5 Hours", desc: "For those who need to polish their skills.", features: ["Highway driving", "Parallel parking", "Night driving", "Confidence building"], popular: true },
    { title: "License Test Prep", price: "$99", hours: "3 Hours", desc: "Intensive prep right before your exam.", features: ["Test route practice", "Vehicle inspection", "Scoring criteria review", "Use of car for test"] }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-500 tracking-wide uppercase mb-2">Packages</h2>
          <h3 className="text-4xl font-extrabold text-white">Find the Right Course for You</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`relative p-8 rounded-3xl ${pkg.popular ? 'bg-blue-600 border-none shadow-2xl shadow-blue-900/50 transform md:-translate-y-4' : 'bg-slate-800 border border-slate-700'}`}>
              {pkg.popular && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>}
              <h4 className="text-2xl font-bold mb-2">{pkg.title}</h4>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-extrabold">{pkg.price}</span>
                <span className="text-slate-400 ml-2 mb-1">/ {pkg.hours}</span>
              </div>
              <p className={pkg.popular ? 'text-blue-100 mb-8' : 'text-slate-400 mb-8'}>{pkg.desc}</p>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle size={20} className={pkg.popular ? 'text-orange-400 mr-3' : 'text-blue-500 mr-3'} />
                    <span className={pkg.popular ? 'text-white' : 'text-slate-300'}>{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="#book" className={`block w-full text-center py-4 rounded-full font-bold transition-all ${pkg.popular ? 'bg-white text-blue-900 hover:bg-slate-100' : 'bg-slate-700 text-white hover:bg-slate-600'}`}>
                Select Package
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
