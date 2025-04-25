import '@testing-library/jest-dom'; // ensures TypeScript gets the extended matchers
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App'; // Adjust path if needed

describe('App Component', () => {
  it('renders the Add button', () => {
    render(<App />);
    const button = screen.getByText('Add');
    expect(button).toBeInTheDocument();
  });

  it('displays 0 when no values are entered', () => {
    render(<App />);
    fireEvent.change(screen.getByTestId('inputValue'), { target: { value: '' } });
    const button = screen.getByText('Add');
    fireEvent.click(button);
    expect(screen.getByTestId('result')).toHaveTextContent('0');
  });

  it('displays 1 when no values are entered', () => {
    render(<App />);
    fireEvent.change(screen.getByTestId('inputValue'), { target: { value: '1' } });
    const button = screen.getByText('Add');
    fireEvent.click(button);
    expect(screen.getByTestId('result')).toHaveTextContent('1');
  });

});
