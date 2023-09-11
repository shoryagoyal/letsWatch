import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import Header from '../../../Components/Header/Header';
import store from '../../../utils/store';

test('Logo should be displayed when the header is rendered', () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>,
    );

    const logo = header.getByTestId('logo');
    const logoImage = header.getByTestId('logoImage');

    expect(logo.href).toBe('http://localhost/');
    expect(logoImage.src).toBe(
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png',
    );
});

test('Menu component should be loaded when the header is rendered', () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>,
    );

    const menu = header.getByTestId('menu');

    expect(menu.children.length).toBe(2);
    expect(menu.children[1].innerHTML).toBe('Menu');
});

test('Search component should be loaded when the header is rendered', () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>,
    );

    const search = header.getByTestId('search');
    const searchCategories = header.getByTestId('searchCategories');
    const searchText = header.getByTestId('searchText');

    expect(search.children.length).toBe(2);
    expect(searchCategories.children.length).toBe(6);
    expect(searchCategories.value).toBe('multi');
    expect(searchText.innerHTML).toBe('');
});

test('WatchList should have zero item when the header is loaded first', () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>,
    );

    const watchListSize = header.getByTestId('watchListSize');
    const watchListPageLink = header.getByTestId('watchListPageLink');

    expect(watchListPageLink.href).toBe('http://localhost/user/watchList');
    expect(watchListSize.innerHTML).toBe('0');
});

test('WatchList should have zero item when the header is loaded first', () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>,
    );

    const watchListSize = header.getByTestId('watchListSize');

    expect(watchListSize.innerHTML).toBe('0');
});

test('LogIn page link should load when the header is rendered for the first time', () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>,
    );

    const logIn = header.getByTestId('logIn');

    expect(logIn.href).toBe('http://localhost/user/login');
    expect(logIn.children[0].innerHTML).toBe('Sign In');
});
