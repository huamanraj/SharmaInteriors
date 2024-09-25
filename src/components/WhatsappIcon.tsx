import { MessageCircleMore } from 'lucide-react';
import Link from "next/link"
import React from "react"


export default function WhatsAppIcon() {
  const phoneNumber = "919799811042" // Remove the '+' and any spaces
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <div className="fixed bottom-4 shadow-black  text-white right-4 z-50">
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-3 border rounded-full shadow-lg hover:bg-red-400  transition-colors  duration-300"
        aria-label="Chat on WhatsApp"
      >
         <MessageCircleMore />
      </Link>
    </div>
  )
}