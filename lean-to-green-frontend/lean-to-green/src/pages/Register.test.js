import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';

import Register from './Register';

test('renders without crashing', () => {
  const { baseElement } = render(<Register />);
  expect(baseElement).toBeDefined();
});

describe("Register has input values", () => {
  it('renders a name label', () => {
      const {getByText} = render(<Register/>);
      expect(getByText("Name:")).toBeInTheDocument();
    });
});