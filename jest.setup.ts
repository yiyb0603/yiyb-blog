import { config } from 'dotenv';

import '@testing-library/react';
import '@testing-library/jest-dom';

config({
  path: './.env',
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((mediaQuery) => ({
    matches: false,
    media: mediaQuery,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
