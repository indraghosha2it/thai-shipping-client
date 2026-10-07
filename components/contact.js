
// "use client";

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {
//   Globe,
//   MapPin,
//   Truck,
//   Scale,
//   FileText,
//   User,
//   Mail,
//   Phone,
//   Building,
//   Home,
//   ClipboardList,
//   Send,
//   CheckCircle,
//   Clock,
//   Facebook,
//   Instagram,
//   Linkedin,
//   Twitter,
//   Youtube,
//   Loader2,
//   ArrowRight,
// } from 'lucide-react';

// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

// // All countries list
// const allCountries = [
//   "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
//   "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
//   "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
//   "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
//   "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
//   "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
//   "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia",
//   "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
//   "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica",
//   "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan",
//   "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
//   "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
//   "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
//   "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan",
//   "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
//   "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
//   "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
//   "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain",
//   "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
//   "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
//   "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
//   "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
// ];

// const socialIcons = {
//   facebook: Facebook,
//   instagram: Instagram,
//   linkedin: Linkedin,
//   twitter: Twitter,
//   youtube: Youtube,
// };

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     origin: '',
//     destination: '',
//     freightType: '',
//     weight: '',
//     dimensions: '',
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     address: '',
//     instructions: '',
//     agreeToTerms: false
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Footer settings state
//   const [footerSettings, setFooterSettings] = useState(null);
//   const [settingsLoading, setSettingsLoading] = useState(true);

//   const originOptions = ['China', 'Thailand'];
//   const freightTypeOptions = [
//     'Sea Freight (FCL)',
//     'Sea Freight (LCL)',
//     'Air Freight',
//     'Rail Freight',
//     'Express Delivery',
//     'Inland Transport',
//     'Door to Door'
//   ];

//   // ================= FETCH FOOTER SETTINGS =================
//   useEffect(() => {
//     let isMounted = true;

//     const fetchFooterSettings = async () => {
//       try {
//         const res = await fetch(`${API_URL}/footer-settings`, {
//           cache: 'no-store',
//         });
//         const json = await res.json();

//         if (isMounted && json.success) {
//           setFooterSettings(json.data);
//         }
//       } catch (err) {
//         console.error('Failed to load footer settings:', err);
//       } finally {
//         if (isMounted) setSettingsLoading(false);
//       }
//     };

//     fetchFooterSettings();
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   // ================= VALIDATION =================
//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.origin) newErrors.origin = 'Please select origin';
//     if (!formData.destination) newErrors.destination = 'Please select destination';
//     if (!formData.freightType) newErrors.freightType = 'Please select freight type';
//     if (!formData.weight.trim()) newErrors.weight = 'Weight is required';
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.address.trim()) newErrors.address = 'Address is required';

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone is required';
//     } else if (!/^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/.test(formData.phone)) {
//       newErrors.phone = 'Invalid phone number';
//     }

//     if (formData.weight && !/^\d*\.?\d+\s*(kg|g|lb|lbs)?$/.test(formData.weight)) {
//       newErrors.weight = 'Use format: 10kg, 5.5lbs';
//     }

//     if (!formData.agreeToTerms) {
//       newErrors.agreeToTerms = 'You must agree to terms';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));

//     if (errors[name]) {
//       setErrors(prev => {
//         const newErrors = { ...prev };
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       setIsSubmitting(true);

//       const loadingToast = toast.loading('Sending quote request...');

//       try {
//         const response = await fetch(`${API_URL}/request-quote`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//         });

//         let result;
//         const contentType = response.headers.get('content-type');
//         if (contentType && contentType.includes('application/json')) {
//           result = await response.json();
//         } else {
//           const text = await response.text();
//           throw new Error(`Server returned ${response.status}: ${text}`);
//         }

//         toast.dismiss(loadingToast);

//         if (response.ok && result.success) {
//           toast.success(
//             <div>
//               <strong>✓ Quote sent successfully!</strong>
//               <p style={{ fontSize: '14px', marginTop: '5px' }}>
//                 Quote ID: {result.quoteId}
//               </p>
//             </div>,
//             {
//               position: "top-right",
//               autoClose: 5000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//             }
//           );

//           setFormData({
//             origin: '', destination: '', freightType: '', weight: '', dimensions: '',
//             name: '', email: '', phone: '', company: '', address: '',
//             instructions: '', agreeToTerms: false
//           });
//           setErrors({});

//         } else {
//           toast.error(result?.message || 'Something went wrong', {
//             position: "top-right",
//             autoClose: 5000,
//           });
//         }
//       } catch (error) {
//         console.error('Submission error:', error);

//         toast.dismiss(loadingToast);

//         if (error.message.includes('Failed to fetch')) {
//           toast.error('⚠️ Cannot connect to server. Please make sure the backend is running.', {
//             position: "top-right",
//             autoClose: 5000,
//           });
//         } else {
//           toast.error('Error: ' + error.message, {
//             position: "top-right",
//             autoClose: 5000,
//           });
//         }
//       } finally {
//         setIsSubmitting(false);
//       }
//     } else {
//       const errorMessages = Object.values(errors).join('\n');
//       toast.error('Please fix the following errors:\n' + errorMessages, {
//         position: "top-right",
//         autoClose: 5000,
//       });
//     }
//   };

//   // ================= DYNAMIC CONTACT INFO =================
//   const contactInfo = footerSettings?.contactInfo || {};
//   const address = contactInfo?.address || {};
//   const fullAddress = [
//     address?.line1,
//     address?.line2,
//     address?.country,
//   ].filter(Boolean).join(', ');

