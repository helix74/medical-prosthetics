import { memo } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { EFFECTS_STYLES } from '@/theme/styles';

interface WhatsAppChatProps {
  phoneNumber: string;
  message?: string;
}

export const WhatsAppChat = memo(function WhatsAppChat({
  phoneNumber,
  message = "Bonjour, je vous contacte depuis votre site web."
}: WhatsAppChatProps) {
  // Remove any non-numeric characters from phone number
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  
  // Construct WhatsApp URL
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(
        // Position
        'fixed bottom-6 right-6 z-50',
        // Size and shape
        'w-12 h-12 rounded-full',
        // Colors and effects
        'bg-[#25D366] text-white',
        'shadow-lg hover:shadow-xl',
        'hover:bg-[#22c35e]',
        // Layout
        'flex items-center justify-center',
        // Animation
        'transform hover:scale-110',
        'hover:-translate-y-1',
        EFFECTS_STYLES.base.transition.base,
        // Accessibility
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]'
      )}
      aria-label="Ouvrir WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
      
      {/* Pulse effect */}
      <span className={twMerge(
        'absolute inset-0 rounded-full',
        'animate-ping',
        'bg-[#25D366] opacity-75',
        'duration-1000'
      )} />
    </a>
  );
}); 