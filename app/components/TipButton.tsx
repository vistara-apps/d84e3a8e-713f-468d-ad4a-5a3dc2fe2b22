'use client';

import { Heart } from 'lucide-react';
import { useState } from 'react';

interface TipButtonProps {
  amount: string;
  disabled?: boolean;
  onClick: () => void;
}

export function TipButton({ amount, disabled = false, onClick }: TipButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`
        px-4 py-2 rounded-lg font-medium transition-all duration-200
        flex items-center gap-2
        ${disabled 
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
          : 'bg-purple-600 text-white hover:bg-purple-700 hover:scale-105'
        }
      `}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Heart 
        size={16} 
        className={`transition-colors ${isHovered && !disabled ? 'fill-current' : ''}`} 
      />
      Tip on Like
    </button>
  );
}
