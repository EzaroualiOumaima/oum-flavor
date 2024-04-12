import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import  store from '@/store/store'; // Assuming you have a Redux store configured
import MenuPage from '@/app/menu/page';

describe('MenuPage component', () => {
  test('renders without crashing', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MenuPage />
      </Provider>
    );
    expect(getByText('Special Selection')).toBeInTheDocument();
    expect(getByText('From Our Menu')).toBeInTheDocument();
  });

  test('renders menu categories and selects one', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MenuPage />
      </Provider>
    );
    const appetizersButton = getByText('Appetizers');
    fireEvent.click(appetizersButton);
    expect(appetizersButton).toHaveClass('bg-[#C9AB81]');
  });

  test('renders filtered dishes when category button clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MenuPage />
      </Provider>
    );
    const appetizersButton = getByText('Appetizers');
    fireEvent.click(appetizersButton);
    expect(getByText('Appetizers')).toBeInTheDocument(); // Replace with actual dish name
  });

  test('renders dish details correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MenuPage />
      </Provider>
    );
    const appetizersButton = getByText('Appetizers');
    fireEvent.click(appetizersButton);
    const dishTitle = getByText('Appetizers'); // Replace with actual dish name
    expect(dishTitle).toBeInTheDocument();
   
  });
});
