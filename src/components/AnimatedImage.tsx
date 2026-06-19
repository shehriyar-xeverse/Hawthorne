import React, { useState } from 'react';
import { motion } from 'motion/react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

export default function AnimatedImage({ 
  src, 
  alt, 
  className = '', 
  imgClassName = '' 
}: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Premium fallback image matching clean shop aesthetics
  const fallbackImage = 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80';

  return (
    <div className={`relative overflow-hidden bg-brand-cream-dark/25 ${className}`}>
      {/* Shimmer skeleton screen */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite] z-10" />
      )}

      <motion.img
        src={hasError ? fallbackImage : src}
        alt={alt}
        className={`w-full h-full object-cover ${imgClassName}`}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 0.98
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
