import { render, screen } from '@testing-library/react';
import { Property, propertyData } from './Property';
import { describe, expect, it } from 'vitest';
import theme from '@views/styles/theme';
import { ThemeProvider } from 'styled-components';

describe('Property', () => {
  it('should render property details correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Property />
      </ThemeProvider>,
    );

    const titleElement = screen.getByRole('heading', { name: /Bungalow Sol/i });
    expect(titleElement).toBeInTheDocument();

    const locationElement = screen.getByText(
      /Entire cabin in Imbituba, Brazil/i,
    );
    expect(locationElement).toBeInTheDocument();

    const detailsElement = screen.getByText(/4 guests/i);
    expect(detailsElement).toBeInTheDocument();

    const extraInfoElement = screen.getByText(
      /Bungalow Sol, is located on Ribanceira beach/i,
    );
    expect(extraInfoElement).toBeInTheDocument();
  });

  it.only('should render main image and additional images correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Property />
      </ThemeProvider>,
    );

    const mainImage = screen.getByAltText(/Main/i) as HTMLImageElement;
    expect(mainImage).toBeInTheDocument();
    expect(mainImage.src).toBe(
      'https://a0.muscache.com/im/pictures/miso/Hosting-777608750459748865/original/45ab063c-2a7d-4a92-9484-361ef9202e33.jpeg?im_w=1200',
    );

    const additionalImages = screen.getAllByAltText(/Image/i);
    expect(additionalImages.length).toBe(4);
    additionalImages.forEach((image, index) => {
      expect((image as HTMLImageElement).src).toContain(
        propertyData.images[index + 1],
      );
    });
  });
});