//   const email = contactInfo?.email || 'info@thaishipping.com';
//   const phone = contactInfo?.phone || '+66 00 000 0000';
//   const companyName = footerSettings?.companyName || 'Thai Shipping';
//   const description = footerSettings?.description ||
//     'Connecting Thailand with global markets through reliable shipping, logistics and international trade solutions.';
//   const socialLinks = (footerSettings?.socialLinks || []).filter(s => s.isActive);

//   return (
//     <>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />

//       <main className="bg-white text-[#073155] -mt-6">
//         {/* ============================================================
//             HERO — compact, image accent only in header area
//         ============================================================ */}
//         <section className="relative isolate overflow-hidden bg-[#041B30]">
//           {/* Background image */}
//           <div
//             className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
//             style={{ backgroundImage: "url('/images/jin.PNG')" }}
//             aria-hidden="true"
//           />

//           {/* Left-to-right navy gradient */}
//           <div
//             className="absolute inset-0 -z-10"
//             style={{
//               background:
//                 'linear-gradient(90deg, rgba(4,27,48,0.95) 0%, rgba(4,27,48,0.85) 35%, rgba(7,49,85,0.55) 65%, rgba(4,27,48,0.65) 100%)',
//             }}
//             aria-hidden="true"
//           />

//           {/* Orange glow */}
//           <div
//             className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-72 w-72 rounded-full bg-[#E96C35]/15 blur-[100px]"
//             aria-hidden="true"
//           />

//           <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="max-w-3xl"
//             >
//               <div className="mb-5 flex items-center gap-3">
//                 <span className="h-px w-9 bg-[#E96C35]" />
//                 <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F2A57C]">
//                   Contact · Get a Quote
//                 </span>
//               </div>

//               <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[52px]">
//                 Let&apos;s Move Your
//                 <span className="block text-[#E96C35]">Cargo Together</span>
//               </h1>

//               <p className="mt-5 max-w-2xl text-[14.5px] leading-7 text-white/80 sm:text-base">
//                 Fill in the form below and our team will respond within
//                 2–4 business hours. Or reach us directly using the contact
//                 details provided on this page.
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* ============================================================
//             MAIN CONTENT — white background
//         ============================================================ */}
//         <section className="py-12 sm:py-16 lg:py-20">
//           <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
//             <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
//               {/* ============ LEFT: CONTACT INFO ============ */}
//               <motion.aside
//                 initial={{ opacity: 0, y: 24 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.55, delay: 0.1 }}
//                 className="flex flex-col gap-5"
//               >
//                 {/* Company card */}
//                 <div className="rounded-2xl border border-[#E5E9EF] bg-[#F8FAFC] p-6">
//                   <div className="mb-5 flex items-center gap-3">
//                     <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#073155] text-white">
//                       <Building className="h-5 w-5" strokeWidth={1.9} />
//                     </div>
//                     <div>
//                       <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E96C35]">
//                         Company
//                       </p>
//                       <p className="mt-0.5 text-lg font-semibold text-[#073155]">
//                         {companyName}
//                       </p>
//                     </div>
//                   </div>

//                   <p className="text-[13.5px] leading-6 text-[#5A6B7B]">
//                     {description}
//                   </p>
//                 </div>

//                 {/* Contact details */}
//                 <div className="rounded-2xl border border-[#E5E9EF] bg-white p-6">
//                   <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96C35]">
//                     Contact Information
//                   </p>

//                   {settingsLoading ? (
//                     <div className="space-y-5">
//                       {[1, 2, 3].map((i) => (
//                         <div key={i} className="flex items-center gap-3">
//                           <div className="h-10 w-10 shrink-0 animate-pulse rounded-lg bg-[#E5E9EF]" />
//                           <div className="flex-1 space-y-2">
//                             <div className="h-2.5 w-16 animate-pulse rounded bg-[#E5E9EF]" />
//                             <div className="h-3 w-40 animate-pulse rounded bg-[#E5E9EF]" />
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <ul className="space-y-5">
//                       {/* Phone */}
//                       <li>
//                         <a
//                           href={`tel:${phone.replace(/\s+/g, '')}`}
//                           className="group flex items-start gap-3.5"
//                         >
//                           <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E5E9EF] bg-[#F8FAFC] text-[#E96C35] transition-all duration-300 group-hover:border-[#E96C35] group-hover:bg-[#E96C35] group-hover:text-white">
//                             <Phone className="h-4 w-4" strokeWidth={1.9} />
//                           </span>
//                           <div className="min-w-0">
//                             <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A94A6]">
//                               Phone
//                             </p>
//                             <p className="mt-1 break-all text-[14px] font-semibold text-[#073155] transition-colors duration-300 group-hover:text-[#E96C35]">
//                               {phone}
//                             </p>
//                           </div>
//                         </a>
//                       </li>

//                       {/* Email */}
//                       <li>
//                         <a
//                           href={`mailto:${email}`}
//                           className="group flex items-start gap-3.5"
//                         >
//                           <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E5E9EF] bg-[#F8FAFC] text-[#E96C35] transition-all duration-300 group-hover:border-[#E96C35] group-hover:bg-[#E96C35] group-hover:text-white">
//                             <Mail className="h-4 w-4" strokeWidth={1.9} />
//                           </span>
//                           <div className="min-w-0">
//                             <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A94A6]">
//                               Email
//                             </p>
//                             <p className="mt-1 break-all text-[14px] font-semibold text-[#073155] transition-colors duration-300 group-hover:text-[#E96C35]">
//                               {email}
//                             </p>
//                           </div>
//                         </a>
//                       </li>

