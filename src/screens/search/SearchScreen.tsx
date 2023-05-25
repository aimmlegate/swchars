import { useState } from "react";
import { useDebouncedValue } from "../../useDebouncedValue";
import { useGetPageQuery } from "../../people";
import {
  Navbar,
  Text,
  Input,
  Spacer,
  Container,
  Pagination,
  Loading,
} from "@nextui-org/react";
import { SWAPI_PAGE_SIZE } from "../../consts";
import { CharsTable } from "./CharsTable";
import { Header } from "../../components/Header";

export const SearchScreen = () => {
  const [current, setCurrent] = useState(1);
  const [search, setSearch] = useState<string>("");
  const debouncedSearchTerm = useDebouncedValue({ value: search, delay: 300 });

  const { data, error, isFetching } = useGetPageQuery({
    page: current,
    search: debouncedSearchTerm,
  });

  const setSearchValue = (str: string) => {
    setSearch(str);
    setCurrent(1);
  };

  const state: "normal" | "loading" | "noData" | "error" = (() => {
    if (error) {
      return "error";
    }
    if (isFetching) {
      return "loading";
    }
    if (data?.count === 0) {
      return "noData";
    }
    return "normal";
  })();

  return (
    <>
      <Header
        content={
          <Input
            clearable
            width="240px"
            placeholder="Search..."
            aria-label="Search"
            value={search}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        }
      />
      <Spacer y={2} />
      <Container gap={0}>
        {state === "error" && <p>Error</p>}
        {state === "noData" && <p>No data found</p>}
        {state === "loading" && <Loading size="xl" />}
        {state === "normal" && <CharsTable data={data?.results ?? []} />}
      </Container>
      <Spacer y={2} />
      <Container gap={0}>
        {state !== "noData" && (
          <Pagination
            total={Math.ceil((data?.count ?? 0) / SWAPI_PAGE_SIZE)}
            initialPage={current}
            animated={false}
            onChange={(page: number) => setCurrent(page)}
          />
        )}
      </Container>
    </>
  );
};
