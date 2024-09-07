import React from 'react';
import Table from './Table';
import ChatbotTicketingSection from './ChatbotTicketingSection';
import MuseumTicketOptionsSection from './MuseumTicketOptionsSection';

const Body = () => {
  return (
    <div className="p-6 sm:p-10 bg-gray-50">
      <ChatbotTicketingSection />
      <MuseumTicketOptionsSection />
      <Table />
    </div>
  );
};

export default Body;
