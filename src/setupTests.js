// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

let store = {};

export const localStorageMock = {
  getItem(key) {
    return store[key];
  },
  setItem(key, value) { store[key] = value; },
  clear() { store = {}; },
  removeItem(key) { delete store[key]; },
  getAll() { return store; },

};
