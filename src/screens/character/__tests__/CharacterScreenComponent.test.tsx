import { act, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';

import { peopleApi } from '../../../services/people';
import { renderWithProviders, store } from '../../../test-utils/testHelpers';
import { testServer } from '../../../test-utils/testServer';
import { CharacterScreenComponent } from '../CharacterScreenComponent';

afterEach(() => {
  act(() => {
    store.dispatch(peopleApi.util.resetApiState());
  });
});

describe('CharacterScreen', () => {
  it('should render data', async () => {
    const { getByText } = renderWithProviders(<CharacterScreenComponent id={'1'} />);
    await waitFor(() => {
      expect(getByText(/luke skywalker/i)).toBeInTheDocument();
    });
  });

  it('should save edit', async () => {
    const { getByText, getByLabelText } = renderWithProviders(
      <CharacterScreenComponent id={'1'} />,
    );
    await waitFor(() => {
      expect(getByText(/luke skywalker/i)).toBeInTheDocument();
    });

    const editNameButton = getByLabelText('Edit name');

    fireEvent.click(editNameButton);

    const editNameField = getByLabelText('edit');
    fireEvent.change(editNameField, { target: { value: 'John' } });

    fireEvent.click(getByLabelText('save'));

    await waitFor(() => {
      expect(getByText(/John/i)).toBeInTheDocument();
    });
  });

  it('error state', async () => {
    testServer.use(
      rest.get('*', (_req, res, ctx) =>
        res.once(ctx.status(500), ctx.json({ message: 'fatal error' })),
      ),
    );
    const { getByText } = renderWithProviders(<CharacterScreenComponent id={'1'} />);
    await waitFor(() => {
      expect(getByText('Error')).toBeInTheDocument();
    });
  });
});
