

// "use client";
// import React, { useState } from 'react';
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
//   CheckCircle
// } from 'lucide-react';

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

// export default function RequestQuote() {
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
//   const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

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
//           toast.error('⚠️ Cannot connect to server. Please make sure the backend is running on port 8000.', {
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
//         theme="dark"
//       />
      
//       <section className="relative py-8 px-4 flex items-center justify-center min-h-screen overflow-hidden">
        
//         {/* Background Image with Warm Overlay */}
//         <div className="absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-[url('/images/jin.PNG')] bg-cover bg-center bg-fixed" />
//           <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/65 via-[#16213e]/60 to-[#0f3460]/55 backdrop-blur-sm" />
//         </div>

//         {/* Floating Particles */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-500" />
//         </div>

//         <div className="relative max-w-5xl mx-auto w-full z-10">
          
//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-8 text-center"
//           >
//             <div className="flex justify-center mb-3">
//               <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
//             </div>
            
//             <h2 className="text-2xl md:text-3xl font-bold mb-2">
//               <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
//                 Your Global Shipping Partner – Get Your Instant Quote Today
//               </span>
//             </h2>
//             <p className="text-white/60 text-sm">Fill out the form below and our team will respond within 2-4 hours</p>
//           </motion.div>

//           {/* Form Card - Warm Glassmorphism */}
//           <motion.form
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             onSubmit={handleSubmit}
//             className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 shadow-2xl relative overflow-hidden"
//           >
            
//             {/* Decorative Elements */}
//             <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
            
//             <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 relative z-10">

//               {/* Shipment Info */}
//               <div className="space-y-3 md:space-y-4">
//                 <div className="flex items-center gap-3 mb-4 md:mb-5">
//                   <div className="w-9 h-9 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center">
//                     <FileText className="w-5 h-5 text-orange-400" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-white">Shipment & Cargo Details</h3>
//                 </div>

//                 <Select
//                   label="Origin"
//                   name="origin"
//                   value={formData.origin}
//                   onChange={handleChange}
//                   options={originOptions}
//                   error={errors.origin}
//                   icon={<Globe className="w-4 h-4" />}
//                   placeholder="Select origin country"
//                 />
                
//                 <Select
//                   label="Destination"
//                   name="destination"
//                   value={formData.destination}
//                   onChange={handleChange}
//                   options={allCountries}
//                   error={errors.destination}
//                   icon={<MapPin className="w-4 h-4" />}
//                   placeholder="Select destination country"
//                   searchable={true}
//                 />
                
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   <Select
//                     label="Freight Type"
//                     name="freightType"
//                     value={formData.freightType}
//                     onChange={handleChange}
//                     options={freightTypeOptions}
//                     error={errors.freightType}
//                     icon={<Truck className="w-4 h-4" />}
//                     placeholder="Select type"
//                   />
//                   <Input
//                     label="Weight"
//                     name="weight"
//                     placeholder="e.g., 100kg"
//                     value={formData.weight}
//                     onChange={handleChange}
//                     error={errors.weight}
//                     icon={<Scale className="w-4 h-4" />}
//                     required
//                   />
//                 </div>

//                 <div className="mt-1">
//                   <label className="text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
//                     <ClipboardList className="w-4 h-4 text-orange-400" />
//                     <span>Special Instructions (Optional)</span>
//                   </label>
//                   <textarea
//                     name="instructions"
//                     rows={3}
//                     placeholder="Any special requirements or additional information..."
//                     value={formData.instructions}
//                     onChange={handleChange}
//                     className="w-full bg-white/5 backdrop-blur-sm border border-white/10 focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/10 rounded-xl px-4 py-3 outline-none transition-all duration-300 hover:border-white/20 text-sm text-white placeholder:text-white/40 resize-none"
//                   />
//                 </div>
//               </div>

