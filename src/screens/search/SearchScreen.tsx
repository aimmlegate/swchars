import { useEffect } from 'react';
import { useLocation, useNavigationType, useSearchParams } from 'react-router-dom';

import { convertToNumber, formatQueryString } from '../../utils/utils';
import { SearchScreenComponent } from './SearchScreenComponent';

export const SearchScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navType = useNavigationType();
  const currentPage = convertToNumber(searchParams.get('page'));
  const currentSearch = searchParams.get('search') ?? '';

  const handleChangePage = (page: number) => {
    setSearchParams(formatQueryString({ page, search: currentSearch }));
  };

  const handleChangeSearch = (search: string) => {
    setSearchParams(formatQueryString({ page: 1, search }));
  };

  useEffect(() => {
    if (navType === 'POP' && location.key !== 'default') {
      const param = searchParams.get('search');
      if (param) {
        setSearchParams(formatQueryString({ page: 1 }));
      }
    }
  }, [location.key, navType, searchParams, setSearchParams]);

  return (
    <SearchScreenComponent
      page={currentPage}
      search={currentSearch}
      handleChangePage={handleChangePage}
      handleChangeSearch={handleChangeSearch}
    />
  );
};
