import React, { useState } from 'react';
import { Button } from './ui/button';
import { Logo } from './Logo';
import {
  Menu,
  X,
  Home,
  Users,
  Calendar,
  Mail,
} from 'lucide-react';
interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  showText?: boolean;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto w-full px-6 py-4 flex justify-between items-center">
          <Logo size="lg" showText={true} />

          <div className="flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-6 py-3 rounded-lg transition-colors duration-200 font-medium ${
                  currentPage === item.id
                    ? 'text-white bg-orange-500 font-semibold'
                    : 'text-white/80 hover:text-white hover:bg-white/10 font-normal'
                }`}
              >
                {item.label}
              </button>
            ))}

            <Button
              asChild
              className="ml-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 px-6 py-3 rounded-lg font-bold"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfAh771LDLQTKuyQHjGATUSesG8Smxmll1amwSkIDDCLU981A/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                JOIN NOW
              </a>
            </Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              className="ml-6"
              onClick={() =>
                window.open('https://www.instagram.com/gsu.utm/', '_blank')
              }
            >
              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
            </svg>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
       <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-orange-500/20">
        <div className="px-4 py-4 flex justify-between items-center">
          <Logo size="md" showText={true} />
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              className="cursor-pointer hover:fill-orange-400 transition-colors"
              onClick={() =>
                window.open('https://www.instagram.com/gsu.utm/', '_blank')
              }
            >
              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
            </svg>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-orange-500/20">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                      currentPage === item.id
                        ? 'text-white bg-orange-500 font-semibold'
                        : 'text-white/80 hover:text-white hover:bg-white/10 font-normal'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <Button
                asChild
                className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 py-3 rounded-lg font-bold"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfAh771LDLQTKuyQHjGATUSesG8Smxmll1amwSkIDDCLU981A/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JOIN NOW
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
