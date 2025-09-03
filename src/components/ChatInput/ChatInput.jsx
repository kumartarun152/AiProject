import { useState, useEffect, useRef } from "react";
import { Plus, Send, Paperclip, Camera, Mic } from "lucide-react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="p-4">
      <div
        ref={menuRef}
        className="flex items-center gap-2 max-w-3xl mx-auto w-full 
                   rounded-xl px-4 py-2 bg-white dark:bg-[rgb(33,33,33)] 
                   shadow-md border border-gray-200 dark:border-gray-700 relative"
      >
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="p-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition relative"
        >
          <Plus size={20} />
        </button>

        {openMenu && (
          <div className="absolute bottom-14 left-4 bg-white dark:bg-[rgb(33,33,33)] 
                          shadow-lg rounded-lg p-2 w-40 space-y-2 
                          border border-gray-200 dark:border-gray-700 animate-fadeIn">
            <button className="flex items-center gap-2 w-full px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <Paperclip size={16} /> <span>Attach File</span>
            </button>
            <button className="flex items-center gap-2 w-full px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <Camera size={16} /> <span>Camera</span>
            </button>
          </div>
        )}

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 bg-transparent border-none focus:outline-none 
                     text-sm text-gray-900 dark:text-gray-100 
                     placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="Message ChatGPT..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <button
          onClick={() => alert("Voice input start hoga yaha")} // <- yaha pe mic recording logic add kar sakte ho
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <Mic size={18} className="text-gray-600 dark:text-gray-300" />
        </button>

        <button
          onClick={handleSend}
          className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