//                       {/* Address */}
//                       {fullAddress && (
//                         <li>
//                           <div className="flex items-start gap-3.5">
//                             <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E5E9EF] bg-[#F8FAFC] text-[#E96C35]">
//                               <MapPin className="h-4 w-4" strokeWidth={1.9} />
//                             </span>
//                             <div className="min-w-0">
//                               <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A94A6]">
//                                 Address
//                               </p>
//                               <p className="mt-1 text-[14px] font-medium leading-6 text-[#073155]">
//                                 {fullAddress}
//                               </p>
//                             </div>
//                           </div>
//                         </li>
//                       )}

//                       {/* Response time */}
//                       <li className="flex items-start gap-3.5">
//                         <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E5E9EF] bg-[#F8FAFC] text-[#E96C35]">
//                           <Clock className="h-4 w-4" strokeWidth={1.9} />
//                         </span>
//                         <div className="min-w-0">
//                           <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A94A6]">
//                             Response Time
//                           </p>
//                           <p className="mt-1 text-[14px] font-medium text-[#073155]">
//                             Within 2–4 business hours
//                           </p>
//                         </div>
//                       </li>
//                     </ul>
//                   )}
//                 </div>

//                 {/* Socials */}
//                 {!settingsLoading && socialLinks.length > 0 && (
//                   <div className="rounded-2xl border border-[#E5E9EF] bg-white p-6">
//                     <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96C35]">
//                       Follow Us
//                     </p>

//                     <div className="flex flex-wrap gap-2.5">
//                       {socialLinks.map((s) => {
//                         const Icon = socialIcons[s.platform];
//                         if (!Icon) return null;
//                         return (
//                           <a
//                             key={s.platform}
//                             href={s.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             aria-label={s.platform}
//                             className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E9EF] bg-[#F8FAFC] text-[#5A6B7B] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E96C35] hover:bg-[#E96C35] hover:text-white"
//                           >
//                             <Icon className="h-4 w-4" strokeWidth={1.9} />
//                           </a>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}

//                 {/* Help note */}
//                 <div className="rounded-2xl border border-[#E96C35]/20 bg-[#FFF6F1] p-5">
//                   <div className="flex items-start gap-3">
//                     <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E96C35] text-white">
//                       <ArrowRight className="h-4 w-4" strokeWidth={2} />
//                     </span>
//                     <div>
//                       <p className="text-[13px] font-semibold text-[#073155]">
//                         Prefer to talk?
//                       </p>
//                       <p className="mt-1 text-[12.5px] leading-5 text-[#5A6B7B]">
//                         Call us directly or send an email — we respond within
//                         a few hours during business days.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.aside>

//               {/* ============ RIGHT: FORM ============ */}
//               <motion.form
//                 initial={{ opacity: 0, y: 24 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.55, delay: 0.2 }}
//                 onSubmit={handleSubmit}
//                 className="relative overflow-hidden rounded-2xl border border-[#E5E9EF] bg-white p-6 sm:p-8"
//               >
//                 {/* Soft top accent */}
//                 <span
//                   className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#E96C35] via-[#F2A57C] to-[#E96C35]/30"
//                   aria-hidden="true"
//                 />

//                 <div className="mb-7 flex items-center gap-3">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#073155] text-white">
//                     <FileText className="h-5 w-5" strokeWidth={1.9} />
//                   </div>
//                   <div>
//                     <h2 className="text-lg font-semibold text-[#073155]">
//                       Request a Shipping Quote
//                     </h2>
//                     <p className="mt-0.5 text-[12.5px] text-[#8A94A6]">
//                       All fields marked with * are required
//                     </p>
//                   </div>
//                 </div>

//                 <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
//                   {/* Shipment Info */}
//                   <div className="space-y-4">
//                     <div className="mb-1 flex items-center gap-2">
//                       <Truck className="h-4 w-4 text-[#E96C35]" />
//                       <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#073155]">
//                         Shipment Details
//                       </h3>
//                     </div>

//                     <Select
//                       label="Origin"
//                       name="origin"
//                       value={formData.origin}
//                       onChange={handleChange}
//                       options={originOptions}
//                       error={errors.origin}
//                       icon={<Globe className="w-4 h-4" />}
//                       placeholder="Select origin country"
//                     />

//                     <Select
//                       label="Destination"
//                       name="destination"
//                       value={formData.destination}
//                       onChange={handleChange}
//                       options={allCountries}
//                       error={errors.destination}
//                       icon={<MapPin className="w-4 h-4" />}
//                       placeholder="Select destination country"
//                       searchable={true}
//                     />

//                     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                       <Select
//                         label="Freight Type"
//                         name="freightType"
//                         value={formData.freightType}
//                         onChange={handleChange}
//                         options={freightTypeOptions}
//                         error={errors.freightType}
//                         icon={<Truck className="w-4 h-4" />}
//                         placeholder="Select type"
//                       />
//                       <Input
//                         label="Weight"
//                         name="weight"
//                         placeholder="e.g., 100kg"
//                         value={formData.weight}
//                         onChange={handleChange}
//                         error={errors.weight}
//                         icon={<Scale className="w-4 h-4" />}
//                         required
//                       />
//                     </div>

