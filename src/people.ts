import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PaginatedList, Person } from "./types";

type GetPageArgs = {
  page: number;
  search?: string;
};

export const peopleApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/people" }),
  endpoints: (builder) => ({
    getPage: builder.query<PaginatedList<Person>, GetPageArgs>({
      query: (args) =>
        args.search
          ? `?page=${args.page}&search=${args.search}`
          : `?page=${args.page}`,
    }),
  }),
});

export const { useGetPageQuery } = peopleApi;
