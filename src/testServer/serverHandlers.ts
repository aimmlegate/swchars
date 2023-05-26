import { rest } from "msw";

const handlers = [
  rest.get("https://swapi.dev/api/people", (req, res, ctx) => {
    console.log(req);
    const mockApiResponse = {
      species: {
        name: "bulbasaur",
      },
      sprites: {
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      },
    };
    return res(ctx.json(mockApiResponse));
  }),
];

export { handlers };
