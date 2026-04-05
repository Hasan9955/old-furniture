import { MessageCircle } from "lucide-react";

export default function FloatingContacts() {
  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 sm:bottom-6 sm:right-6">
      <a
        href="https://wa.me/+966561385512"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/40 active:scale-95 sm:h-[3.75rem] sm:w-[3.75rem]"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
      </a>
    </div>
  );
}