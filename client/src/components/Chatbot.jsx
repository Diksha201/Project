import { useState } from "react";
// import { MessageCircle, X } from "lucide-react";
import chatbot from "../assets/images/chatbot.png";

const predefinedReplies = [
  {
    keywords: ["hello", "hi", "hey"],
    reply: "Hello 👋 Welcome to VivaahVows! How can I help you plan your wedding today?"
  },
  {
    keywords: ["vendor", "vendors"],
    reply: "We have photographers, decorators, makeup artists, mehndi artists, panditji and more 💍"
  },
  {
    keywords: ["book", "booking"],
    reply: "You can book vendors by selecting a service, city, and preferred date from our homepage."
  },
  {
    keywords: ["price", "cost", "budget"],
    reply: "Prices vary by vendor and city. You can compare vendors and choose according to your budget."
  },
  {
    keywords: ["venue", "hall"],
    reply: "We list popular wedding venues with capacity, location, and pricing details."
  },
  {
    keywords: ["contact", "support"],
    reply: "For support, please use the Contact Us page or email us at support@vivaahvows.com"
  },
    {
    keywords: ["thanks", "okay","thank you","ok","great"],
    reply: "It's my pleasure to assist you!  🤗 If you have any questions, feel free to ask."
  }
];

const getBotReply = (message) => {
  const msg = message.toLowerCase();
  for (let item of predefinedReplies) {
    if (item.keywords.some((key) => msg.includes(key))) {
      return item.reply;
    }
  }
  return "Sorry 😔 I didn’t understand that. Please try asking about vendors, booking, or venues.";
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I’m VivaahVows Assistant 👩🏻‍💼 How can I help you?" }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botMessage = { sender: "bot", text: getBotReply(input) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
     <button
  onClick={() => setOpen(!open)}
  className="fixed bottom-6 right-6 z-[99999] focus:outline-none"
>
  <div className="flex flex-col items-center">
    {!open && (
      <span className="mb-1 text-sm bg-pink-600 text-white px-2 py-1 rounded-md">
        Namaste 🙏
      </span>
    )}

    <img
      src={chatbot}
      alt="VivaahVows Assistant"
      className="w-16 h-16 rounded-full shadow-lg border-2 border-pink-500 hover:scale-105 transition-transform duration-200"
    />
  </div>
</button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-2xl flex flex-col z-50">
          {/* Header */}
          <div className="bg-pink-600 text-white p-3 rounded-t-xl font-semibold">
            VivaahVows Chatbot 🤵‍♀️
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-pink-100 ml-auto text-right"
                    : "bg-gray-100 mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex p-2 border-t">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 px-3 py-2 border rounded-l-lg outline-none text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-pink-600 text-white px-4 rounded-r-lg text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}