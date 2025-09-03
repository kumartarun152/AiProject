import MessageBubble from "./MessageBubble";

export default {
  title: "Chat/MessageBubble",
  component: MessageBubble,
};

export const UserMessage = {
  args: { role: "user", text: "Hello from User 🚀" },
};

export const AIMessage = {
  args: { role: "ai", text: "Hi, I am your AI 🤖" },
};
