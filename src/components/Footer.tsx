import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About TechVision</h3>
            <p className="text-gray-400">
              Leading the way in technological innovation and digital transformation since 2019.
              We're committed to creating solutions that empower businesses worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <a href="mailto:info@techvision.com" className="text-gray-400 hover:text-white">
                  info@techvision.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span className="text-gray-400">
                  123 Innovation Street, Tech City, TC 12345
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">Services</a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-white">Careers</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TechVision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};