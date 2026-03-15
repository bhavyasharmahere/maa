import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Ambulance, FlaskConical, Scan, HeartPulse, 
  Bed, Pill, Phone, CalendarCheck 
} from 'lucide-react';

const services = [
  {
    icon: Ambulance,
    title: 'Emergency Care',
    description: 'Round-the-clock emergency care with surgical facilities.',
    features: ['24/7 Availability', 'Advanced Equipments', 'Quick Response'],
  },
  {
    icon: FlaskConical,
    title: 'Laboratory Services',
    description: 'Comprehensive diagnostic tests with accurate results using advanced laboratory equipment.',
    features: ['Fast Results', 'Safe Collection', '10+ Tests'],
  },
  {
    icon: Scan,
    title: 'Imaging & Radiology',
    description: 'Advanced imaging services using advanced sound wave technologies.',
    features: ['Ultrasound', 'Medical Imaging', 'Digital Reports'],
  },
  {
    icon: HeartPulse,
    title: 'Care',
    description: 'Intensive care units equipped with latest essential monitoring systems.',
    features: ['24/7 Monitoring', 'Medical Support', 'Quality Medicines'],
  },
  {
    icon: Bed,
    title: 'Inpatient Care',
    description: 'Comfortable private and semi-private rooms with modern amenities for optimal recovery.',
    features: ['AC Rooms', 'Nursing Care', 'Clean Washrooms'],
  },
  {
    icon: Pill,
    title: '24/7 Pharmacy',
    description: 'In-house pharmacy stocked with all essential medicines and medical supplies.',
    features: ['Quality Medicines', 'Accountability', 'Genuine Products'],
  },
  {
    icon: Phone,
    title: 'Tele-Support',
    description: 'Virtual consultations for your convinience.',
    features: ['Consultation', 'Follow-ups'],
  },
  {
    icon: CalendarCheck,
    title: 'Health Checkups',
    description: 'Comprehensive health screening packages designed for preventive healthcare.',
    features: ['Essential Checkups', 'Executive Health', 'Senior Care'],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Healthcare
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of healthcare services designed to meet all your 
            medical needs under one roof with excellence and compassion of our field.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-gray-100 hover:shadow-2xl hover:shadow-teal-100 transition-all duration-300 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-teal-200"
                >
                  <service.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{service.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-teal-600 hover:text-teal-700"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background Elements */}
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-24 translate-y-24"
            animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Emergency Medical Assistance?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Our emergency services are available 24/7. Don't hesitate to reach out to us 
              in case of any medical emergency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                <Phone className="w-5 h-5" />
                Call: 0611-435-6769
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
