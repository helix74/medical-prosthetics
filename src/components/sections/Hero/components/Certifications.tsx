import Image from 'next/image';
import { CertificationsProps } from '../types';

export const Certifications = ({ certifications }: CertificationsProps) => {
  return (
    <div className="mt-8 flex items-center gap-6">
      <div className="text-sm font-medium text-neutral-500">Certifié par:</div>
      <div className="flex gap-4">
        {certifications.map((cert) => (
          <Image
            key={cert.src}
            src={cert.src}
            alt={cert.alt}
            width={40}
            height={40}
            className="opacity-80 hover:opacity-100 transition-opacity"
          />
        ))}
      </div>
    </div>
  );
}; 