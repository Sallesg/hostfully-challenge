import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import ResetStyles from './views/styles/reset.ts';
import theme from './views/styles/theme.ts';

describe('App component', () => {
  it('applies the theme correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <ResetStyles />
        <App />
      </ThemeProvider>,
    );

    const titlePlaceId = screen.getByText('Bungalow Sol');
    expect(titlePlaceId).toBeInTheDocument();
  });
});
