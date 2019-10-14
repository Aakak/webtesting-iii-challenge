// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from "./Controls.js";



test("<Controls />", () => {
    it("locked", () => {
      const { getByText, getByTestId, container } = render(
        <Controls locked={true} closed={true} />
 );
      }
}


