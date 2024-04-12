// ContactPage.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ContactPage from "@/components/ContactPage"

describe('ContactPage component', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<ContactPage />);
    expect(getByText('CONTACT US')).toBeInTheDocument();
    expect(getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Your Message')).toBeInTheDocument();
    expect(getByText('Send')).toBeInTheDocument();
  });

  it('displays contact information', () => {
    const { getByText } = render(<ContactPage />);
    expect(getByText('All comments & questions are welcome.')).toBeInTheDocument();
    expect(getByText('Please email us:')).toBeInTheDocument();
    expect(getByText('oumFlavor@gmail.com')).toBeInTheDocument();
    expect(getByText('bookingFlavor@gmail.com')).toBeInTheDocument();
    expect(getByText('Tel : +212 6 89 25 65 61')).toBeInTheDocument();
    expect(getByText('OPENING HOURS:')).toBeInTheDocument();
    expect(getByText('Mon – Thu: 11.00 am – 01:00 am')).toBeInTheDocument();
    expect(getByText('Fri – Sun: 11:00 am – 02:00 am')).toBeInTheDocument();
  });
});
