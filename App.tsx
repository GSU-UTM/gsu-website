import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { ProgramsPage } from './components/pages/ProgramsPage';
import { EventsPage } from './components/pages/EventsPage';
import { StartupsPage } from './components/pages/StartupsPage';
import { TeamPage } from './components/pages/TeamPage';
import { ContactPage } from './components/pages/ContactPage';
import {
  Menu,
  X,
  Home,
  Users,
  Target,
  Calendar,
  Mail,
  Rocket,
} from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'startups', label: 'Startups', icon: Rocket },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'programs':
        return <ProgramsPage />;
      case 'events':
        return <EventsPage />;
      case 'startups':
        return <StartupsPage />;
      case 'team':
        return <TeamPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-['League_Spartan'] overflow-x-hidden">
      <Navigation
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        showText={true}
      />
      {renderPage()}
    </div>
  );
}
