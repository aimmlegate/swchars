import { getPage } from "./utils";
import { rest } from "msw";

const handlers = [
  rest.get("https://swapi.dev/api/people", (req, res, ctx) => {
    const page = req.url.searchParams.get("page") ?? "1";
    const search = req.url.searchParams.get("search") ?? undefined;
    const resp = getPage(page, search);
    console.log(resp);

    ctx.delay(200);
    return res(ctx.status(200), ctx.json(getPage(page, search)));
  }),
];

export { handlers };
