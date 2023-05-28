import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App.tsx';
import ErrorBoundary from './components/ErrorBoundry/index.tsx';
import './index.css';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <NextUIProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </NextUIProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
