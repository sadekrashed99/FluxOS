import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, CheckCircle, Clock, Send, AlertTriangle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIssue?: string;
}

export default function ContactModal({ isOpen, onClose, initialIssue = '' }: ContactModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [issue, setIssue] = useState(initialIssue);
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(299); // 5 minutes in seconds (299s)
  const [errors, setErrors] = useState<{ name?: string; phone?: string; issue?: string }>({});

  useEffect(() => {
    if (isOpen) {
      setIssue(initialIssue || '');
      setIsSubmitted(false);
      setCountdown(299);
      setErrors({});
    }
  }, [isOpen, initialIssue]);

  // Simulated countdown for the callback
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSubmitted && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isSubmitted, countdown]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const validate = () => {
    const tempErrors: typeof errors = {};
    if (!name.trim()) tempErrors.name = 'Please enter your name';
    if (!phone.trim()) {
      tempErrors.phone = 'Please enter your phone number';
    } else if (!/^(?:\+?61|0)4\d{8}$|^(?:1300|1800)\s?\d{3}\s?\d{3}$|^\d{8,10}$/.test(phone.replace(/\s+/g, ''))) {
      tempErrors.phone = 'Please enter a valid phone number (e.g., 0412 345 678)';
    }
    if (!issue) tempErrors.issue = 'Please select your issue';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
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
            className="absolute inset-0 bg-brand-navy/80 backdrop-blur-md"
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
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div id="modal-form-content">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-1.5 h-6 bg-brand-yellow rounded-full" />
                  <h3 className="font-display text-2xl font-bold text-white">Need Help Fast?</h3>
                </div>
                <p className="text-gray-400 text-sm mb-6">
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
                      className={`w-full bg-brand-navy-light border ${
                        errors.name ? 'border-brand-orange' : 'border-white/10'
                      } text-white rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all`}
                    />
                    {errors.name && <p className="text-brand-orange text-xs mt-1">{errors.name}</p>}
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
                        className={`w-full bg-brand-navy-light border ${
                          errors.phone ? 'border-brand-orange' : 'border-white/10'
                        } text-white rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all`}
                      />
                    </div>
                    {errors.phone && <p className="text-brand-orange text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Issue dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      What is the issue?
                    </label>
                    <select
                      id="modal-issue-select"
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                      className={`w-full bg-brand-navy-light border ${
                        errors.issue ? 'border-brand-orange' : 'border-white/10'
                      } text-white rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all appearance-none cursor-pointer`}
                    >
                      <option value="">Select your electrical concern</option>
                      <option value="Complete Power Outage">Complete Power Outage</option>
                      <option value="Sparking Switchboard / Fuse Box">Sparking Switchboard / Fuse Box</option>
                      <option value="Burning Smell / Smoke">Burning Smell / Smoke</option>
                      <option value="Tripping Safety Switch">Tripping Safety Switch</option>
                      <option value="Storm / Water Damage to Power">Storm / Water Damage to Power</option>
                      <option value="Exposed Live Wiring">Exposed Live Wiring</option>
                      <option value="Flickering Lights / Outlets">Flickering Lights / Outlets</option>
                      <option value="Other Urgency">Other Urgent Concern</option>
                    </select>
                    {errors.issue && <p className="text-brand-orange text-xs mt-1">{errors.issue}</p>}
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
                      className="w-full bg-brand-navy-light border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Emergency notice */}
                  <div className="flex gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-xl p-3 text-xs text-brand-orange">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <p>
                      <strong>Immediate Hazard:</strong> If you are experiencing sparks, flames, or live exposed wire, do not touch any appliance and maintain safe distance.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-callback-btn"
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-button text-sm py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-102 active:scale-98 transition-all shadow-[0_4px_14px_0_rgba(255,71,19,0.3)] mt-6 font-bold"
                  >
                    <Send className="w-4 h-4" />
                    Request Priority Call Back
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                id="modal-success-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Priority Call Booked!</h3>
                <p className="text-gray-300 text-sm max-w-sm mx-auto mb-6">
                  Thanks <strong>{name}</strong>, we've registered your emergency regarding <strong>{issue}</strong>. A Melbourne technician has been alerted and is calling you right now:
                </p>

                {/* Countdown Block */}
                <div className="bg-brand-navy-light border border-brand-yellow/20 rounded-2xl p-5 max-w-xs mx-auto mb-6 glow-yellow">
                  <span className="block text-xs font-semibold text-brand-yellow uppercase tracking-wider mb-1">
                    Estimated Time to Connection
                  </span>
                  <div className="flex items-center justify-center gap-2 font-mono text-3xl font-extrabold text-white">
                    <Clock className="w-6 h-6 text-brand-yellow animate-pulse" />
                    {formatTime(countdown)}
                  </div>
                  <span className="block text-[10px] text-gray-400 mt-2">
                    Our current average dispatch delay is under 5 minutes
                  </span>
                </div>

                <div className="space-y-3 max-w-xs mx-auto">
                  <a
                    id="direct-call-success-link"
                    href="tel:1300358967"
                    className="block w-full bg-brand-yellow hover:bg-brand-yellow/90 text-brand-navy font-bold text-sm py-3.5 rounded-xl transition-all shadow-[0_0_15px_rgba(255,214,0,0.3)] hover:scale-102 active:scale-98"
                  >
                    📞 Call Now
                  </a>
                  <button
                    id="dismiss-success-btn"
                    onClick={onClose}
                    className="block w-full text-gray-400 hover:text-white text-xs py-2 transition-colors"
                  >
                    Close & Keep Waiting
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
