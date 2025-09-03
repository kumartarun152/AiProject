import React from "react";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 
                       border-b border-gray-200 dark:border-gray-700 
                       dark:bg-[rgb(33,33,33)]">
      <h1 className="text-lg font-bold">AI Playground</h1>
      <ThemeToggle />
    </header>
  );
}
