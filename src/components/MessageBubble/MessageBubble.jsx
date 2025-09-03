import { motion } from "framer-motion";

export default function MessageBubble({ role, text }) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`max-w-3xl w-fit px-4 py-3 rounded-xl shadow-sm
        ${
          isUser
            ? "bg-indigo-600 text-white ml-auto"
            : "bg-gray-100 dark:bg-[rgb(33,33,33)] text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700"
        }`}
    >
      <p className="text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
}
