import React from 'react';
import { motion } from 'framer-motion';

const awards = [
  {
    title: 'Innovation Excellence Award',
    year: '2023',
    description: 'Recognized for groundbreaking advancements in AI technology',
    image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Best Workplace Culture',
    year: '2022',
    description: 'Awarded for exceptional employee satisfaction and workplace environment',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Sustainability Leadership',
    year: '2021',
    description: 'Honored for commitment to environmental sustainability',
    image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&q=80&w=800'
  }
];

export const Awards = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {awards.map((award, index) => (
        <motion.div
          key={award.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col md:flex-row items-center mb-16 ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="w-full md:w-1/2 p-6">
            <img
              src={award.image}
              alt={award.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{award.title}</h3>
            <p className="text-lg font-semibold text-blue-600 mb-4">{award.year}</p>
            <p className="text-gray-600">{award.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};