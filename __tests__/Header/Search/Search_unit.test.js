import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { render } from '@testing-library/react';

import store from '../../../utils/store';
import Search from '../../../Components/Header/Search/Search';

test('Search component should be loaded when the header is rendered', () => {
    const search = render(
        <StaticRouter>
            <Provider store={store}>
                <Search />
            </Provider>
        </StaticRouter>,
    );

    const searchContainer = search.getByTestId('search');

    expect(searchContainer.children.length).toBe(2);
});

test('Search input should be empty when the header is rendered', () => {
    const search = render(
        <StaticRouter>
            <Provider store={store}>
                <Search />
            </Provider>
        </StaticRouter>,
    );

    const searchText = search.getByTestId('searchText');

    expect(searchText.innerHTML).toBe('');
});

test('Search category should have six options when header is rendered', () => {
    const search = render(
        <StaticRouter>
            <Provider store={store}>
                <Search />
            </Provider>
        </StaticRouter>,
    );

    const searchCategories = search.getByTestId('searchCategories');

    expect(searchCategories.children.length).toBe(6);
});

test('Search category should have multi as default option selected when header is rendered', () => {
    const search = render(
        <StaticRouter>
            <Provider store={store}>
                <Search />
            </Provider>
        </StaticRouter>,
    );

    const searchCategories = search.getByTestId('searchCategories');

    expect(searchCategories.value).toBe('multi');
});
