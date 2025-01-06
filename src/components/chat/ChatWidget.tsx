import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ChatWindow from './ChatWindow';
import { Message } from './types';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Leslie Akpareva's AI assistant. How can I help you today?", isUser: false }
  ]);

  const handleClose = () => setIsOpen(false);
  
  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { text, isUser: true }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for your message! For direct assistance, please call or WhatsApp Leslie at +44 7935 237704",
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            messages={messages}
            onClose={handleClose}
            onSend={handleSend}
          />
        )}
      </AnimatePresence>
    </>
  );
}