import React, { useState } from 'react';
import { Button } from './ui/button';
import { Logo } from './Logo';
import { Menu, X, Home, Users, Target, Calendar, Mail } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
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
          <Logo size="lg" showText={false} />
          
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
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-orange-500/20">
        <div className="px-4 py-4 flex justify-between items-center">
          <Logo size="md" showText={false} />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
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