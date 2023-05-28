import { Container, Input, Pagination, Spacer } from '@nextui-org/react';

import { Header } from '../../../components/Header';
import { LoaderCard } from '../../../components/LoaderCard';
import { useDebouncedValue } from '../../../hooks/useDebouncedValue';
import { useGetPageQuery } from '../../../services/people';
import { SWAPI_PAGE_SIZE } from '../../../utils/consts';
import { CharsTable } from '../CharsTable';

interface Props {
  page?: number;
  search?: string;
  handleChangePage: (n: number) => void;
  handleChangeSearch: (s: string) => void;
}

export const SearchScreenComponent: React.FC<Props> = ({
  page = 1,
  search,
  handleChangePage,
  handleChangeSearch,
}) => {
  const debouncedSearchTerm = useDebouncedValue({ value: search, delay: 300 });

  const { data, error, isFetching } = useGetPageQuery({
    page,
    search: debouncedSearchTerm,
  });

  const state: 'normal' | 'loading' | 'noData' | 'error' = (() => {
    if (error) {
      return 'error';
    }
    if (isFetching) {
      return 'loading';
    }
    if (data?.count === 0) {
      return 'noData';
    }
    return 'normal';
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
            onChange={(e) => handleChangeSearch(e.target.value)}
          />
        }
      />
      <Spacer y={2} />
      <Container
        gap={0}
        css={{
          minHeight: '550px',
        }}
      >
        {state === 'error' && <p>Error</p>}
        {state === 'noData' && <p>No data found</p>}
        {state === 'loading' && <LoaderCard />}
        {state === 'normal' && <CharsTable data={data?.results ?? []} />}
      </Container>
      <Spacer y={2} />
      <Container gap={0}>
        {state !== 'noData' && (
          <Pagination
            aria-label="Pagination"
            total={Math.ceil((data?.count ?? 0) / SWAPI_PAGE_SIZE)}
            page={page}
            animated={false}
            onChange={(page: number) => handleChangePage(page)}
          />
        )}
      </Container>
    </>
  );
};
