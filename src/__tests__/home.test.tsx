// HomePage.test.js
import React from 'react';
import { render } from '@testing-library/react';
import HomePage from "@/components/HomePage"

describe('HomePage component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<HomePage />);
    expect(getByText(/Welcome to Oum Flavor/)).toBeTruthy();
    expect(getByText(/The culinary expert/)).toBeTruthy();
    expect(getByText(/Set the table for a successful online venture with ease We!/)).toBeTruthy();
  });

  it('has a background image', () => {
    const { getByTestId } = render(<HomePage />);
    const backgroundImage = getByTestId('background-image');
    expect(backgroundImage).toHaveStyle(
      'backgroundImage: linear-gradient(rgba(0, 0, 0, 0.6 ), rgba(0, 0, 0, 0.6)), url(image1.jpg)'
    );
  });
});
