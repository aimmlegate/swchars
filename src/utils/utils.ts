export const getIdFromSWapiUrl = (url: string) => {
  const arr = url.split('/');
  return arr[arr.length - 2];
};

export const convertToNumber = (input: string | null, defaultValue = 1): number => {
  if (input === null) {
    return defaultValue;
  }

  const result = Number(input);

  if (isNaN(result)) {
    return defaultValue;
  }

  return result;
};

export const formatQueryString = ({ page, search }: { page?: number; search?: string }) => {
  const params = new URLSearchParams();
  if (page) {
    params.append('page', String(page));
  }
  if (search && search.length > 0) {
    params.append('search', search);
  }

  return params;
};
