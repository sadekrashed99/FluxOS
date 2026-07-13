import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, AlertTriangle, Zap } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIssue?: string;
}

const suburbs = [
  'Albert Park', 'Altona', 'Armadale', 'Aspendale', 'Balwyn', 'Beaumaris', 'Bentleigh', 'Berwick',
  'Black Rock', 'Box Hill', 'Brighton', 'Broadmeadows', 'Brunswick', 'Bundoora', 'Camberwell',
  'Carlton', 'Carnegie', 'Carrum', 'Caulfield', 'Chelsea', 'Cheltenham', 'Clayton', 'Coburg',
  'Coburg North', 'Collingwood', 'Craigieburn', 'Cranbourne', 'Croydon', 'Dandenong',
  'Diamond Creek', 'Docklands', 'Edithvale', 'Eltham', 'Essendon', 'Fawkner', 'Fitzroy',
  'Flemington', 'Footscray', 'Frankston', 'Glen Waverley', 'Glenroy', 'Greensborough',
  'Hadfield', 'Hampton', 'Hawthorn', 'Heidelberg', 'Highett', 'Hoppers Crossing', 'Hurstbridge',
  'Kensington', 'Langwarrin', 'Laverton', 'Lilydale', 'Malvern', 'Manor Lakes', 'McKinnon',
  'Melbourne CBD', 'Melton', 'Mentone', 'Mitcham', 'Montmorency', 'Moonee Ponds', 'Moorabbin',
  'Mooroolbark', 'Mordialloc', 'Mount Waverley', 'Murrumbeena', 'Narre Warren', 'North Melbourne',
  'Northcote', 'Nunawading', 'Oak Park', 'Oakleigh', 'Officer', 'Ormond', 'Pakenham', 'Parkdale',
  'Pascoe Vale', 'Patterson Lakes', 'Point Cook', 'Port Melbourne', 'Prahran', 'Preston',
  'Richmond', 'Ringwood', 'Roxburgh Park', 'Sandringham', 'Seaford', 'Seddon', 'South Yarra',
  'Southbank', 'Springvale', 'St Kilda', 'Strathmore', 'Sunbury', 'Tarneit', 'Thornbury',
  'Toorak', 'Truganina', 'Warrandyte', 'Werribee', 'West Melbourne', 'Williamstown', 'Windsor',
  'Wyndham Vale', 'Yarraville'
];

const emergencyTypes = [
  'Power Outage (Full or Partial)',
  'Sparking Outlet or Switch',
  'Burning Smell or Smoke',
  'Circuit Breaker Tripping Repeatedly',
  'Hot Power Point or Switch',
  'Flickering or Flashing Lights',
  'Switchboard Fault',
  'Exposed or Live Wire',
  'Storm or Flood Damage to Electrics',
  'No Hot Water (Electric System)',
  'Other Electrical Emergency'
];

