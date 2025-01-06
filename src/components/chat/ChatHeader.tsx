import { X } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
}

export default function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-2xl flex justify-between items-center">
      <h3 className="text-white font-semibold">Chat with Leslie's Assistant</h3>
      <button 
        onClick={onClose}
        className="text-white hover:opacity-80 transition-opacity"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}