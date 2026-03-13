import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer Martinez',
    role: 'Patient',
    rating: 5,
    text: 'The care I received at MediCare Plus was exceptional. From the moment I walked in, the staff made me feel comfortable and well-cared for. Dr. Johnson explained everything clearly and the treatment was effective.',
    initials: 'JM',
    color: 'from-pink-400 to-rose-500',
  },
  {
    name: 'David Wilson',
    role: 'Patient',
    rating: 5,
    text: 'I had a complex surgery and the entire team at MediCare Plus handled it with utmost professionalism. The facilities are top-notch and the post-operative care was excellent. Highly recommend!',
    initials: 'DW',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Sarah Thompson',
    role: 'Patient',
    rating: 5,
    text: 'The pediatric department took amazing care of my daughter. The doctors and nurses were so gentle and patient with her. It made a stressful situation so much easier for our family.',
    initials: 'ST',
    color: 'from-teal-400 to-cyan-500',
  },
  {
    name: 'Michael Brown',
    role: 'Patient',
    rating: 5,
    text: 'Emergency services at MediCare Plus are outstanding. When I had a medical emergency, they responded quickly and efficiently. The team saved my life and I am forever grateful.',
    initials: 'MB',
    color: 'from-amber-400 to-orange-500',
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Our Patients
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Say About Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read what our patients have to say about their experience at MediCare Plus. 
            Their satisfaction is our greatest achievement.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-100 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-teal-500" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Text */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[currentIndex].color} flex items-center justify-center text-white font-bold text-xl`}
              >
                {testimonials[currentIndex].initials}
              </motion.div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-500">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-teal-600 hover:shadow-xl transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-teal-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-teal-600 hover:shadow-xl transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '98%', label: 'Patient Satisfaction' },
            { value: '50K+', label: 'Patients Treated' },
            { value: '4.9', label: 'Average Rating' },
            { value: '100%', label: 'Dedicated Staff' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
