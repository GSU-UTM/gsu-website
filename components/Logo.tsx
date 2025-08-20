import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type LogoSize = "sm" | "md" | "lg" | "xl";

interface LogoProps {
  size?: LogoSize;
  className?: string;
  showText?: boolean;
}

const sizeMap: Record<LogoSize, string> = {
  sm: "h-6",
  md: "h-10",
  lg: "h-12",
  xl: "h-16",
};

export function Logo({ size = "md", className = "", showText = true }: LogoProps) {
  const imgClass = `${sizeMap[size]} w-auto`;
  const textMainMap: Record<LogoSize, string> = {
    sm: "text-base font-bold",
    md: "text-lg font-bold",
    lg: "text-xl font-extrabold",
    xl: "text-2xl font-extrabold",
  };
  const textSubMap: Record<LogoSize, string> = {
    sm: "text-xs font-semibold",
    md: "text-sm font-bold",
    lg: "text-base font-bold",
    xl: "text-lg font-bold",
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Save your provided logo image as assets/gsu-logo.png */}
      <ImageWithFallback
        src={new URL("../assets/gsu-logo.png", import.meta.url).toString()}
        alt="Groundup Startups UTM Logo"
        className={imgClass}
      />
      {showText && (
        <div className="flex flex-col">
          <span className={`${textMainMap[size]} text-white leading-tight`}>Groundup Startups</span>
          <span className={`${textSubMap[size]} text-orange-400 leading-tight`}>UTM</span>
        </div>
      )}
    </div>
  );
}


