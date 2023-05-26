import "@testing-library/jest-dom/extend-expect";
import "whatwg-fetch";
import { testServer } from "../../src/test-utils/testServer";

beforeAll(() => {
  testServer.listen();
});

afterEach(() => {
  testServer.resetHandlers();
});

afterAll(() => testServer.close());