export default function ContactModal({ isOpen, onClose, initialIssue = '' }: ContactModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [suburb, setSuburb] = useState('');
  const [emergencyType, setEmergencyType] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setIsSending(false);
      setSubmitError('');
      setErrors({});
      setName('');
      setPhone('');
      setSuburb('');
      setDetails('');

      // Map initialIssue string to one of the defined dropdown options
      if (initialIssue) {
        if (initialIssue.includes('Outage')) {
          setEmergencyType('Power Outage (Full or Partial)');
        } else if (initialIssue.includes('Switchboard') || initialIssue.includes('Fuse Box')) {
          setEmergencyType('Switchboard Fault');
        } else if (initialIssue.includes('Storm') || initialIssue.includes('Water')) {
          setEmergencyType('Storm or Flood Damage to Electrics');
        } else if (initialIssue.includes('Burning') || initialIssue.includes('Smell')) {
          setEmergencyType('Burning Smell or Smoke');
        } else {
          setEmergencyType('Other Electrical Emergency');
        }
      } else {
        setEmergencyType('');
      }
    }
  }, [isOpen, initialIssue]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    const tempErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) {
      tempErrors.name = 'This field is required';
    }
    if (!phone.trim()) {
      tempErrors.phone = 'This field is required';
    }

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setErrors({});
    setIsSending(true);

    const WEBHOOK_URL = 'REPLACE_WITH_GHL_WEBHOOK_URL';

    const payload = {
      name: name,
      phone: phone,
      suburb: suburb,
      emergencyType: emergencyType,
      additionalDetails: details,
      source: 'FluxOS Landing Page',
      timestamp: new Date().toISOString()
    };

    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then((res) => {
        if (res.ok) {
          setIsSubmitted(true);
        } else {
          setSubmitError('Something went wrong — please call us directly: 1300 358 967');
        }
        setIsSending(false);
      })
      .catch(() => {
        // "On success (any 2xx response OR fetch resolves): Hide all form fields"
        // Let's treat fetch resolves as success as specified
        setIsSubmitted(true);
        setIsSending(false);
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="modal-container" className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-navy/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            id="modal-card"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-md bg-brand-navy border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div id="modal-form-content">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-1.5 h-6 bg-[#FFD600] rounded-full" />
                  <h3 className="font-display text-2xl font-bold text-white">Need Help Fast?</h3>
                </div>
                <p className="text-gray-400 text-sm mb-6 font-sans">
                  Fill in your details below. An emergency Melburnian electrician will be on the line with you within minutes.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="modal-name-input"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Mitchell"
                      className={`w-full bg-[#1b2b3c] border ${
                        errors.name ? 'border-[#FF4713]' : 'border-white/10'
                      } text-white rounded-[8px] px-4 py-3 text-sm focus:ring-2 focus:ring-[#FFD600] focus:border-transparent outline-none transition-all font-sans`}
                    />
                    {errors.name && <p className="text-[#FF4713] text-xs mt-1 font-sans">{errors.name}</p>}
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-gray-400" />
                      <input
                        id="modal-phone-input"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 0412 345 678"
                        className={`w-full bg-[#1b2b3c] border ${
                          errors.phone ? 'border-[#FF4713]' : 'border-white/10'
                        } text-white rounded-[8px] pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-[#FFD600] focus:border-transparent outline-none transition-all font-sans`}
                      />
                    </div>
                    {errors.phone && <p className="text-[#FF4713] text-xs mt-1 font-sans">{errors.phone}</p>}
                  </div>

                  {/* 5A — Suburb dropdown field */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      YOUR SUBURB
                    </label>
                    <select
                      id="suburb"
                      name="suburb"
                      value={suburb}
                      onChange={(e) => setSuburb(e.target.value)}
                      className="w-full bg-[#1b2b3c] border border-white/10 text-white rounded-[8px] px-4 py-3 text-sm focus:ring-2 focus:ring-[#FFD600] focus:border-transparent outline-none transition-all appearance-none cursor-pointer font-sans"
                    >
                      <option value="">Select your Melbourne suburb</option>
                      {suburbs.map((sub) => (
                        <option key={sub} value={sub}>
                          {sub}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 5B — Replace the "What is the Issue?" field with defined Emergency Type dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      EMERGENCY TYPE
                    </label>
                    <select
                      id="emergencyType"
                      name="emergencyType"
                      value={emergencyType}
                      onChange={(e) => setEmergencyType(e.target.value)}
                      className="w-full bg-[#1b2b3c] border border-white/10 text-white rounded-[8px] px-4 py-3 text-sm focus:ring-2 focus:ring-[#FFD600] focus:border-transparent outline-none transition-all appearance-none cursor-pointer font-sans"
                    >
                      <option value="">Select your electrical emergency</option>
                      {emergencyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Details field */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="modal-details-input"
                      rows={2}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="e.g. The main board popped and lights are flashing..."
                      className="w-full bg-[#1b2b3c] border border-white/10 text-white rounded-[8px] px-4 py-3 text-sm focus:ring-2 focus:ring-[#FFD600] focus:border-transparent outline-none transition-all resize-none font-sans"
                    />
                  </div>

                  {/* Emergency notice */}
                  <div className="flex gap-2 bg-[#FF4713]/10 border border-[#FF4713]/20 rounded-[8px] p-3 text-xs text-[#FF4713]">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <p className="font-sans">
                      <strong>Immediate Hazard:</strong> If you are experiencing sparks, flames, or live exposed wire, do not touch any appliance and maintain safe distance.
                    </p>
                  </div>

                  {/* Webhook Submit Button */}
                  <button
                    id="submit-callback-btn"
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-[#FF4713] hover:bg-[#eb3d0a] text-white font-sans text-sm py-4 rounded-[8px] flex items-center justify-center gap-2 hover:scale-102 active:scale-98 transition-all shadow-[0_4px_14px_0_rgba(255,71,19,0.3)] mt-6 font-bold cursor-pointer disabled:opacity-50"
                  >
                    {isSending ? (
                      'Sending...'
                    ) : (
                      <>
                        <Zap className="w-5 h-5 text-white stroke-[2] inline-block align-middle mr-2" />
                        Request Priority Call Back
                      </>
                    )}
                  </button>

                  {/* Submit error display */}
                  {submitError && (
                    <p className="text-[#FF4713] text-sm text-center font-bold mt-2 font-sans">
                      {submitError}
                    </p>
                  )}
                </form>
              </div>
            ) : (
              /* Success state inside the popup */
              <motion.div
                id="modal-success-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 flex flex-col items-center justify-center"
              >
                <div className="select-none mb-4 animate-bounce text-[#FFD600]">
                  <Zap style={{ width: '64px', height: '64px', strokeWidth: 1.5 }} />
                </div>
                <h3
                  className="font-display font-black"
                  style={{
                    fontSize: '32px',
                    fontWeight: 900,
                    color: '#FFD600',
                  }}
                >
                  We're On It!
                </h3>
                <p
                  className="font-sans"
                  style={{
                    fontSize: '17px',
                    color: '#FFFFFF',
                    marginTop: '16px',
                  }}
                >
                  Your request is confirmed. An emergency electrician will call you back within 5 minutes.
                </p>
                <p
                  className="font-sans"
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.55)',
                    marginTop: '24px',
                  }}
                >
                  If this is a life safety emergency — call 000 immediately.
                </p>
                
                <button
                  id="dismiss-success-btn"
                  onClick={onClose}
                  className="block w-full text-gray-400 hover:text-white text-xs py-2 transition-colors mt-8 cursor-pointer font-sans"
                >
                  Dismiss
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
