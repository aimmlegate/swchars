import "@testing-library/jest-dom/extend-expect";
import "whatwg-fetch";

import { testServer } from "../../testServer";
import { setupStore } from "../../src/store";

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
});

Object.defineProperty(URL, "createObjectURL", {
  writable: true,
  value: jest.fn(),
});

beforeAll(() => {
  testServer.listen();
});

afterEach(() => {
  testServer.resetHandlers();
});

afterAll(() => testServer.close());
