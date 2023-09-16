import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { render, fireEvent, waitFor } from '@testing-library/react';

import store from '../../../utils/store';
import { TV_SERIES_SUGGESTIONS } from '../../../mocks/fetchAPI_data/Header/Search/SearchTvResults';
import App from '../../../App';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(TV_SERIES_SUGGESTIONS);
        },
    });
});

test('TV Series results should be shown when the user select the category as Tv and gives a input', async () => {
    const app = render(
        <StaticRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </StaticRouter>,
    );

    const searchCategory = app.getByTestId('searchCategories');
    const searchText = app.getByTestId('searchText');

    fireEvent.change(searchText, {
        target: {
            value: 'game',
        },
    });
    fireEvent.change(searchCategory, {
        target: {
            value: 'tv',
        },
    });

    await waitFor(() => expect(app.getByTestId('searchedResults')));

    const searchedResults = app.getByTestId('searchedResults');
    const tvSeriesSearchedResults_name = app.getAllByTestId('tvSeriesSearchedResults_name');

    expect(searchedResults.children.length).toBe(10);

    for (let i = 0; i < 10; i++) {
        expect(tvSeriesSearchedResults_name[i].innerHTML).toBe(TV_SERIES_SUGGESTIONS.results[i].name);
    }
});
