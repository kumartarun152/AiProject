import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("GPT-4");

  const models = ["GPT-4", "GPT-3.5", "Claude", "Gemini", "LLaMA"];

  return (
    <>
      {/* 🔹 Top Left Hamburger (jab sidebar closed ho) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-3 left-40 p-0 rounded bg-white dark:bg-gray-900 border dark:border-gray-700 shadow-md hover:bg-gray-200 dark:bg-[rgb(33,33,33)] z-40"
        >
          <Menu size={26} />
        </button>
      )}

      {/* 🔹 Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="sidebar"
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ duration: 0.3 }}
            className="w-60 bg-white  dark:bg-[rgb(33,33,33)] border-r dark:border-gray-700 p-4 fixed md:static top-0 left-0 h-full shadow-lg md:shadow-none z-40 flex flex-col"
          >
            {/* Sidebar Header with Close Menu Icon */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Models</h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Menu size={22} />
              </button>
            </div>

            {/* Models List (sirf text, no icon) */}
            <ul className="space-y-2">
              {models.map((m) => (
                <li
                  key={m}
                  onClick={() => setActive(m)}
                  className={`p-2 rounded cursor-pointer transition ${
                    active === m
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {m}
                </li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
