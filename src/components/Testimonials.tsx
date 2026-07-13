import { motion } from 'motion/react';
import { Star, Quote, Heart } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      initial: 'M',
      name: 'Mark T. — Fitzroy',
      location: 'Fitzroy, VIC',
      rating: 5,
      text: 'Woke up to a burning smell at 4am. Called FluxOS and they were here in 45 minutes. Found a melting wire in the roof space. Literally saved our house. Can\'t thank them enough.',
      date: '2 weeks ago',
    },
    {
      initial: 'J',
      name: 'Jessica L. — Toorak',
      location: 'Toorak, VIC',
      rating: 5,
      text: 'Half the house lost power on Christmas Eve. Other places said they wouldn\'t come out until after Boxing Day. FluxOS showed up, diagnosed a faulty safety switch, and fixed it on the spot. Great service.',
      date: '1 month ago',
    },
    {
      initial: 'D',
      name: 'David W. — Essendon',
      location: 'Essendon, VIC',
      rating: 5,
      text: 'Very professional. The electrician explained exactly what was wrong and how much it would cost before starting. Left the place cleaner than he found it. Highly recommend.',
      date: '3 days ago',
    },
    {
      initial: 'S',
      name: 'Sarah M. — Box Hill',
      location: 'Box Hill, VIC',
      rating: 5,
      text: 'Our power went out completely during a severe thunderstorm. The technician arrived armed with professional diagnostics tools and got our power restored within 50 minutes. Excellent service!',
      date: '5 days ago',
    },
    {
      initial: 'M',
      name: 'Michael S. — St Kilda',
      location: 'St Kilda, VIC',
      rating: 5,
      text: 'Extremely quick response. A sparking outlet in the kitchen was diagnosed and fully replaced safely in under an hour. Outstanding communication from the dispatcher.',
      date: '1 week ago',
    },
    {
      initial: 'E',
      name: 'Emma K. — Bundoora',
      location: 'Bundoora, VIC',
      rating: 5,
      text: 'Fantastic lifetime workmanship guarantee. They resolved our switchboard tripping issue instantly. Very friendly and professional crew.',
      date: '3 weeks ago',
    },
  ];

  return (
    <section id="reviews" className="bg-brand-navy py-20 relative overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-brand-yellow/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Title & Aggregated Score block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/20 rounded-full mb-4">
            <Heart className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-yellow">
              Customer Feedback
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Don't just take our word for it
          </h2>

          {/* Average Rating Widget */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-brand-navy-light/50 border border-white/10 rounded-2xl px-6 py-3 mt-2 shadow-inner">
            <div className="flex text-brand-yellow gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
              ))}
            </div>
            <p className="text-white font-sans text-sm font-semibold">
              <span className="text-brand-yellow">4.9/5 Average</span> based on 1000+ emergency calls
            </p>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="bg-brand-navy-light/30 border border-white/5 rounded-2xl p-6 md:p-8 relative hover:border-white/10 hover:bg-brand-navy-light/50 transition-all duration-300 text-left flex flex-col justify-between"
            >
              {/* Card Accent Quote Icon */}
              <div className="absolute top-6 right-6 text-white/5">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex text-brand-yellow gap-0.5 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans italic relative z-10">
                  "{rev.text}"
                </p>
              </div>

              {/* User Avatar & Identity info */}
              <div className="flex items-center gap-3.5 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow flex items-center justify-center font-display font-black text-brand-navy text-sm shadow-md shrink-0">
                  {rev.initial}
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-white">
                    {rev.name}
                  </p>
                  <p className="font-sans text-xs text-gray-400">
                    {rev.location}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-gray-500 ml-auto">{rev.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
