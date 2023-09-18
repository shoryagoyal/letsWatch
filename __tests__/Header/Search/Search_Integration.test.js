import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { render, fireEvent, waitFor } from '@testing-library/react';

import store from '../../../utils/store';
import { TV_SERIES_SUGGESTIONS } from '../../../mocks/fetchAPI_data/Header/Search/SearchTvResults';
import { PERSON_SUGGESTIONS } from '../../../mocks/fetchAPI_data/Header/Search/SearchPersonResults';
import { MOVIE_SUGGESTIONS } from '../../../mocks/fetchAPI_data/Header/Search/SearchMovieResults';
import { COMPANY_SUGGESTIONS } from '../../../mocks/fetchAPI_data/Header/Search/SearchCompanyResults';
import App from '../../../App';

test('TV Series results should be shown when the user select the category as Tv and gives an input', async () => {
    fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(TV_SERIES_SUGGESTIONS);
            },
        });
    });
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

test('People results should be shown when the user select the category as person and gives an input', async () => {
    fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(PERSON_SUGGESTIONS);
            },
        });
    });
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
            value: 'arnold sch',
        },
    });
    fireEvent.change(searchCategory, {
        target: {
            value: 'person',
        },
    });
    await waitFor(() => expect(app.getByTestId('searchedResults')));
    const searchedResults = app.getByTestId('searchedResults');
    const personSearchedResults_name = app.getAllByTestId('personSearchedResults_name');

    expect(searchedResults.children.length).toBe(10);
    for (let i = 0; i < 10; i++) {
        expect(personSearchedResults_name[i].innerHTML).toBe(PERSON_SUGGESTIONS.results[i].name);
    }
});

test('Movies results should be shown when the user select the category as movie and gives an input', async () => {
    fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(MOVIE_SUGGESTIONS);
            },
        });
    });
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
            value: 'bahu',
        },
    });
    fireEvent.change(searchCategory, {
        target: {
            value: 'movie',
        },
    });
    await waitFor(() => expect(app.getByTestId('searchedResults')));
    const searchedResults = app.getByTestId('searchedResults');
    const movieSearchedResults_name = app.getAllByTestId('movieSearchedResults_name');

    expect(searchedResults.children.length).toBe(10);
    for (let i = 0; i < 10; i++) {
        expect(movieSearchedResults_name[i].innerHTML).toBe(MOVIE_SUGGESTIONS.results[i].title);
    }
});

test('Company results should be shown when the user select the category as company and gives an input', async () => {
    fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(COMPANY_SUGGESTIONS);
            },
        });
    });
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
            value: 'hb',
        },
    });
    fireEvent.change(searchCategory, {
        target: {
            value: 'company',
        },
    });
    await waitFor(() => expect(app.getByTestId('searchedResults')));
    const searchedResults = app.getByTestId('searchedResults');
    const companySearchedResults_name = app.getAllByTestId('companySearchedResults_name');

    expect(searchedResults.children.length).toBe(10);
    for (let i = 0; i < 10; i++) {
        expect(companySearchedResults_name[i].innerHTML.replace('&amp;', '&')).toBe(
            COMPANY_SUGGESTIONS.results[i].name,
        );
    }
});
