import { Provider } from 'react-redux';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';

import WatchListHeader from '../../../Components/Header/WatchList/WatchList';
import UpcomingMovies from '../../../Components/Home/UpcomingMovies';
import store from '../../../utils/store';
import { HOME_PAGE_UPCOMING_MOVIES } from '../../../mocks/fetchAPI_data/Home/UpcomingMovies';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(HOME_PAGE_UPCOMING_MOVIES);
        },
    });
});

test('When user clicks on addToWatch list button of upcoming movie then the watchList count of header should increase', async () => {
    const upcomingMovies = render(
        <StaticRouter>
            <Provider store={store}>
                <UpcomingMovies />
            </Provider>
        </StaticRouter>,
    );

    const headerWatchList = render(
        <StaticRouter>
            <Provider store={store}>
                <WatchListHeader />
            </Provider>
        </StaticRouter>,
    );

    await waitFor(() => expect(upcomingMovies.getByTestId('upcomingMovies')));
    const addToWatchListButtons = upcomingMovies.getAllByTestId('addToWatchListButton');
    const watchListSize = headerWatchList.getByTestId('watchListSize');
    fireEvent.click(addToWatchListButtons[0]);
    fireEvent.click(addToWatchListButtons[1]);
    const removeFromWatchListButtons = upcomingMovies.getAllByTestId('removeFromWatchListButton');

    expect(removeFromWatchListButtons.length).toBe(2);
    expect(removeFromWatchListButtons[0].innerHTML).toBe('Remove from WatchList');
    expect(watchListSize.innerHTML).toBe('2');

    fireEvent.click(addToWatchListButtons[0]);
    fireEvent.click(addToWatchListButtons[1]);
});

test('When user clicks on addToWatch list button of same upcoming movie twice then the watchList count should remain zero', async () => {
    const upcomingMovies = render(
        <StaticRouter>
            <Provider store={store}>
                <UpcomingMovies />
            </Provider>
        </StaticRouter>,
    );

    const headerWatchList = render(
        <StaticRouter>
            <Provider store={store}>
                <WatchListHeader />
            </Provider>
        </StaticRouter>,
    );

    await waitFor(() => expect(upcomingMovies.getByTestId('upcomingMovies')));
    const addToWatchListButtons = upcomingMovies.getAllByTestId('addToWatchListButton');
    const watchListSize = headerWatchList.getByTestId('watchListSize');
    fireEvent.click(addToWatchListButtons[0]);
    fireEvent.click(addToWatchListButtons[0]);

    expect(watchListSize.innerHTML).toBe('0');
});