//                     <div>
//                       <label className="mb-2 flex items-center gap-2 text-[13px] font-semibold text-[#073155]">
//                         <ClipboardList className="w-4 h-4 text-[#E96C35]" />
//                         <span>Special Instructions (Optional)</span>
//                       </label>
//                       <textarea
//                         name="instructions"
//                         rows={3}
//                         placeholder="Any special requirements or additional information..."
//                         value={formData.instructions}
//                         onChange={handleChange}
//                         className="w-full resize-none rounded-xl border border-[#E5E9EF] bg-white px-3.5 py-3 text-[13.5px] text-[#073155] outline-none transition-all duration-300 placeholder:text-[#A5AFB5] hover:border-[#C8D0DA] focus:border-[#E96C35]/50 focus:ring-4 focus:ring-[#E96C35]/10"
//                       />
//                     </div>
//                   </div>

//                   {/* Contact Info */}
//                   <div className="space-y-4">
//                     <div className="mb-1 flex items-center gap-2">
//                       <User className="h-4 w-4 text-[#E96C35]" />
//                       <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#073155]">
//                         Your Information
//                       </h3>
//                     </div>

//                     <Input
//                       label="Full Name"
//                       name="name"
//                       placeholder="John Doe"
//                       value={formData.name}
//                       onChange={handleChange}
//                       error={errors.name}
//                       icon={<User className="w-4 h-4" />}
//                       required
//                     />

//                     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                       <Input
//                         label="Email"
//                         name="email"
//                         type="email"
//                         placeholder="you@example.com"
//                         value={formData.email}
//                         onChange={handleChange}
//                         error={errors.email}
//                         icon={<Mail className="w-4 h-4" />}
//                         required
//                       />
//                       <Input
//                         label="Phone"
//                         name="phone"
//                         type="tel"
//                         placeholder="+66 12 345 6789"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         error={errors.phone}
//                         icon={<Phone className="w-4 h-4" />}
//                         required
//                       />
//                     </div>

//                     <Input
//                       label="Company"
//                       name="company"
//                       placeholder="Company name (optional)"
//                       value={formData.company}
//                       onChange={handleChange}
//                       icon={<Building className="w-4 h-4" />}
//                     />

//                     <Input
//                       label="Address"
//                       name="address"
//                       placeholder="Street, City, Zip Code"
//                       value={formData.address}
//                       onChange={handleChange}
//                       error={errors.address}
//                       icon={<Home className="w-4 h-4" />}
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Terms */}
//                 <div className="mt-7 border-t border-[#EEF1F5] pt-6">
//                   <label className="flex cursor-pointer items-start gap-3">
//                     <input
//                       type="checkbox"
//                       name="agreeToTerms"
//                       checked={formData.agreeToTerms}
//                       onChange={handleChange}
//                       className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-[#C8D0DA] text-[#E96C35] accent-[#E96C35] focus:ring-[#E96C35]/30"
//                     />
//                     <span className="text-[13px] leading-6 text-[#5A6B7B]">
//                       I agree to the{" "}
//                       <a
//                         href="/footer/terms"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="font-semibold text-[#E96C35] transition-colors hover:text-[#C95020] hover:underline"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         Terms &amp; Conditions
//                       </a>{" "}
//                       and{" "}
//                       <a
//                         href="/privacy-policy"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="font-semibold text-[#E96C35] transition-colors hover:text-[#C95020] hover:underline"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         Privacy Policy
//                       </a>
//                       .
//                     </span>
//                   </label>

//                   {errors.agreeToTerms && (
//                     <p className="mt-3 flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[12.5px] text-red-600">
//                       <CheckCircle className="h-3.5 w-3.5" />
//                       <span>{errors.agreeToTerms}</span>
//                     </p>
//                   )}
//                 </div>

//                 {/* Submit */}
//                 <div className="mt-7 flex justify-center">
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="group inline-flex min-w-[240px] items-center justify-center gap-3 rounded-xl bg-[#E96C35] px-8 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#E96C35]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d55f2b] hover:shadow-xl hover:shadow-[#E96C35]/35 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <Loader2 className="h-4 w-4 animate-spin" />
//                         Sending Request...
//                       </>
//                     ) : (
//                       <>
//                         Get Your Quote
//                         <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </motion.form>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

// // =================== INPUT COMPONENT ===================
// function Input({ label, name, type = 'text', placeholder, value, onChange, error, icon, hint, required }) {
//   return (
//     <div>
//       <label htmlFor={name} className="mb-2 flex items-center gap-2 text-[13px] font-semibold text-[#073155]">
//         <span className="text-[#E96C35]">{icon}</span>
//         <span className="flex items-center gap-1">
//           {label}
//           {required && <span className="text-[#E96C35]">*</span>}
//         </span>
//       </label>
//       <input
//         id={name}
//         name={name}
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         className={`
//           w-full rounded-xl border bg-white px-3.5 py-2.5 text-[13.5px] text-[#073155] outline-none transition-all duration-300 placeholder:text-[#A5AFB5]
//           ${error
//             ? 'border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-500/10'
//             : 'border-[#E5E9EF] hover:border-[#C8D0DA] focus:border-[#E96C35]/50 focus:ring-4 focus:ring-[#E96C35]/10'
//           }
//         `}
//       />
//       {error && (
//         <p className="mt-2 flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[12.5px] text-red-600">
//           <CheckCircle className="h-3.5 w-3.5" />
//           <span>{error}</span>
//         </p>
//       )}
//       {hint && !error && (
//         <p className="mt-2 text-[11.5px] italic text-[#8A94A6]">{hint}</p>
//       )}
//     </div>
//   );
// }

// // =================== SELECT COMPONENT ===================
// function Select({ label, name, value, onChange, options, error, icon, placeholder, searchable = false }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isOpen, setIsOpen] = useState(false);

