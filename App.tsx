import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { ProgramsPage } from './components/pages/ProgramsPage';
import { EventsPage } from './components/pages/EventsPage';
import { TeamPage } from './components/pages/TeamPage';
import { ContactPage } from './components/pages/ContactPage';

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
