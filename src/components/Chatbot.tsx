import React, { useState } from 'react';
import { X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="bg-[#0b2d65] text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/kxnGC82/SAGE-BOOk-ARCS.png"
                alt="SAGE Assistant"
                className="w-8 h-8 rounded-full"
              />
              <h3 className="font-bold">SAGE Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-1 mb-2">
              👋 Hello! How can I help you today?
            </div>
          </div>
          <div className="p-1 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006AAD]"
              />
              <button className="bg-[#35A9EF] text-white px-4 py-2 rounded-lg hover:bg-[#35A9EF] transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#FB6B31] hover:bg-[#35A9EF] transition-colors rounded-full shadow-lg overflow-hidden w-14 h-14 flex items-center justify-center"
        >
          <img
            src="https://i.ibb.co/dkXKbTp/chatbot.png"
            alt="SAGE Assistant"
            className="w-10 h-10"
          />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
