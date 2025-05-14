import { MessageCircleMore } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511987346937"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-lg transition-colors duration-300 animate-heartbeat"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircleMore className="w-6 h-6" />
    </a>
  );
}