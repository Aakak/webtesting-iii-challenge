// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from "./Dashboard";

test("<Dashboard /> close-open button toggle", async () => {
    const { getByTestId } = render(
      <Dashboard  />
    );
    let button = getByTestId('close-button')

    fireEvent.click(button);

    let displayText = await getByTestId('open-display').textContent
    expect(displayText).toBe('Closed');
});

test("<Dashboard /> gate button toggle", async () => {
  const { getByTestId } = render(
    <Dashboard  />
  );

  let button = getByTestId('close-button')
  fireEvent.click(button);
  let gateButton = getByTestId('gate-button')
  fireEvent.click(gateButton);

  let displayText = await getByTestId('lock-display').textContent
  expect(displayText).toBe('Locked');
});
