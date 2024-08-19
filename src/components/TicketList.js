import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('/api/tickets');
        setTickets(response.data);
      } catch (err) {
        console.error('Erro ao buscar tickets');
      }
    };
    fetchTickets();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Tickets</h2>
      <ul className="space-y-4">
        {tickets.map((ticket) => (
          <li key={ticket.id} className="p-4 border border-gray-300 rounded-md">
            <h3 className="text-lg font-semibold">{ticket.title}</h3>
            <p className="mt-2">{ticket.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
