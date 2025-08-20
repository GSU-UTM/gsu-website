import React from 'react';
import logoImage from 'figma:asset/8156f98016332397912f3a154855282f00d528df.png';

interface GSULogoUTMProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export function GSULogoUTM({ size = 'md', className = '', showText = true }: GSULogoUTMProps) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16'
  };

  const textSizeClasses = {
    sm: 'text-base font-bold',
    md: 'text-lg font-bold', 
    lg: 'text-xl font-extrabold',
    xl: 'text-2xl font-extrabold'
  };

  const utmSizeClasses = {
    sm: 'text-xs font-semibold',
    md: 'text-sm font-bold',
    lg: 'text-base font-bold',
    xl: 'text-lg font-bold'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img 
        src={logoImage} 
        alt="Groundup Startups UTM Logo" 
        className={`${sizeClasses[size]} w-auto`}
      />
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizeClasses[size]} text-white leading-tight`}>
            Groundup Startups
          </span>
          <span className={`${utmSizeClasses[size]} text-orange-400 leading-tight`}>
            UTM
          </span>
        </div>
      )}
    </div>
  );
}