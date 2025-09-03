import { useState } from "react";
import ChatInput from "./ChatInput";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello 👋, I am your AI assistant." },
  ]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: `💡 Mock response for: "${text}"` },
      ]);
    }, 800);
  };

  return (
    <div className="flex flex-col flex-1 bg-gray-50 dark:bg-[rgb(33,33,33)]">
      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 max-w-3xl w-full mx-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`w-full ${
              msg.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block px-4 py-3 rounded-xl text-sm leading-relaxed shadow-sm
                ${
                  msg.role === "ai"
                    ? "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                    : "bg-indigo-600 text-white"
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[rgb(33,33,33)] p-4">
        <div className="max-w-3xl mx-auto">
          <ChatInput onSend={sendMessage} />
        </div>
      </div>
    </div>
  );
}
