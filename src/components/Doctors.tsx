import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Award, Clock, Phone, CircleAlert } from 'lucide-react';
import hospImg from '../img/logo.png';
import rjImg from '../img/rj.jpg'

const doctors = [
  {
    name: 'Dr. Rajesh Kumar',
    specialty: 'Urologist',
    experience: '15+ Years',
    rating: 10,
    image: rjImg,
    color: 'from-rose-400 to-red-500',
    available: true,
    description: [
      'Expert in urology and male reproductive health.',
      'Specialist for Kidney, bladder & prostate related issues. '
    ],
  },
  {
    name: 'Dr. Manisha Kumari',
    specialty: 'Neurologist',
    experience: '10+ Years',
    rating: 4.8,
    image: hospImg,
    color: 'from-purple-400 to-indigo-500',
    available: true,
    description: [
      'Gynecologist & laparoscopic surgery specialist.',
      'Women’s health, pregnancy & infertility care.'
    ],
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
              {/* Header Area with Avatar and Badge */}
              <div className="relative p-6 pb-0">
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
                <div className="mb-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-24 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full overflow-hidden flex items-center justify-center shadow-lg border-4 border-white"
                  >
                    <img
                      src={doctor.image}
                       alt={doctor.name}
                      className="w-full h-full object-cover"
                      />
                  </motion.div>
                </div>
              </div>

              {/* Info Area */}
              <div className="pt-2 pb-6 px-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-teal-600 font-medium mb-3">{doctor.specialty}</p>
                
                {/* Description Bullet Points */}
                <ul className="text-left space-y-2 mb-4">
                  {doctor.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-teal-500 mt-0.5">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

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
                    <span className="text-sm">Super Specialist</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-teal-200 transition-shadow"
                  >
                    Know More
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    <CircleAlert className="w-5 h-5" />
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
            View Legal Documents
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
