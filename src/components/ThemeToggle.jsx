import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeToggle = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative w-14 h-8 flex items-center rounded-full 
                 bg-gray-200 dark:bg-gray-800 p-1 transition-colors duration-300"
    >
      {/* Toggle Circle */}
      <motion.div
        layout
        className="w-6 h-6 rounded-full flex items-center justify-center 
                   bg-white dark:bg-gray-900 shadow-md"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {dark ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <Moon size={16} className="text-yellow-400" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.3 }}
            >
              <Sun size={16} className="text-orange-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Circle Position */}
      <motion.div
        className="absolute top-1 left-1"
        animate={{
          x: dark ? 28 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </button>
  );
};
