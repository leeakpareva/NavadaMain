import { Phone } from 'lucide-react';
import { Message } from './types';

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="h-96 overflow-y-auto p-4 space-y-4">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] p-3 rounded-2xl ${
              msg.isUser
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {msg.text}
            {!msg.isUser && i === messages.length - 1 && (
              <a
                href="tel:+447935237704"
                className="mt-2 flex items-center text-purple-600 hover:underline"
              >
                <Phone className="w-4 h-4 mr-1" />
                +44 7935 237704
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}