//               {/* Contact Info */}
//               <div className="space-y-3 md:space-y-4">
//                 <div className="flex items-center gap-3 mb-4 md:mb-5">
//                   <div className="w-9 h-9 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center">
//                     <User className="w-5 h-5 text-orange-400" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-white">Contact Information</h3>
//                 </div>

//                 <Input
//                   label="Full Name"
//                   name="name"
//                   placeholder="John Doe"
//                   value={formData.name}
//                   onChange={handleChange}
//                   error={errors.name}
//                   icon={<User className="w-4 h-4" />}
//                 />
                
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   <Input
//                     label="Email"
//                     name="email"
//                     type="email"
//                     placeholder="example@email.com"
//                     value={formData.email}
//                     onChange={handleChange}
//                     error={errors.email}
//                     icon={<Mail className="w-4 h-4" />}
//                   />
//                   <Input
//                     label="Phone"
//                     name="phone"
//                     type="tel"
//                     placeholder="+1 234 567 8900"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     error={errors.phone}
//                     icon={<Phone className="w-4 h-4" />}
//                   />
//                 </div>
                
//                 <Input
//                   label="Company"
//                   name="company"
//                   placeholder="Company Name (Optional)"
//                   value={formData.company}
//                   onChange={handleChange}
//                   icon={<Building className="w-4 h-4" />}
//                 />
                
//                 <Input
//                   label="Address"
//                   name="address"
//                   placeholder="Street, City, Zip Code"
//                   value={formData.address}
//                   onChange={handleChange}
//                   error={errors.address}
//                   icon={<Home className="w-4 h-4" />}
//                 />
//               </div>
//             </div>

//             {/* Terms */}
//             <div className="mt-4 md:mt-5 relative z-10">
//               <label className="flex items-start gap-3 cursor-pointer group">
//                 <input
//                   type="checkbox"
//                   name="agreeToTerms"
//                   checked={formData.agreeToTerms}
//                   onChange={handleChange}
//                   className="w-5 h-5 mt-0.5 accent-orange-500 rounded border-white/20 bg-white/5 text-orange-500 focus:ring-orange-500/20 focus:ring-offset-0"
//                 />
//                 <span className="text-white/70 text-sm">
//                   I agree to the{" "}
//                   <a 
//                     href="/footer/terms" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-orange-400 font-medium hover:text-orange-300 hover:underline cursor-pointer transition-colors"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     Terms & Conditions
//                   </a>{" "}
//                   and{" "}
//                   <a 
//                     href="/footer/privacy-policy" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-orange-400 font-medium hover:text-orange-300 hover:underline cursor-pointer transition-colors"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     Privacy Policy
//                   </a>.
//                 </span>
//               </label>
//               {errors.agreeToTerms && (
//                 <p className="mt-2 text-sm text-red-300 flex items-center gap-1 bg-red-500/20 backdrop-blur px-3 py-2 rounded-lg">
//                   <CheckCircle className="w-3 h-3" />
//                   <span>{errors.agreeToTerms}</span>
//                 </p>
//               )}
//             </div>

//             {/* Button */}
//             <div className="mt-6 md:mt-6 text-center relative z-10">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="relative group bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold px-10 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-lg min-w-[220px]"
//               >
//                 <span className="flex items-center justify-center gap-3">
//                   {isSubmitting ? (
//                     <>
//                       <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Sending Request...
//                     </>
//                   ) : (
//                     <>
//                       Get Your Quote
//                       <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     </>
//                   )}
//                 </span>
//               </button>
//             </div>

//           </motion.form>
//         </div>
//       </section>
//     </>
//   );
// }

