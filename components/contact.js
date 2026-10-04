

// export default Contact;

"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Building, 
  Users, 
  ArrowRight,
  Send,
  Headphones,
  MessageCircle,
  User
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: '',
    message: '',
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Create separate refs for each section
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const officersRef = useRef(null);
  const mapRef = useRef(null);
  const formRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.1 });
  const isOfficersInView = useInView(officersRef, { once: true, amount: 0.1 });
  const isMapInView = useInView(mapRef, { once: true, amount: 0.1 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.1 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.inquiryType) newErrors.inquiryType = 'Please select inquiry type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill all required fields');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading('Sending message...');

    try {
      // Use the correct API URL - make sure your backend is running on port 8000
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';
      
      console.log('Sending to:', `${API_URL}/contact`);
      console.log('Form data:', formData);

      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          inquiryType: formData.inquiryType,
          message: formData.message,
        }),
      });

      console.log('Response status:', response.status);

      const result = await response.json();
      console.log('Response data:', result);

      toast.dismiss(loadingToast);

      if (response.ok && result.success) {
        toast.success(
          <div>
            <strong>✓ Message sent successfully!</strong>
            <p style={{ fontSize: '14px', marginTop: '5px' }}>
              Reference: {result.contactId}
            </p>
          </div>,
          { autoClose: 5000 }
        );

        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          inquiryType: '',
          message: '',
          agreeToTerms: false
        });
        setErrors({});
      } else {
        toast.error(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      console.error('Submission error:', error);
      
      if (error.message.includes('Failed to fetch')) {
        toast.error('Cannot connect to server. Please make sure the backend is running on port 8000.');
      } else {
        toast.error('Network error: ' + error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactOfficers = [
    { region: "AMERICA", officers: [
      { name: "MR. NUMCHAI", ext: "1244" },
      { name: "MS. KANOKWAN", ext: "1247" },
      { name: "MR. THANATE", ext: "1242" }
    ]},
    { region: "EUROPE", officers: [
      { name: "MS. YUWADEE", ext: "1243" },
      { name: "MS. PIPATRA", ext: "1245" },
      { name: "MS. BENJARAT", ext: "1246" }
    ]},
    { region: "INTER-ASIA", officers: [
      { name: "MS. ARAYA", ext: "1241" },
      { name: "MS. PATAMA", ext: "1248" }
    ]}
  ];

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[40vh] md:h-[45vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/outbound.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-0.5 bg-white/60 rounded-full"></div>
                <span className="text-white/70 text-sm tracking-wider">Get in Touch</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Contact 
                <span className="text-white/90 block text-2xl md:text-3xl mt-1">Customer Service</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl">
                We're here to help. Reach out to our dedicated customer service team for any inquiries
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section ref={cardsRef} className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Phone Card */}
            <motion.div
              initial="hidden"
              animate={isCardsInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#041367]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-[#041367]" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-sm text-gray-600">+66 2 367 5021</p>
              <p className="text-sm text-gray-600">Fax: 02-367-5590</p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial="hidden"
              animate={isCardsInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#041367]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-[#041367]" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-sm text-gray-600">info@hanjinthailand.com</p>
              <p className="text-sm text-gray-600">support@hanjinthailand.com</p>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              initial="hidden"
              animate={isCardsInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#041367]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-[#041367]" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Office Hours</h3>
              <p className="text-sm text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-600">Sat: 9:00 AM - 2:00 PM</p>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial="hidden"
              animate={isCardsInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#041367]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-[#041367]" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-sm text-gray-600">6th Floor, Sirinrat Building</p>
              <p className="text-sm text-gray-600">3388/17-18 Rama IV Road, Bangkok</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Officers Section */}
      <section ref={officersRef} className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={isOfficersInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 mb-3 bg-[#041367]/10 px-4 py-1.5 rounded-full">
              <Users className="w-4 h-4 text-[#041367]" />
              <span className="text-[#041367] font-semibold text-xs uppercase tracking-wider">Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Contact Customer <span className="text-[#041367]">Service Officers</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#041367] to-transparent mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Reach out directly to our dedicated customer service officers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactOfficers.map((region, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={isOfficersInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#041367] px-5 py-3">
                  <h3 className="text-white font-semibold text-lg">{region.region}</h3>
                </div>
                <div className="p-5">
                  {region.officers.map((officer, officerIdx) => (
                    <div key={officerIdx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-[#041367]" />
                        <span className="text-sm text-gray-700">{officer.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <span className="text-sm text-gray-500">Ext. {officer.ext}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Address Section */}
      <section ref={mapRef} className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <motion.div
              initial="hidden"
              animate={isMapInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-0.5 bg-[#041367] rounded-full"></div>
                <span className="text-[#041367] font-semibold text-sm uppercase tracking-wider">Location</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-[#041367]">Headquarters</span>
              </h2>
              <div className="bg-gray-50 rounded-xl p-5 mb-5">
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-[#041367] mt-0.5" />
                  <div>
                    <p className="text-gray-800 font-medium">6th Floor, Sirinrat Building</p>
                    <p className="text-gray-600 text-sm">3388/17-18 Rama IV Road, Khlong Tan</p>
                    <p className="text-gray-600 text-sm">Khlong Toei, Bangkok 10110</p>
                    <p className="text-gray-600 text-sm mt-2">Thailand</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="tel:+6623675021">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#041367] text-white rounded-lg font-semibold text-sm hover:bg-[#041367]/90 transition-all">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </button>
                </a>
                <a href="https://maps.google.com/?q=Sirinrat+Building+Rama+IV+Road+Khlong+Toei+Bangkok" target="_blank" rel="noopener noreferrer">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#041367] text-[#041367] rounded-lg font-semibold text-sm hover:bg-[#041367] hover:text-white transition-all">
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isMapInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="rounded-xl overflow-hidden shadow-lg h-[300px] relative"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.021038203981!2d100.56866517368576!3d13.717175598097086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f3bc7cca4ab%3A0x5808503cfa6cbfa0!2sClariant%20(Thailand)%20Ltd.!5e0!3m2!1sen!2sbd!4v1780829767043!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Form Left Side */}
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 mb-3 bg-[#041367]/10 px-3 py-1 rounded-full">
                    <MessageCircle className="w-3 h-3 text-[#041367]" />
                    <span className="text-[#041367] font-semibold text-xs uppercase tracking-wider">Send Message</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Get in Touch</h2>
                  <p className="text-gray-500 text-sm mt-2">Fill out the form and our team will respond within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#041367] focus:border-transparent outline-none transition ${
                        errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+66 2 367 5021"
                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#041367] focus:border-transparent outline-none transition ${
                          errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200'
                        }`}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#041367] focus:border-transparent outline-none transition ${
                          errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type <span className="text-red-500">*</span></label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#041367] focus:border-transparent outline-none transition bg-white ${
                        errors.inquiryType ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      }`}
                    >
                      <option value="">Select Inquiry Type</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Shipping Information">Shipping Information</option>
                      <option value="Pricing">Pricing</option>
                      <option value="Support">Support</option>
                      <option value="Complaint">Complaint</option>
                    </select>
                    {errors.inquiryType && <p className="mt-1 text-xs text-red-500">{errors.inquiryType}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your inquiry..."
                      className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#041367] focus:border-transparent outline-none transition resize-none ${
                        errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="accent-[#041367] w-4 h-4"
                      />
                      <label className="text-sm text-gray-600">
                        I agree to the <a href="/footer/terms" className="text-[#041367] hover:underline">Terms</a> and <a href="/footer/privacy-policy" className="text-[#041367] hover:underline">Privacy</a>
                      </label>
                    </div>
                    {errors.agreeToTerms && <p className="text-xs text-red-500">{errors.agreeToTerms}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-[#041367] to-[#041367]/90 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Right Side Info */}
              <div className="bg-gradient-to-br from-[#041367] to-[#041367]/95 p-6 md:p-8 text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Headphones className="w-6 h-6 text-white/80" />
                      <h3 className="text-xl font-bold">Customer Support</h3>
                    </div>
                    <p className="text-white/80 text-sm mb-6">
                      Our dedicated support team is ready to assist you with any questions or concerns.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-white/60 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold">Call Us</p>
                          <p className="text-white/70 text-sm">+66 2 367 5021-2</p>
                          <p className="text-white/70 text-sm">Fax: 02-367-5590</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-white/60 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold">Email Us</p>
                          <p className="text-white/70 text-sm">info@hanjinthailand.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-white/60 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold">Office Hours</p>
                          <p className="text-white/70 text-sm">Mon-Fri: 8:00 AM - 6:00 PM</p>
                          <p className="text-white/70 text-sm">Sat: 9:00 AM - 2:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-white/70 text-xs">
                      <span className="font-semibold">Address:</span> 6th Floor, Sirinrat Building, 
                      3388/17-18 Rama IV Road, Khlong Tan, Khlong Toei, Bangkok 10110, Thailand
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}