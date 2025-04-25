import '@testing-library/jest-dom'; // ensures TypeScript gets the extended matchers
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App'; // Adjust path if needed

describe('App Component', () => {
  it('renders the Add button', () => {
    render(<App />);
    const button = screen.getByText('Add');
    expect(button).toBeInTheDocument();
  });
});