// // Input Component - Professional Style
// function Input({ label, name, type = 'text', placeholder, value, onChange, error, icon, hint, required }) {
//   return (
//     <div>
//       <label htmlFor={name} className="text-sm font-medium text-white/70 mb-2 flex items-center gap-2">
//         <span className="text-orange-400">{icon}</span>
//         <span className="flex items-center gap-1">
//           {label}
//           {required && <span className="text-orange-400">*</span>}
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
//           w-full bg-white/5 backdrop-blur-sm border rounded-xl px-3 py-2 outline-none transition-all duration-300 text-sm text-white placeholder:text-white/40
//           ${error 
//             ? 'border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-500/20' 
//             : 'border-white/10 focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/10'
//           }
//           hover:border-white/20
//         `}
//       />
//       {error && (
//         <p className="mt-2 text-sm text-red-300 flex items-center gap-1 bg-red-500/20 backdrop-blur px-3 py-2 rounded-lg">
//           <CheckCircle className="w-3 h-3" />
//           <span>{error}</span>
//         </p>
//       )}
//       {hint && !error && (
//         <p className="mt-2 text-xs text-white/40 italic">{hint}</p>
//       )}
//     </div>
//   );
// }

// // Select Component with Search
// function Select({ label, name, value, onChange, options, error, icon, placeholder, searchable = false }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   const filteredOptions = options.filter(option => 
//     option.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (searchable) {
//     return (
//       <div>
//         <label htmlFor={name} className="text-sm font-medium text-white/70 mb-2 flex items-center gap-2">
//           <span className="text-orange-400">{icon}</span> {label}
//         </label>
//         <div className="relative">
//           <div
//             onClick={() => setIsOpen(!isOpen)}
//             className={`
//               w-full bg-white/5 backdrop-blur-sm border rounded-xl px-3 py-2 outline-none cursor-pointer transition-all duration-300 text-sm
//               ${error 
//                 ? 'border-red-400' 
//                 : 'border-white/10 hover:border-white/20'
//               }
//               ${!value ? 'text-white/40' : 'text-white'}
//             `}
//           >
//             {value || placeholder}
//           </div>
//           <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
//             <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>
          
//           {isOpen && (
//             <div className="absolute z-20 mt-2 w-full bg-[#1a1a2e] border border-white/10 rounded-xl shadow-xl max-h-60 overflow-y-auto">
//               <input
//                 type="text"
//                 placeholder="Search country..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full bg-[#16213e] border-b border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none rounded-t-xl"
//                 onClick={(e) => e.stopPropagation()}
//               />
//               <div className="max-h-48 overflow-y-auto">
//                 {filteredOptions.map((option) => (
//                   <div
//                     key={option}
//                     onClick={() => {
//                       onChange({ target: { name, value: option } });
//                       setIsOpen(false);
//                       setSearchTerm('');
//                     }}
//                     className="px-3 py-2 text-sm text-white hover:bg-orange-500/20 cursor-pointer transition-colors"
//                   >
//                     {option}
//                   </div>
//                 ))}
//                 {filteredOptions.length === 0 && (
//                   <div className="px-3 py-2 text-sm text-white/40">No countries found</div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//         {error && (
//           <p className="mt-2 text-sm text-red-300 flex items-center gap-1 bg-red-500/20 backdrop-blur px-3 py-2 rounded-lg">
//             <CheckCircle className="w-3 h-3" />
//             <span>{error}</span>
//           </p>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <label htmlFor={name} className="text-sm font-medium text-white/70 mb-2 flex items-center gap-2">
//         <span className="text-orange-400">{icon}</span> {label}
//       </label>
//       <div className="relative">
//         <select
//           id={name}
//           name={name}
//           value={value}
//           onChange={onChange}
//           className={`
//             w-full bg-white/5 backdrop-blur-sm border rounded-xl px-3 py-2 outline-none appearance-none cursor-pointer transition-all duration-300 text-sm text-white
//             ${error 
//               ? 'border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-500/20' 
//               : 'border-white/10 focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/10'
//             }
//             hover:border-white/20
//             ${!value && 'text-white/40'}
//           `}
//         >
//           <option value="" disabled className="bg-[#1a1a2e] text-white/40">{placeholder}</option>
//           {options.map((option) => (
//             <option key={option} value={option} className="bg-[#1a1a2e] text-white">
//               {option}
//             </option>
//           ))}
//         </select>
//         <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
//           <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </div>
//       </div>
//       {error && (
//         <p className="mt-2 text-sm text-red-300 flex items-center gap-1 bg-red-500/20 backdrop-blur px-3 py-2 rounded-lg">
//           <CheckCircle className="w-3 h-3" />
//           <span>{error}</span>
//         </p>
//       )}
//     </div>
//   );
// }


