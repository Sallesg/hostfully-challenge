import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './App';
import theme from '@views/styles/theme';
import { ThemeProvider } from 'styled-components';

describe('App component', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    );
  });

  // Add more specific tests if needed, such as testing for certain elements rendered by Router
});
