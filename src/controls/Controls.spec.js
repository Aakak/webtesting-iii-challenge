// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from "./Controls.js";
import 'jest-dom/extend-expect'


test("<Controls /> has close button", () => {
      const { getByDisplayValue, getByText, getByTestId, container } = render(
        <Controls  />
      );
      let button = getByTestId('close-button')
      expect(button).toBeInTheDocument;
});

test("<Controls /> has gate button", () => {
    const { getByDisplayValue, getByText, getByTestId, container } = render(
      <Controls  />
    );
    let button = getByTestId('gate-button')
    expect(button).toBeInTheDocument;
});


test("<Controls /> closed toggle button is disabled if the gate is locked", async () => {
    const { getByTestId } = render(
      <Controls locked={true} />
    );
  
    let button = getByTestId('close-button')
    expect(button).toHaveAttribute('disabled');
  });
  
  test("<Controls /> locked toggle button is disabled if the gate is open", async () => {
    const { getByTestId } = render(
      <Controls closed={false} />
    );
  
    let button = getByTestId('gate-button')
    expect(button).toHaveAttribute('disabled');
  });
