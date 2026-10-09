import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-5/12">
          <h2 className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-2">Get in Touch</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Ready to Hit the Road?</h3>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Fill out the form to book your first lesson or ask any questions. Our team will get back to you within 24 hours to confirm your schedule.
          </p>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mr-4">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Call Us</p>
                <p className="text-lg font-bold text-slate-900">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mr-4">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Email Us</p>
                <p className="text-lg font-bold text-slate-900">hello@drivepro.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mr-4">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Location</p>
                <p className="text-lg font-bold text-slate-900">123 Driving Ave, Motor City</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-7/12" id="book">
          <form className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white" placeholder="(555) 000-0000" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white" placeholder="john@example.com" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Package</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white text-slate-700">
                <option>Beginner Course ($299)</option>
                <option>Refresher Course ($149)</option>
                <option>License Test Prep ($99)</option>
                <option>Custom Request</option>
              </select>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
              <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white" placeholder="Any specific requirements?"></textarea>
            </div>
            <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-600/30">
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
