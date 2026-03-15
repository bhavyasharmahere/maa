import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Heart, Brain, Bone, Eye, Baby, Pill, 
  Scissors, Microscope, Ear, Smile, Activity, Syringe 
} from 'lucide-react';

const specialties = [
  { icon: Venus, name: 'Gynecology', description: 'Child healthcare', color: 'from-pink-400 to-pink-600' },
  { icon: Kidney, name: 'Urology', description: 'Urinarry tracts and Related', color: 'from-orange-400 to-orange-600' },
  { icon: Pill, name: 'Pharmacy', description: 'Medications & prescriptions', color: 'from-green-400 to-green-600' },
  { icon: Scissors, name: 'Surgery', description: 'General & specialized surgery', color: 'from-indigo-400 to-indigo-600' },
  { icon: Microscope, name: 'Pathology', description: 'Lab tests & diagnostics', color: 'from-teal-400 to-teal-600' },
  { icon: Activity, name: 'Emergency', description: '24/7 emergency services', color: 'from-rose-400 to-rose-600' },
];

export function Specialties() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="specialties" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
            Our Specialisation
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            World-Class Medical
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Departments
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive healthcare services across multiple specialties, 
            each led by experienced professionals using the latest medical technology.
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {specialties.map((specialty) => (
            <motion.div
              key={specialty.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-gray-100 hover:shadow-2xl hover:shadow-teal-100 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${specialty.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${specialty.color} flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors`}
                  whileHover={{ rotate: 10 }}
                >
                  <specialty.icon className="w-7 h-7 text-white" />
                </motion.div>
                
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                  {specialty.name}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors">
                  {specialty.description}
                </p>

                {/* Arrow */}
                <motion.div
                  className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="text-white text-sm font-medium flex items-center gap-1">
                    Learn More 
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
