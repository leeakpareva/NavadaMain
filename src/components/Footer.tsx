import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import FooterNav from './footer/FooterNav';
import FooterSocial from './footer/FooterSocial';
import FooterLegal from './footer/FooterLegal';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Code2 className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                NAVADA
              </span>
            </motion.a>
            <p className="text-gray-400">
              Navigating Artistic Visions with Advanced Digital Assistance. Empowering through AI & Web3 innovation.
            </p>
            <FooterSocial />
          </div>

          {/* Rest of the footer content remains the same */}
          <FooterNav />

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="mailto:contact@navada.io" className="hover:text-white transition-colors">
                  contact@navada.io
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                123 Innovation Street<br />
                Tech Hub, TX 75001
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-gray-400">Subscribe to our newsletter for the latest updates.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white 
                  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 
                  text-white font-medium hover:opacity-90 transition-opacity"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <FooterLegal />
      </div>
    </footer>
  );
}