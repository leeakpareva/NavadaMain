import { motion } from 'framer-motion';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { Message } from './types';

interface ChatWindowProps {
  messages: Message[];
  onClose: () => void;
  onSend: (text: string) => void;
}

export default function ChatWindow({ messages, onClose, onSend }: ChatWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed bottom-20 right-4 w-96 bg-white rounded-2xl shadow-2xl z-50"
    >
      <ChatHeader onClose={onClose} />
      <MessageList messages={messages} />
      <ChatInput onSend={onSend} />
    </motion.div>
  );
}