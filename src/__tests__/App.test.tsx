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

  it('displays 6 when no values are entered', () => {
    render(<App />);
    fireEvent.change(screen.getByTestId('inputValue'), { target: { value: '1,5' } });
    const button = screen.getByText('Add');
    fireEvent.click(button);
    expect(screen.getByTestId('result')).toHaveTextContent('6');
  });

  it('displays erro message when negative values are entered', () => {
    render(<App />);
    fireEvent.change(screen.getByTestId('inputValue'), { target: { value: '1\n-5-6' } });
    const button = screen.getByText('Add');
    fireEvent.click(button);
    expect(screen.getByTestId('errorMsg')).toHaveTextContent('negative numbers not allowed-5,-6');
  });

});
