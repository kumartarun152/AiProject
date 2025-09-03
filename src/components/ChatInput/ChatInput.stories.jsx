import ChatInput from "./ChatInput";

export default {
  title: "Chat/ChatInput",
  component: ChatInput,
};

export const Default = {
  args: {
    onSend: (msg) => alert("Message Sent: " + msg),
  },
};
