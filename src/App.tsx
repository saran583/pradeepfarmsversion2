import React from 'react';
import { Header } from './components/Header';
import { Carousel } from './components/Carousel';
import { Timeline } from './components/Timeline';
import { Awards } from './components/Awards';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <section id="home" className="relative">
        <Carousel />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold gradient-text"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              PradeepFarms
            </motion.h1>
            <motion.p 
              className="text-xl md:text-3xl font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Innovating for a Better Tomorrow
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="#about"
                className="inline-block px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all hover:scale-105 hover:shadow-lg"
              >
                Discover More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 pointer-events-none" />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center relative"
          >
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
            <h2 className="text-5xl font-bold gradient-text mb-8">About Us</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              PradeepFarms is a pioneering technology company dedicated to transforming businesses
              through innovative solutions. Since our inception in 2019, we've been at the
              forefront of digital transformation, helping companies across the globe achieve
              their technological aspirations.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our team of experts combines creativity with technical excellence to deliver
              cutting-edge solutions that drive growth and efficiency for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="journey" className="py-32 bg-gradient-to-b from-gray-100 to-white relative">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold gradient-text text-center mb-16"
          >
            Our Journey
          </motion.h2>
          <Timeline />
        </div>
      </section>

      <section id="awards" className="py-32">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold gradient-text text-center mb-16"
          >
            Awards & Recognition
          </motion.h2>
          <Awards />
        </div>
      </section>

      <section id="gallery" className="py-32 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold gradient-text text-center mb-16"
          >
            Gallery
          </motion.h2>
          <Gallery />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;