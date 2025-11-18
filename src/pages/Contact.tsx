import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, User, CheckCircle, Crown, Sparkles, Award } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-7 w-7" />,
      title: "Culinary Concierge",
      description: "Premium support & inquiries",
      contact: "concierge@smartfoodiehub.com",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      accent: "text-blue-600"
    },
    {
      icon: <Phone className="h-7 w-7" />,
      title: "Executive Chef Line",
      description: "Direct access to our culinary team",
      contact: "+1 (555) CHEF-VIP",
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      accent: "text-emerald-600"
    },
    {
      icon: <MapPin className="h-7 w-7" />,
      title: "Culinary Atelier",
      description: "Our flagship location",
      contact: "123 Gastronomy Boulevard, Culinary District, CD 12345",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      accent: "text-purple-600"
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: "Concierge Hours",
      description: "When our team is available",
      contact: "Monday - Saturday: 9:00 AM - 8:00 PM PST",
      color: "bg-gradient-to-br from-amber-500 to-amber-600",
      accent: "text-amber-600"
    }
  ];

  const subjects = [
    "General Culinary Inquiry",
    "Premium Recipe Access",
    "Restaurant Partnership",
    "Private Chef Services",
    "Culinary Masterclass",
    "VIP Membership",
    "Press & Media Relations",
    "Exclusive Event Planning"
  ];

  return (
    <div className="overflow-hidden">
      {/* Premium Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 rounded-full px-6 py-2 mb-8">
              <Sparkles className="h-5 w-5 text-indigo-400 mr-2" />
              <span className="text-indigo-200 font-medium tracking-wide">PREMIUM CONCIERGE</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              <span className="block font-extralight text-gray-100">Culinary</span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">Concierge</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Experience personalized service from our culinary experts. Whether you seek recipe guidance, dining recommendations, or exclusive experiences.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="lg:flex gap-12">
            {/* Premium Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <Crown className="h-8 w-8 text-amber-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">Premium Consultation</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Connect with our culinary concierge team for personalized assistance, exclusive recommendations, and bespoke culinary experiences.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12 border border-emerald-200">
                      <CheckCircle className="h-20 w-20 text-emerald-600 mx-auto mb-6" />
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Received</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Thank you for reaching out to our culinary concierge. A member of our expert team will respond within 2 hours with personalized recommendations.
                      </p>
                      <div className="mt-6 inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                        <Award className="h-4 w-4 mr-2" />
                        Priority Response Activated
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg transition-all duration-300"
                            placeholder="Your distinguished name"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg transition-all duration-300"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                        Service Category *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg transition-all duration-300"
                      >
                        <option value="">Select your preferred service</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                        Your Culinary Vision *
                      </label>
                      <div className="relative">
                        <MessageCircle className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-vertical text-lg transition-all duration-300"
                          placeholder="Share your culinary aspirations, dietary preferences, or specific requests. Our concierge team will craft a personalized response..."
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white py-5 px-8 rounded-xl font-bold text-lg hover:from-indigo-600 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-indigo-500/25 transform hover:-translate-y-1"
                    >
                      <Send className="mr-3 h-6 w-6" />
                      Submit Premium Request
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Premium Contact Info & Services */}
            <div className="lg:w-1/3 mt-12 lg:mt-0">
              <div className="space-y-8">
                {/* Contact Cards */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                      <div className="flex items-start space-x-6">
                        <div className={`${info.color} text-white p-4 rounded-2xl flex-shrink-0 shadow-lg`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-lg mb-2">{info.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{info.description}</p>
                          <p className={`${info.accent} font-bold text-sm leading-relaxed`}>{info.contact}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Premium Services */}
                <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <Crown className="h-7 w-7 mr-3 text-amber-300" />
                      <h3 className="text-2xl font-bold">VIP Services</h3>
                    </div>
                    <div className="space-y-4 text-indigo-100">
                      <div className="flex items-center">
                        <Sparkles className="h-4 w-4 mr-3 text-amber-300 flex-shrink-0" />
                        <span>Personal Chef Consultations</span>
                      </div>
                      <div className="flex items-center">
                        <Sparkles className="h-4 w-4 mr-3 text-amber-300 flex-shrink-0" />
                        <span>Exclusive Recipe Development</span>
                      </div>
                      <div className="flex items-center">
                        <Sparkles className="h-4 w-4 mr-3 text-amber-300 flex-shrink-0" />
                        <span>Private Dining Experiences</span>
                      </div>
                      <div className="flex items-center">
                        <Sparkles className="h-4 w-4 mr-3 text-amber-300 flex-shrink-0" />
                        <span>Culinary Travel Planning</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time Guarantee */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="text-center">
                    <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Service Guarantee</h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                        <span>General Inquiries</span>
                        <span className="font-bold text-emerald-600">2 hours</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                        <span>VIP Consultations</span>
                        <span className="font-bold text-amber-600">30 minutes</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                        <span>Partnership Inquiries</span>
                        <span className="font-bold text-purple-600">24 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;