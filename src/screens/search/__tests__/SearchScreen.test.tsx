import { act, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';

import { peopleApi } from '../../../services/people';
import { renderWithProviders, store } from '../../../test-utils/testHelpers';
import { testServer } from '../../../test-utils/testServer';
import { SearchScreen } from '../SearchScreen';

afterEach(() => {
  act(() => {
    store.dispatch(peopleApi.util.resetApiState());
  });
});

describe('SearchScreen', () => {
  it('should render data', async () => {
    const { getByLabelText } = renderWithProviders(<SearchScreen />);
    await waitFor(() => {
      expect(getByLabelText('Characters table')).toBeInTheDocument();
    });
    const table = getByLabelText('Characters table');
    const links = table.querySelectorAll('a[aria-label="Link to character details"]');
    const lastPaginationButton = getByLabelText('9 item');
    const currentActive = getByLabelText('1 item active');
    expect(links.length).toBe(10);
    expect(lastPaginationButton).toBeInTheDocument();
    expect(currentActive).toBeInTheDocument();
  });

  it('pagination should work', async () => {
    const { getByLabelText } = renderWithProviders(<SearchScreen />);
    await waitFor(() => {
      expect(getByLabelText('Characters table')).toBeInTheDocument();
    });

    const lastPaginationButton = getByLabelText('9 item');

    fireEvent.click(lastPaginationButton);

    await waitFor(() => {
      expect(getByLabelText('9 item active')).toBeInTheDocument();
    });
  });

  it('search should work', async () => {
    const { getByLabelText, getAllByText } = renderWithProviders(<SearchScreen />);
    await waitFor(() => {
      expect(getByLabelText('Characters table')).toBeInTheDocument();
    });

    const searchInput = getByLabelText('Search');

    fireEvent.change(searchInput, { target: { value: 'John' } });

    await waitFor(() => {
      const substringElement = getAllByText(/John/i);

      expect(substringElement[0]).toBeInTheDocument();
    });
  });

  it('error state', async () => {
    testServer.use(
      rest.get('*', (_req, res, ctx) =>
        res.once(ctx.status(500), ctx.json({ message: 'fatal error' })),
      ),
    );
    const { getByText } = renderWithProviders(<SearchScreen />);
    await waitFor(() => {
      expect(getByText('Error')).toBeInTheDocument();
    });
  });
});
