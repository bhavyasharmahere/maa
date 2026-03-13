import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Award, Clock, Phone } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: '15+ Years',
    rating: 4.9,
    image: 'SJ',
    color: 'from-rose-400 to-red-500',
    available: true,
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    experience: '20+ Years',
    rating: 4.8,
    image: 'MC',
    color: 'from-purple-400 to-indigo-500',
    available: true,
  },
  {
    name: 'Dr. Emily Williams',
    specialty: 'Pediatrician',
    experience: '12+ Years',
    rating: 4.9,
    image: 'EW',
    color: 'from-pink-400 to-rose-500',
    available: false,
  },
  {
    name: 'Dr. James Anderson',
    specialty: 'Orthopedic Surgeon',
    experience: '18+ Years',
    rating: 4.7,
    image: 'JA',
    color: 'from-amber-400 to-orange-500',
    available: true,
  },
  {
    name: 'Dr. Lisa Thompson',
    specialty: 'Dermatologist',
    experience: '10+ Years',
    rating: 4.8,
    image: 'LT',
    color: 'from-teal-400 to-cyan-500',
    available: true,
  },
  {
    name: 'Dr. Robert Garcia',
    specialty: 'General Surgeon',
    experience: '22+ Years',
    rating: 4.9,
    image: 'RG',
    color: 'from-blue-400 to-indigo-500',
    available: true,
  },
];

export function Doctors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="doctors" className="py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Our Experts
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Expert
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Medical Team
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team of highly qualified doctors are dedicated to providing you 
            with the best possible care using their expertise and experience.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300"
            >
              {/* Image Area */}
              <div className={`relative h-64 bg-gradient-to-br ${doctor.color} p-6`}>
                {/* Availability Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    doctor.available 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-500 text-white'
                  }`}
                >
                  {doctor.available ? 'Available' : 'Busy'}
                </motion.div>

                {/* Doctor Avatar */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white"
                  >
                    <span className={`text-4xl font-bold bg-gradient-to-br ${doctor.color} bg-clip-text text-transparent`}>
                      {doctor.image}
                    </span>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-16 right-8 w-8 h-8 bg-white/20 rounded-full"
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>

              {/* Info Area */}
              <div className="pt-20 pb-6 px-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-teal-600 font-medium mb-4">{doctor.specialty}</p>

                {/* Stats */}
                <div className="flex justify-center gap-6 mb-6">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{doctor.experience}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm">{doctor.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Award className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Certified</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-teal-200 transition-shadow"
                  >
                    Book Appointment
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-teal-500 text-teal-600 rounded-full font-semibold hover:bg-teal-500 hover:text-white transition-colors"
          >
            View All Doctors
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
