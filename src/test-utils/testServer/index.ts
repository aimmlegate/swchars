import { setupServer } from 'msw/node';

import { handlers } from './serverHandlers';

const testServer = setupServer(...handlers);

export { testServer };
