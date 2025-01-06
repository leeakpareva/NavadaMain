import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function FooterSocial() {
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/navada' },
    { icon: Github, href: 'https://github.com/navada' },
    { icon: Linkedin, href: 'https://linkedin.com/company/navada' }
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center 
            hover:bg-white/10 transition-colors"
        >
          <social.icon className="w-5 h-5 text-gray-400" />
        </motion.a>
      ))}
    </div>
  );
}