import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PaginatedList, Person } from "../utils/types";
import { API_URL } from "../utils/consts";

type GetPageArgs = {
  page: number;
  search?: string;
};

type UserMutationArgs = { id: string; path: string; value: string };

export const peopleApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/people` }),
  endpoints: (builder) => ({
    getPage: builder.query<PaginatedList<Person>, GetPageArgs>({
      query: (args) =>
        args.search
          ? `?page=${args.page}&search=${args.search}`
          : `?page=${args.page}`,
    }),
    getCharacter: builder.query<Person, string>({
      query: (id) => id,
    }),
    updateCharacter: builder.mutation<null, UserMutationArgs>({
      queryFn: () => {
        return { data: null };
      },
      onQueryStarted(args, { dispatch }) {
        dispatch(
          peopleApi.util.updateQueryData("getCharacter", args.id, (draft) => {
            const news = { ...draft, [args.path]: args.value };
            return news;
          })
        );
      },
    }),
  }),
});

export const {
  useGetPageQuery,
  useGetCharacterQuery,
  useUpdateCharacterMutation,
} = peopleApi;