"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  FileText,
  Globe2,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function RequestQuote() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F8F9F7]
        py-10
        sm:py-14
        lg:py-20
      "
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            MAIN CARD
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-[#E6EAE7]
            bg-white
            shadow-[0_18px_55px_rgba(30,45,40,0.08)]
          "
        >

          <div className="grid lg:grid-cols-[48%_52%]">

            {/* =================================================
                LEFT — IMAGE
            ================================================== */}

            <div
              className="
                relative
                min-h-[280px]
                sm:min-h-[360px]
                lg:min-h-[500px]
                overflow-hidden
              "
            >

              {/* Main image */}
              <div
                className="
                  absolute
                  inset-0
                  bg-cover
                  bg-center
                  lg:[clip-path:polygon(0_0,87%_0,100%_50%,87%_100%,0_100%)]
                "
                style={{
                  backgroundImage:
                    "url('/images/cta.jpg')",
                }}
              />

              {/* Image overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#102D3A]/85
                  via-[#102D3A]/25
                  to-transparent
                  lg:[clip-path:polygon(0_0,87%_0,100%_50%,87%_100%,0_100%)]
                "
              />

              {/* Image content */}
              <div
                className="
                  absolute
                  bottom-7
                  left-6
                  right-10
                  z-10
                  sm:bottom-9
                  sm:left-8
                  lg:bottom-10
                  lg:left-10
                "
              >

                <div className="mb-3 flex items-center gap-2">

                  <span className="h-[2px] w-7 bg-[#E96C35]" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-white/80
                      sm:text-xs
                    "
                  >
                    Global Logistics
                  </span>

                </div>

                <h2
                  className="
                    max-w-[430px]
                    text-2xl
                    font-bold
                    leading-[1.08]
                    tracking-tight
                    text-white
                    sm:text-3xl
                    lg:text-[40px]
                  "
                >
                  Move Your Cargo
                  <br />

                  <span className="text-[#F18A59]">
                    With Confidence
                  </span>
                </h2>

                <p
                  className="
                    mt-3
                    max-w-[400px]
                    text-xs
                    leading-5
                    text-white/75
                    sm:text-sm
                  "
                >
                  Reliable shipping solutions designed to move your
                  cargo safely, efficiently, and on time.
                </p>

              </div>

            </div>

            {/* =================================================
                RIGHT — CTA CONTENT
            ================================================== */}

            <div
              className="
                flex
                items-center
                px-6
                py-9
                sm:px-10
                sm:py-11
                lg:px-12
                lg:py-12
              "
            >

              <div className="w-full max-w-[520px]">

                {/* Small label */}
                <div className="mb-3 flex items-center gap-2">

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#FFF1EA]
                    "
                  >
                    <Truck
                      className="h-4 w-4 text-[#E96C35]"
                    />
                  </span>

                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#073155]
                    "
                  >
                    Shipping Made Simple
                  </span>

                </div>

                {/* Heading */}
                <h3
                  className="
                    text-2xl
                    font-bold
                    leading-[1.12]
                    tracking-tight
                    text-[#073155]
                    sm:text-3xl
                    lg:text-[38px]
                  "
                >
                  Ready to Move
                  <br />

                  <span className="text-[#E96C35]">
                    Your Shipment?
                  </span>
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-4
                    max-w-[470px]
                    text-sm
                    leading-6
                    text-[#737B7E]
                    sm:text-[15px]
                  "
                >
                  Whether you need a shipping quote or want to
                  arrange your next shipment, our team is ready
                  to help you find the right logistics solution.
                </p>

                {/* =================================================
                    BENEFITS
                ================================================== */}

                <div
                  className="
                    mt-6
                    grid
                    grid-cols-1
                    gap-3
                    sm:grid-cols-3
                  "
                >

                  {/* Item */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2.5
                      rounded-xl
                      border
                      border-[#E9ECEA]
                      bg-[#FAFBFA]
                      px-3
                      py-3
                    "
                  >
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#FFF1EA]
                      "
                    >
                      <Globe2
                        className="h-4 w-4 text-[#E96C35]"
                      />
                    </span>

                    <div>
                      <p className="text-xs font-bold text-[#27353B]">
                        Global Reach
                      </p>

                      <p className="mt-0.5 text-[10px] text-[#8A9295]">
                        Worldwide shipping
                      </p>
                    </div>
                  </div>

                  {/* Item */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2.5
                      rounded-xl
                      border
                      border-[#E9ECEA]
                      bg-[#FAFBFA]
                      px-3
                      py-3
                    "
                  >
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#FFF1EA]
                      "
                    >
                      <ShieldCheck
                        className="h-4 w-4 text-[#E96C35]"
                      />
                    </span>

                    <div>
                      <p className="text-xs font-bold text-[#27353B]">
                        Secure
                      </p>

                      <p className="mt-0.5 text-[10px] text-[#8A9295]">
                        Reliable handling
                      </p>
                    </div>
                  </div>

                  {/* Item */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2.5
                      rounded-xl
                      border
                      border-[#E9ECEA]
                      bg-[#FAFBFA]
                      px-3
                      py-3
                    "
                  >
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#FFF1EA]
                      "
                    >
                      <Truck
                        className="h-4 w-4 text-[#E96C35]"
                      />
                    </span>

                    <div>
                      <p className="text-xs font-bold text-[#27353B]">
                        Efficient
                      </p>

                      <p className="mt-0.5 text-[10px] text-[#8A9295]">
                        On-time delivery
                      </p>
                    </div>
                  </div>

                </div>

                {/* =================================================
                    BUTTONS
                ================================================== */}

                <div
                  className="
                    mt-7
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                  "
                >

                  {/* REQUEST QUOTE */}

                  <a
                    href="/contact#request-quote"
                    className="
                      group
                      inline-flex
                      min-h-[46px]
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-[#E96C35]
                      px-6
                      text-sm
                      font-semibold
                      text-white
                      shadow-[0_8px_20px_rgba(233,108,53,0.20)]
                      transition-all
                      duration-300
                      hover:bg-[#D95E2A]
                      hover:shadow-[0_10px_25px_rgba(233,108,53,0.28)]
                      sm:flex-1
                    "
                  >

                    <FileText className="h-4 w-4" />

                    Request a Quote

                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                  </a>

                  {/* CREATE BOOKING */}

                  <a
                    href="/tracking-number/"
                    className="
                      group
                      inline-flex
                      min-h-[46px]
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      border
                      border-[#DDE2DF]
                      bg-white
                      px-6
                      text-sm
                      font-semibold
                      text-[#26363C]
                      transition-all
                      duration-300
                      hover:border-[#E96C35]
                      hover:bg-[#FFF8F4]
                      hover:text-[#D95E2A]
                      sm:flex-1
                    "
                  >

                    <CalendarCheck className="h-4 w-4" />

                   Track Shipment

                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                  </a>

                </div>

                {/* Bottom note */}
                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    border-t
                    border-[#ECEFEC]
                    pt-4
                  "
                >

                  <span className="h-1.5 w-1.5 rounded-full bg-[#E96C35]" />

                  <p className="text-[11px] text-[#8A9295]">
                    Our logistics team is ready to assist with
                    your shipment requirements.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}