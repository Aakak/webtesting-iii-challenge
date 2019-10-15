// Test away!

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Display from "./Display.js";

test("<Display /> is Open by default", () => {
    const { getByTestId } = render(
      <Display  />
    );
    let displayText = getByTestId('open-display').textContent;
    expect(displayText).toBe('Open');
});

test("<Display /> closed", () => {
    const { getByTestId } = render(
      <Display closed={true} />
    );
    let displayText = getByTestId('open-display').textContent;
    expect(displayText).toBe('Closed');
});

test("<Display /> is Unlocked by default", () => {
    const { getByTestId } = render(
      <Display  />
    );
    let displayText = getByTestId('lock-display').textContent;
    expect(displayText).toBe('Unlocked');
});

test("<Display /> locked", () => {
    const { getByTestId } = render(
      <Display  locked={true}/>
    );
    let displayText = getByTestId('lock-display').textContent;
    expect(displayText).toBe('Locked');
});

test("<Display /> use the lock `green-led` class by default", () => {
    const { getByTestId } = render(
      <Display />
    );
    let display = getByTestId('lock-display');
    expect(display.classList.contains('green-led')).toBe(true);
});

test("<Display /> use the status `red-led` class by default", () => {
    const { getByTestId } = render(
      <Display />
    );
    let display = getByTestId('open-display');
    expect(display.classList.contains('green-led')).toBe(true);
});


test("<Display /> use the `red-led` class when `locked`", () => {
    const { getByTestId } = render(
      <Display  locked={true}/>
    );
    let display = getByTestId('lock-display');
    expect(display.classList.contains('red-led')).toBe(true);
});

test("<Display /> use the `red-led` class when `closed`", () => {
    const { getByTestId } = render(
      <Display  closed={true}/>
    );
    let display = getByTestId('open-display');
    expect(display.classList.contains('red-led')).toBe(true);
});

