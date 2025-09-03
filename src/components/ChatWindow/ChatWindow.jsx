import { useState } from "react";
import MessageBubble from "../MessageBubble/MessageBubble.jsx";
import ChatInput from "../ChatInput/ChatInput.jsx";
import { askAI } from "../Api/api.js"; 

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello 👋, I am your Dummy AI assistant." },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // User message add
    setMessages([...messages, { role: "user", text }]);
    setLoading(true);

    // Dummy API call
    const reply = await askAI(text);

    setMessages((prev) => [...prev, { role: "ai", text: reply }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col flex-1 bg-gray-50 dark:bg-[rgb(33,33,33)]">
      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 max-w-3xl w-full mx-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <MessageBubble role={msg.role} text={msg.text} />
          </div>
        ))}

        {loading && (
          <p className="text-gray-500 dark:text-gray-400 animate-pulse">
            ⌛ Dummy AI soch raha hai...
          </p>
        )}
      </div>

      {/* Input Section */}
      <div className="p-4 border-t dark:border-gray-700 bg-white dark:bg-[rgb(33,33,33)]">
        <div className="max-w-3xl mx-auto">
          <ChatInput onSend={sendMessage} />
        </div>
      </div>
    </div>
  );
}
