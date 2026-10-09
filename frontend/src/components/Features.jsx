import React from 'react';
import { Shield, CheckCircle, Clock, Award } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: <Shield size={32} />, title: "Certified Instructors", desc: "Professional, patient, and fully licensed driving experts." },
    { icon: <CheckCircle size={32} />, title: "Dual-Control Cars", desc: "Learn in safety with our modern dual-control vehicles." },
    { icon: <Clock size={32} />, title: "Flexible Scheduling", desc: "Weekend, evening, and customized lesson times available." },
    { icon: <Award size={32} />, title: "High Pass Rate", desc: "Our proven curriculum gets you ready for the road." }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-2">Why Choose Us</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Your Safety is Our Priority</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="text-orange-500 bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