//   const filteredOptions = options.filter(option =>
//     option.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (searchable) {
//     return (
//       <div>
//         <label htmlFor={name} className="mb-2 flex items-center gap-2 text-[13px] font-semibold text-[#073155]">
//           <span className="text-[#E96C35]">{icon}</span> {label}
//         </label>
//         <div className="relative">
//           <div
//             onClick={() => setIsOpen(!isOpen)}
//             className={`
//               w-full cursor-pointer rounded-xl border bg-white px-3.5 py-2.5 text-[13.5px] outline-none transition-all duration-300
//               ${error ? 'border-red-300' : 'border-[#E5E9EF] hover:border-[#C8D0DA]'}
//               ${!value ? 'text-[#A5AFB5]' : 'text-[#073155]'}
//             `}
//           >
//             {value || placeholder}
//           </div>
//           <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
//             <svg className="h-4 w-4 text-[#8A94A6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>

//           {isOpen && (
//             <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl border border-[#E5E9EF] bg-white shadow-2xl">
//               <input
//                 type="text"
//                 placeholder="Search country..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full border-b border-[#EEF1F5] bg-[#F8FAFC] px-3.5 py-2.5 text-[13.5px] text-[#073155] outline-none placeholder:text-[#A5AFB5]"
//                 onClick={(e) => e.stopPropagation()}
//                 autoFocus
//               />
//               <div className="max-h-52 overflow-y-auto">
//                 {filteredOptions.map((option) => (
//                   <div
//                     key={option}
//                     onClick={() => {
//                       onChange({ target: { name, value: option } });
//                       setIsOpen(false);
//                       setSearchTerm('');
//                     }}
//                     className="cursor-pointer px-3.5 py-2 text-[13.5px] text-[#3F4B59] transition-colors hover:bg-[#FFF6F1] hover:text-[#E96C35]"
//                   >
//                     {option}
//                   </div>
//                 ))}
//                 {filteredOptions.length === 0 && (
//                   <div className="px-3.5 py-2.5 text-[13px] text-[#8A94A6]">
//                     No countries found
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//         {error && (
//           <p className="mt-2 flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[12.5px] text-red-600">
//             <CheckCircle className="h-3.5 w-3.5" />
//             <span>{error}</span>
//           </p>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <label htmlFor={name} className="mb-2 flex items-center gap-2 text-[13px] font-semibold text-[#073155]">
//         <span className="text-[#E96C35]">{icon}</span> {label}
//       </label>
//       <div className="relative">
//         <select
//           id={name}
//           name={name}
//           value={value}
//           onChange={onChange}
//           className={`
//             w-full cursor-pointer appearance-none rounded-xl border bg-white px-3.5 py-2.5 text-[13.5px] text-[#073155] outline-none transition-all duration-300
//             ${error
//               ? 'border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-500/10'
//               : 'border-[#E5E9EF] hover:border-[#C8D0DA] focus:border-[#E96C35]/50 focus:ring-4 focus:ring-[#E96C35]/10'
//             }
//             ${!value && 'text-[#A5AFB5]'}
//           `}
//         >
//           <option value="" disabled className="text-[#A5AFB5]">
//             {placeholder}
//           </option>
//           {options.map((option) => (
//             <option key={option} value={option} className="text-[#073155]">
//               {option}
//             </option>
//           ))}
//         </select>
//         <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
//           <svg className="h-4 w-4 text-[#8A94A6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </div>
//       </div>
//       {error && (
//         <p className="mt-2 flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[12.5px] text-red-600">
//           <CheckCircle className="h-3.5 w-3.5" />
//           <span>{error}</span>
//         </p>
//       )}
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Globe,
  MapPin,
  Truck,
  Scale,
  FileText,
  User,
  Mail,
  Phone,
  Building,
  Home,
  ClipboardList,
  Send,
  CheckCircle,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Loader2,
  ArrowRight,
} from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

