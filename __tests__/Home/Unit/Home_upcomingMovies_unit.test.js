import { render, waitFor } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';

import UpcomingMovies from '../../../Components/Home/UpcomingMovies';
import { HOME_PAGE_UPCOMING_MOVIES } from '../../../mocks/fetch_mock_data';
import store from '../../../utils/store';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(HOME_PAGE_UPCOMING_MOVIES),
    });
});

test('Shimmer of upcoming movie should be loaded until the API call data comes', async () => {
    const upcoming_movies = render(
        <StaticRouter>
            <Provider store={store}>
                <UpcomingMovies />
            </Provider>
        </StaticRouter>,
    );

    const upcomingMovieShimmer = upcoming_movies.getByTestId('upcomingMovieShimmer');
    expect(upcomingMovieShimmer.children.length).toBe(12);
});

test('Shimmer of upcoming movie should not be visible when the movie data is loaded', async () => {
    const upcoming_movies = render(
        <StaticRouter>
            <Provider store={store}>
                <UpcomingMovies />
            </Provider>
        </StaticRouter>,
    );

    await waitFor(() => expect(upcoming_movies.getByTestId('upcomingMovies')));
    const upcomingMovieShimmer = upcoming_movies.queryByTestId('upcomingMovieShimmer');
    expect(upcomingMovieShimmer).toBeNull();
});

test('Upcoming movie should be rendered on home page', async () => {
    const upcoming_movies = render(
        <StaticRouter>
            <Provider store={store}>
                <UpcomingMovies />
            </Provider>
        </StaticRouter>,
    );

    await waitFor(() => expect(upcoming_movies.getByTestId('upcomingMovies')));
    const upcomingMovies = upcoming_movies.getByTestId('upcomingMovies');
    expect(upcomingMovies.children.length).toBe(20);
});
