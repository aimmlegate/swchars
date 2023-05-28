import { rest } from 'msw';

import { getLuke, getPage } from './utils';

const handlers = [
  rest.get('https://swapi.dev/api/people', (req, res, ctx) => {
    const page = req.url.searchParams.get('page') ?? '1';
    const search = req.url.searchParams.get('search') ?? undefined;

    ctx.delay(200);
    return res(ctx.status(200), ctx.json(getPage(page, search)));
  }),
  rest.get('https://swapi.dev/api/people/1', (_req, res, ctx) => {
    const luke = getLuke();

    ctx.delay(200);
    return res(ctx.status(200), ctx.json(luke));
  }),
];

export { handlers };
