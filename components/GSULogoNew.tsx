import React from 'react';
import svgPaths from '../imports/svg-rv6mlxith5';

interface GSULogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  textColor?: string;
}

export function GSULogoNew({
  size = 'md',
  className = '',
  textColor = 'text-white',
}: GSULogoProps) {
  const sizeClasses = {
    sm: {
      container: 'h-10',
      svg: 'h-8 w-6',
      mainText: 'text-lg',
      subText: 'text-sm',
      spacing: 'space-x-3',
    },
    md: {
      container: 'h-14',
      svg: 'h-12 w-9',
      mainText: 'text-2xl',
      subText: 'text-lg',
      spacing: 'space-x-4',
    },
    lg: {
      container: 'h-16',
      svg: 'h-14 w-11',
      mainText: 'text-3xl',
      subText: 'text-xl',
      spacing: 'space-x-4',
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div
      className={`${currentSize.container} ${className} flex items-center ${currentSize.spacing}`}
    >
      <div className={`${currentSize.svg} relative flex-shrink-0`}>
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 101 122"
        >
          <g>
            <path
              d={svgPaths.p2dd53c40}
              fill="currentColor"
              className={textColor}
            />
            <path
              d={svgPaths.p3e4dde00}
              fill="currentColor"
              className={textColor}
            />
          </g>
        </svg>
      </div>
      <div
        className={`${textColor} font-['League_Spartan'] font-bold leading-tight`}
      >
        <div className={`${currentSize.mainText} leading-none tracking-tight`}>
          GROUND-UP
        </div>
        <div
          className={`${currentSize.subText} leading-none opacity-90 tracking-wide`}
        >
          STARTUPS UTM
        </div>
      </div>
    </div>
  );
}