// All countries list
const allCountries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
  "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
  "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
  "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
  "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia",
  "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
  "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica",
  "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan",
  "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
  "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain",
  "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
  "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
  "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
  "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    freightType: '',
    weight: '',
    dimensions: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    instructions: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Footer settings state
  const [footerSettings, setFooterSettings] = useState(null);
  const [settingsLoading, setSettingsLoading] = useState(true);

  const originOptions = ['China', 'Thailand'];
  const freightTypeOptions = [
    'Sea Freight (FCL)',
    'Sea Freight (LCL)',
    'Air Freight',
    'Rail Freight',
    'Express Delivery',
    'Inland Transport',
    'Door to Door'
  ];

  // ================= FETCH FOOTER SETTINGS =================
  useEffect(() => {
    let isMounted = true;

    const fetchFooterSettings = async () => {
      try {
        const res = await fetch(`${API_URL}/footer-settings`, {
          cache: 'no-store',
        });
        const json = await res.json();

        if (isMounted && json.success) {
          setFooterSettings(json.data);
        }
      } catch (err) {
        console.error('Failed to load footer settings:', err);
      } finally {
        if (isMounted) setSettingsLoading(false);
      }
    };

    fetchFooterSettings();
    return () => {
      isMounted = false;
    };
  }, []);

  // ================= VALIDATION =================
  const validateForm = () => {
    const newErrors = {};

    if (!formData.origin) newErrors.origin = 'Please select origin';
    if (!formData.destination) newErrors.destination = 'Please select destination';
    if (!formData.freightType) newErrors.freightType = 'Please select freight type';
    if (!formData.weight.trim()) newErrors.weight = 'Weight is required';
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (formData.weight && !/^\d*\.?\d+\s*(kg|g|lb|lbs)?$/.test(formData.weight)) {
      newErrors.weight = 'Use format: 10kg, 5.5lbs';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      const loadingToast = toast.loading('Sending quote request...');

      try {
        const response = await fetch(`${API_URL}/request-quote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        let result;
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          result = await response.json();
        } else {
          const text = await response.text();
          throw new Error(`Server returned ${response.status}: ${text}`);
        }

        toast.dismiss(loadingToast);

        if (response.ok && result.success) {
          toast.success(
            <div>
              <strong>✓ Quote sent successfully!</strong>
              <p style={{ fontSize: '14px', marginTop: '5px' }}>
                Quote ID: {result.quoteId}
              </p>
            </div>,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );

          setFormData({
            origin: '', destination: '', freightType: '', weight: '', dimensions: '',
            name: '', email: '', phone: '', company: '', address: '',
            instructions: '', agreeToTerms: false
          });
          setErrors({});

        } else {
          toast.error(result?.message || 'Something went wrong', {
            position: "top-right",
            autoClose: 5000,
          });
        }
      } catch (error) {
        console.error('Submission error:', error);

        toast.dismiss(loadingToast);

        if (error.message.includes('Failed to fetch')) {
          toast.error('⚠️ Cannot connect to server. Please make sure the backend is running.', {
            position: "top-right",
            autoClose: 5000,
          });
        } else {
          toast.error('Error: ' + error.message, {
            position: "top-right",
            autoClose: 5000,
          });
        }
      } finally {
        setIsSubmitting(false);
      }
    } else {
      const errorMessages = Object.values(errors).join('\n');
      toast.error('Please fix the following errors:\n' + errorMessages, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  // ================= DYNAMIC CONTACT INFO =================
  const contactInfo = footerSettings?.contactInfo || {};
  const address = contactInfo?.address || {};
  const fullAddress = [
    address?.line1,
    address?.line2,
    address?.country,
  ].filter(Boolean).join(', ');

  const email = contactInfo?.email || 'info@thaishipping.com';
  const phone = contactInfo?.phone || '+66 00 000 0000';
  const companyName = footerSettings?.companyName || 'Thai Shipping';
  const description = footerSettings?.description ||
    'Connecting Thailand with global markets through reliable shipping, logistics and international trade solutions.';
  const socialLinks = (footerSettings?.socialLinks || []).filter(s => s.isActive);

  return (
    <>
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

      <main className="bg-white text-[#073155] -mt-6">
        {/* ============================================================
            HERO — background image instead of solid bg color
        ============================================================ */}
        <section
          className="relative isolate overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/contact.jpg')" }}
        >
          {/* Soft navy overlay so white text stays readable */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                'linear-gradient(90deg, rgba(4,27,48,0.95) 0%, rgba(4,27,48,0.85) 35%, rgba(7,49,85,0.55) 65%, rgba(4,27,48,0.65) 100%)',
            }}
            aria-hidden="true"
          />

          {/* Orange glow */}
          <div
            className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-72 w-72 rounded-full bg-[#E96C35]/15 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#E96C35]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F2A57C]">
                  Contact · Get a Quote
                </span>
              </div>

              <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[52px]">
                Let&apos;s Move Your
                <span className="block text-[#E96C35]">Cargo Together</span>
              </h1>

              <p className="mt-5 max-w-2xl text-[14.5px] leading-7 text-white/80 sm:text-base">
                Fill in the form below and our team will respond within
                2–4 business hours. Or reach us directly using the contact
                details provided on this page.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            MAIN CONTENT — white background
        ============================================================ */}
        <section className="bg-[#F4F7FA] py-12 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
              {/* ============ LEFT: CONTACT INFO ============ */}
              <motion.aside
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="flex flex-col gap-5"
              >
                {/* Company card */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-900/[0.03]">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#073155] text-white">
                      <Building className="h-5 w-5" strokeWidth={1.9} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E96C35]">
                        Company
                      </p>
                      <p className="mt-0.5 text-lg font-semibold text-[#073155]">
                        {companyName}
                      </p>
                    </div>
                  </div>

                  <p className="text-[13.5px] leading-6 text-[#5A6B7B]">
                    {description}
                  </p>
                </div>

                {/* Contact details */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-900/[0.03]">
                  <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96C35]">
                    Contact Information
                  </p>

                  {settingsLoading ? (
                    <div className="space-y-5">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="h-10 w-10 shrink-0 animate-pulse rounded-lg bg-[#E5E9EF]" />
                          <div className="flex-1 space-y-2">
                            <div className="h-2.5 w-16 animate-pulse rounded bg-[#E5E9EF]" />
                            <div className="h-3 w-40 animate-pulse rounded bg-[#E5E9EF]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-5">
                      {/* Phone */}
                      <li>
                        <a
                          href={`tel:${phone.replace(/\s+/g, '')}`}
                          className="group flex items-start gap-3.5"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E5E9EF] bg-[#F8FAFC] text-[#E96C35] transition-all duration-300 group-hover:border-[#E96C35] group-hover:bg-[#E96C35] group-hover:text-white">
                            <Phone className="h-4 w-4" strokeWidth={1.9} />
                          </span>
                          <div className="min-w-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A94A6]">
                              Phone
                            </p>
                            <p className="mt-1 break-all text-[14px] font-semibold text-[#073155] transition-colors duration-300 group-hover:text-[#E96C35]">
                              {phone}
                            </p>
                          </div>
                        </a>
                      </li>

                      {/* Email */}
                      <li>
                        <a
                          href={`mailto:${email}`}
                          className="group flex items-start gap-3.5"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E5E9EF] bg-[#F8FAFC] text-[#E96C35] transition-all duration-300 group-hover:border-[#E96C35] group-hover:bg-[#E96C35] group-hover:text-white">
                            <Mail className="h-4 w-4" strokeWidth={1.9} />
                          </span>
                          <div className="min-w-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A94A6]">
                              Email
                            </p>
                            <p className="mt-1 break-all text-[14px] font-semibold text-[#073155] transition-colors duration-300 group-hover:text-[#E96C35]">
                              {email}
                            </p>
                          </div>
                        </a>
                      </li>

                      {/* Address */}
                      {fullAddress && (
                        <li>
                          <div className="flex items-start gap-3.5">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E5E9EF] bg-[#F8FAFC] text-[#E96C35]">
                              <MapPin className="h-4 w-4" strokeWidth={1.9} />
                            </span>
                            <div className="min-w-0">
                              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A94A6]">
                                Address
                              </p>
                              <p className="mt-1 text-[14px] font-medium leading-6 text-[#073155]">
                                {fullAddress}
                              </p>
                            </div>
                          </div>
                        </li>
                      )}

                      {/* Response time */}
                      <li className="flex items-start gap-3.5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E5E9EF] bg-[#F8FAFC] text-[#E96C35]">
                          <Clock className="h-4 w-4" strokeWidth={1.9} />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A94A6]">
                            Response Time
                          </p>
                          <p className="mt-1 text-[14px] font-medium text-[#073155]">
                            Within 2–4 business hours
                          </p>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>

                {/* Socials */}
                {!settingsLoading && socialLinks.length > 0 && (
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-900/[0.03]">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96C35]">
                      Follow Us
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                      {socialLinks.map((s) => {
                        const Icon = socialIcons[s.platform];
                        if (!Icon) return null;
                        return (
                          <a
                            key={s.platform}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.platform}
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E9EF] bg-[#F8FAFC] text-[#5A6B7B] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E96C35] hover:bg-[#E96C35] hover:text-white"
                          >
                            <Icon className="h-4 w-4" strokeWidth={1.9} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Help note */}
                <div className="rounded-2xl border border-orange-200/70 bg-orange-50/70 p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E96C35] text-white">
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-[#073155]">
                        Prefer to talk?
                      </p>
                      <p className="mt-1 text-[12.5px] leading-5 text-[#5A6B7B]">
                        Call us directly or send an email — we respond within
                        a few hours during business days.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.aside>

              {/* ============ RIGHT: FORM ============ */}
              <motion.form
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-900/[0.06] sm:p-8 lg:p-10"
              >
                {/* Soft top accent */}
                <span
                  className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#E96C35] via-[#F2A57C] to-[#E96C35]/30"
                  aria-hidden="true"
                />

                <div className="mb-7 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#073155] text-white">
                    <FileText className="h-5 w-5" strokeWidth={1.9} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-[#073155]">
                      Request a Shipping Quote
                    </h2>
                    <p className="mt-0.5 text-[12.5px] text-[#8A94A6]">
                      All fields marked with * are required
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                  {/* Shipment Info */}
                  <div className="space-y-4">
                    <div className="mb-1 flex items-center gap-2">
                      <Truck className="h-4 w-4 text-[#E96C35]" />
                      <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#073155]">
                        Shipment Details
                      </h3>
                    </div>

                    <Select
                      label="Origin"
                      name="origin"
                      value={formData.origin}
                      onChange={handleChange}
                      options={originOptions}
                      error={errors.origin}
                      icon={<Globe className="w-4 h-4" />}
                      placeholder="Select origin country"
                    />

                    <Select
                      label="Destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      options={allCountries}
                      error={errors.destination}
                      icon={<MapPin className="w-4 h-4" />}
                      placeholder="Select destination country"
                      searchable={true}
                    />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Select
                        label="Freight Type"
                        name="freightType"
                        value={formData.freightType}
                        onChange={handleChange}
                        options={freightTypeOptions}
                        error={errors.freightType}
                        icon={<Truck className="w-4 h-4" />}
                        placeholder="Select type"
                      />
                      <Input
                        label="Weight"
                        name="weight"
                        placeholder="e.g., 100kg"
                        value={formData.weight}
                        onChange={handleChange}
                        error={errors.weight}
                        icon={<Scale className="w-4 h-4" />}
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 flex items-center gap-2 text-[13px] font-semibold text-[#073155]">
                        <ClipboardList className="w-4 h-4 text-[#E96C35]" />
                        <span>Special Instructions (Optional)</span>
                      </label>
                      <textarea
                        name="instructions"
                        rows={3}
                        placeholder="Any special requirements or additional information..."
                        value={formData.instructions}
                        onChange={handleChange}
                        className="w-full resize-none rounded-xl border border-[#E5E9EF] bg-white px-3.5 py-3 text-[13.5px] text-[#073155] outline-none transition-all duration-300 placeholder:text-[#A5AFB5] hover:border-[#C8D0DA] focus:border-[#E96C35]/50 focus:ring-4 focus:ring-[#E96C35]/10"
                      />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <div className="mb-1 flex items-center gap-2">
                      <User className="h-4 w-4 text-[#E96C35]" />
                      <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#073155]">
                        Your Information
                      </h3>
                    </div>

                    <Input
                      label="Full Name"
                      name="name"
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      icon={<User className="w-4 h-4" />}
                      required
                    />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        icon={<Mail className="w-4 h-4" />}
                        required
                      />
                      <Input
                        label="Phone"
                        name="phone"
                        type="tel"
                        placeholder="+66 XX XXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        icon={<Phone className="w-4 h-4" />}
                        required
                      />
                    </div>

                    <Input
                      label="Company"
                      name="company"
                      placeholder="Company name (optional)"
                      value={formData.company}
                      onChange={handleChange}
                      icon={<Building className="w-4 h-4" />}
                    />

                    <Input
                      label="Address"
                      name="address"
                      placeholder="Street, City, Zip Code"
                      value={formData.address}
                      onChange={handleChange}
                      error={errors.address}
                      icon={<Home className="w-4 h-4" />}
                      required
                    />
                  </div>
                </div>

                {/* Terms */}
                <div className="mt-7 border-t border-[#EEF1F5] pt-6">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-[#C8D0DA] text-[#E96C35] accent-[#E96C35] focus:ring-[#E96C35]/30"
                    />
                    <span className="text-[13px] leading-6 text-[#5A6B7B]">
                      I agree to the{" "}
                    
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#E96C35] transition-colors hover:text-[#C95020] hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>

                  {errors.agreeToTerms && (
                    <p className="mt-3 flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[12.5px] text-red-600">
                      <CheckCircle className="h-3.5 w-3.5" />
                      <span>{errors.agreeToTerms}</span>
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="mt-7 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex min-w-[240px] items-center justify-center gap-3 rounded-xl bg-[#E96C35] px-8 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#E96C35]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d55f2b] hover:shadow-xl hover:shadow-[#E96C35]/35 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Get Your Quote
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// =================== INPUT COMPONENT ===================
function Input({ label, name, type = 'text', placeholder, value, onChange, error, icon, hint, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 flex items-center gap-2 text-[13px] font-semibold text-[#073155]">
        <span className="text-[#E96C35]">{icon}</span>
        <span className="flex items-center gap-1">
          {label}
          {required && <span className="text-[#E96C35]">*</span>}
        </span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full rounded-xl border bg-white px-3.5 py-2.5 text-[13.5px] text-[#073155] outline-none transition-all duration-300 placeholder:text-[#A5AFB5]
          ${error
            ? 'border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-500/10'
            : 'border-[#E5E9EF] hover:border-[#C8D0DA] focus:border-[#E96C35]/50 focus:ring-4 focus:ring-[#E96C35]/10'
          }
        `}
      />
      {error && (
        <p className="mt-2 flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[12.5px] text-red-600">
          <CheckCircle className="h-3.5 w-3.5" />
          <span>{error}</span>
        </p>
      )}
      {hint && !error && (
        <p className="mt-2 text-[11.5px] italic text-[#8A94A6]">{hint}</p>
      )}
    </div>
  );
}

// =================== SELECT COMPONENT ===================
function Select({ label, name, value, onChange, options, error, icon, placeholder, searchable = false }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (searchable) {
    return (
      <div>
        <label htmlFor={name} className="mb-2 flex items-center gap-2 text-[13px] font-semibold text-[#073155]">
          <span className="text-[#E96C35]">{icon}</span> {label}
        </label>
        <div className="relative">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`
              w-full cursor-pointer rounded-xl border bg-white px-3.5 py-2.5 text-[13.5px] outline-none transition-all duration-300
              ${error ? 'border-red-300' : 'border-[#E5E9EF] hover:border-[#C8D0DA]'}
              ${!value ? 'text-[#A5AFB5]' : 'text-[#073155]'}
            `}
          >
            {value || placeholder}
          </div>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
            <svg className="h-4 w-4 text-[#8A94A6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {isOpen && (
            <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl border border-[#E5E9EF] bg-white shadow-2xl">
              <input
                type="text"
                placeholder="Search country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border-b border-[#EEF1F5] bg-[#F8FAFC] px-3.5 py-2.5 text-[13.5px] text-[#073155] outline-none placeholder:text-[#A5AFB5]"
                onClick={(e) => e.stopPropagation()}
                autoFocus
              />
              <div className="max-h-52 overflow-y-auto">
                {filteredOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      onChange({ target: { name, value: option } });
                      setIsOpen(false);
                      setSearchTerm('');
                    }}
                    className="cursor-pointer px-3.5 py-2 text-[13.5px] text-[#3F4B59] transition-colors hover:bg-[#FFF6F1] hover:text-[#E96C35]"
                  >
                    {option}
                  </div>
                ))}
                {filteredOptions.length === 0 && (
                  <div className="px-3.5 py-2.5 text-[13px] text-[#8A94A6]">
                    No countries found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {error && (
          <p className="mt-2 flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[12.5px] text-red-600">
            <CheckCircle className="h-3.5 w-3.5" />
            <span>{error}</span>
          </p>
        )}
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={name} className="mb-2 flex items-center gap-2 text-[13px] font-semibold text-[#073155]">
        <span className="text-[#E96C35]">{icon}</span> {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`
            w-full cursor-pointer appearance-none rounded-xl border bg-white px-3.5 py-2.5 text-[13.5px] text-[#073155] outline-none transition-all duration-300
            ${error
              ? 'border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-500/10'
              : 'border-[#E5E9EF] hover:border-[#C8D0DA] focus:border-[#E96C35]/50 focus:ring-4 focus:ring-[#E96C35]/10'
            }
            ${!value && 'text-[#A5AFB5]'}
          `}
        >
          <option value="" disabled className="text-[#A5AFB5]">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="text-[#073155]">
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
          <svg className="h-4 w-4 text-[#8A94A6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && (
        <p className="mt-2 flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[12.5px] text-red-600">
          <CheckCircle className="h-3.5 w-3.5" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}