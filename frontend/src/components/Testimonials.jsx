import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Sarah Jenkins", role: "Passed First Try", text: "The instructors at DrivePro were incredibly patient. I was so nervous, but they made me feel completely at ease. I passed my test on the first try!" },
    { name: "Michael Chen", role: "Refresher Course", text: "I hadn't driven in 5 years and was terrified of the highway. Just 5 hours with DrivePro and I'm commuting daily with zero anxiety. Highly recommend!" },
    { name: "Emma Thompson", role: "Teen Driver", text: "The flexible scheduling meant I could fit lessons around my school and sports. The dual-control cars made me feel safe while learning." }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-2">Testimonials</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">What Our Students Say</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <div className="flex text-orange-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 mb-6 italic">"{rev.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl mr-4">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">{rev.name}</h5>
                  <span className="text-sm text-slate-500">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
