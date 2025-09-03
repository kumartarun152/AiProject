import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <ChatWindow />
      </div>
    </div>
  );
}
