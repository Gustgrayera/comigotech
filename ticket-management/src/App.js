import React from 'react';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TicketForm />
      <TicketList />
    </div>
  );
}

export default App;
