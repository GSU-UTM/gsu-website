import React from 'react';

interface GSULogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GSULogo({ size = 'md', className = '' }: GSULogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Ground base */}
        <rect x="4" y="36" width="40" height="8" fill="#00ff88" rx="2"/>
        
        {/* Growing blocks representing "ground up" */}
        <rect x="8" y="28" width="6" height="16" fill="#ff0080" rx="1"/>
        <rect x="16" y="20" width="6" height="24" fill="#0080ff" rx="1"/>
        <rect x="24" y="12" width="6" height="32" fill="#ffff00" rx="1"/>
        <rect x="32" y="4" width="6" height="40" fill="#ff4000" rx="1"/>
        
        {/* Connecting lines showing growth */}
        <path d="M11 32 L19 24 L27 16 L35 8" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
        
        {/* GSU letters integrated */}
        <text x="6" y="46" fontSize="4" fill="#000" fontWeight="bold">G</text>
        <text x="18" y="46" fontSize="4" fill="#000" fontWeight="bold">S</text>
        <text x="30" y="46" fontSize="4" fill="#000" fontWeight="bold">U</text>
      </svg>
    </div>
  );
}