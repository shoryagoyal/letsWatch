import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from '../../../utils/store';
import WatchList from '../../../Components/Header/WatchList/WatchList';

test('WatchList should have zero item when the component is loaded initially', () => {
    render(
        <StaticRouter>
            <Provider store={store}>
                <WatchList />
            </Provider>
        </StaticRouter>,
    );

    const watchListSize = screen.getByTestId('watchListSize');

    expect(watchListSize.innerHTML).toBe('0');
});

test('Link to watchList page should be present when watchList component is rendered', () => {
    render(
        <StaticRouter>
            <Provider store={store}>
                <WatchList />
            </Provider>
        </StaticRouter>,
    );

    const watchListPageLink = screen.getByTestId('watchListPageLink');

    expect(watchListPageLink.href).toBe('http://localhost/user/watchList');
});
