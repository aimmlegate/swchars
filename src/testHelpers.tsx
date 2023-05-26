import { NextUIProvider } from "@nextui-org/react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../config/jest/setupTests";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

interface Props {
  children: React.ReactNode;
}

export const Wrappers: React.FC<Props> = ({ children }) => (
  <Provider store={store}>
    <NextUIProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </NextUIProvider>
  </Provider>
);

export const renderWithProviders = (ui: React.ReactElement) => {
  setupListeners(store.dispatch);
  return {
    ...render(ui, { wrapper: Wrappers }),
  };
};
