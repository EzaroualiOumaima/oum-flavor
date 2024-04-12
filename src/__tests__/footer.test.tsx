// Footer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Footer from "@/components/Footer"

describe('Footer component', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Footer />);
    expect(getByText('OumFlavor')).toBeInTheDocument();
    expect(getByText('Links')).toBeInTheDocument();
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Menu')).toBeInTheDocument();
    expect(getByText('Reservation')).toBeInTheDocument();
    expect(getByText('Our Menu')).toBeInTheDocument();
    expect(getByText('Appetizers')).toBeInTheDocument();
    expect(getByText('Main Dish')).toBeInTheDocument();
    expect(getByText('Drinks')).toBeInTheDocument();
    expect(getByText('Dessert')).toBeInTheDocument();
    expect(getByText('Cocktails')).toBeInTheDocument();
    expect(getByText('Contact Us')).toBeInTheDocument();
    expect(getByText('+212 689 25 65 61')).toBeInTheDocument();
    expect(getByText('oumFlavor@gmail.com')).toBeInTheDocument();
    expect(getByText('Socials:')).toBeInTheDocument();
  });

  it('displays social media icons', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('instagram-icon')).toBeInTheDocument();
    expect(getByTestId('facebook-icon')).toBeInTheDocument();
    expect(getByTestId('whatsapp-icon')).toBeInTheDocument();
  });
});
