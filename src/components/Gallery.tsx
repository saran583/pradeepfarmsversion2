import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    title: 'Innovation Hub',
    description: 'Our state-of-the-art innovation center where ideas come to life.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    title: 'Team Collaboration',
    description: 'Our diverse team working together to create amazing solutions.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    title: 'Global Reach',
    description: 'Making an impact across continents with our solutions.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=800',
    title: 'Modern Workspace',
    description: 'Where creativity meets productivity in our office spaces.'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    title: 'Client Success',
    description: 'Celebrating victories with our valued clients.'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=800',
    title: 'Awards & Recognition',
    description: 'Our journey of excellence recognized globally.'
  }
];

export const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg max-w-3xl w-full overflow-hidden relative"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-600">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};