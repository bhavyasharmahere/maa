import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Users, BriefcaseMedical, Building2, Stethoscope } from 'lucide-react';

const features = [
  'State-of-the-art medical equipment',
  'Highly qualified medical professionals',
  'Compassionate patient care',
  '24/7 emergency services',
  'Advanced diagnostic facilities',
  'International quality standards',
];

const highlights = [
  { icon: Users, value: '5,000+', label: 'Happy Patients' },
  { icon: Building2, value: '008+', label: 'Hospital Beds' },
  { icon: Stethoscope, value: '02', label: 'Specialties' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-white text-center p-4"
                  >
                    <BriefcaseMedical className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">Expert Care</p>
                  </motion.div>
                </div>
                <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-white text-center p-4"
                  >
                    <Building2 className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">High Tech Facilities</p>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="space-y-4 pt-8"
              >
                <div className="h-64 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl shadow-xl flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-white text-center p-4"
                  >
                    <Stethoscope className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">Expert Doctors</p>
                  </motion.div>
                </div>
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl shadow-xl flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-white text-center p-4"
                  >
                    <CheckCircle className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">Quality Assured</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, type: 'spring' }}
              className="absolute -bottom-4 -right-4 w-22 h-22 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-xs">
                  Service
                  <br />
                  Weeks
                  </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            >
              We Are Committed To
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Your Well-being
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 mb-8"
            >
              Maa Super Speciality Hospital is a multi-specialty hospital dedicated to providing 
              exceptional healthcare services with the best and experienced doctors. With over 3 years of experience, we have 
              been at the forefront of medical innovation, combining advanced technology 
              with compassionate care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-8"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
