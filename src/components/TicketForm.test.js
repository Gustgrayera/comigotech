import { render, screen, fireEvent } from '@testing-library/react';
import TicketForm from './TicketForm';

test('renders TicketForm and handles submission', () => {
  render(<TicketForm />);

  // Check if the form elements are rendered
  expect(screen.getByLabelText(/Título/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Descrição/i)).toBeInTheDocument();

  // Simulate form submission
  fireEvent.change(screen.getByLabelText(/Título/i), { target: { value: 'Novo Ticket' } });
  fireEvent.change(screen.getByLabelText(/Descrição/i), { target: { value: 'Descrição do ticket' } });
  fireEvent.click(screen.getByText(/Enviar/i));

  // Add assertions based on your form logic
});
