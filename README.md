# Star Wars Characters

[live](https://swchars-red.vercel.app/)

To start the production server, run:

    npm run dev

Unit Tests
To run tests:

    npm run test

Features:

1.  Page with pagination and search (by name).
2.  Detail page with editing functionality (in-browser only). Due to the denormalized nature of RTK query caching, it's extremely hard to keep data consistent with in-browser only cache mutations. In real-life applications, this won't be a problem, as the cache will invalidate after a mutation. Another possible solution is not to use cache libraries and instead store the cache in the Redux store in an old school way with manual normalization. However, I don't prefer this method and don't wish to proceed with it.

- React
- TypeScript
- Vite
- Redux (rtk-query)
- React-Router
- Next UI
