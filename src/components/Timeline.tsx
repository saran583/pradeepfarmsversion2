import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: 2019,
    title: 'The Beginning',
    description: 'Founded TechVision with a vision to revolutionize the industry.',
    icon: '🚀',
  },
  {
    year: 2020,
    title: 'First Major Milestone',
    description: 'Secured first round of funding and expanded to 3 new markets.',
    icon: '💎',
  },
  {
    year: 2021,
    title: 'Innovation Year',
    description: 'Launched our flagship product and won multiple innovation awards.',
    icon: '🏆',
  },
  {
    year: 2022,
    title: 'Global Expansion',
    description: 'Expanded operations to 15 countries and grew team to 500+ employees.',
    icon: '🌍',
  },
  {
    year: 2023,
    title: 'Industry Leader',
    description: 'Became the market leader with over 1M satisfied customers worldwide.',
    icon: '👑',
  },
];

export const Timeline = () => {
  return (
    <div className="relative container mx-auto px-6 py-16">
      {/* Vertical line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-1/2 -translate-x-px w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
      />
      
      {timelineData.map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: index * 0.3 }}
          className="relative mb-16 last:mb-0"
        >
          <div className="flex items-center justify-center">
            {/* Left side content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.3 + 0.2 }}
              className="w-1/2 pr-8"
            >
              {index % 2 === 0 && (
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ml-auto max-w-md">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.4 }}
                  >
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                      {item.year}
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-800 mt-2">{item.title}</h4>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </motion.div>
                </div>
              )}
            </motion.div>
            
            {/* Center icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.3 + 0.1 }}
              className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg z-10"
            >
              <span className="text-xl">{item.icon}</span>
              <div className="absolute w-16 h-16 border-2 border-blue-500/30 rounded-full animate-ping" />
              <div className="absolute w-16 h-16 border-2 border-purple-500/30 rounded-full animate-pulse" />
            </motion.div>
            
            {/* Right side content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.3 + 0.2 }}
              className="w-1/2 pl-8"
            >
              {index % 2 !== 0 && (
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.4 }}
                  >
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                      {item.year}
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-800 mt-2">{item.title}</h4>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};