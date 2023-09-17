import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import WatchListHeader from '../../../Components/Header/WatchList/WatchList';
import WatchList from '../../../Components/WatchList/WatchList';
import store from '../../../utils/store';

test('When user click on the watchList component inside the header then redirection ot the watchLis page should take place', async () => {
    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<WatchListHeader />}></Route>
                    <Route path="/user/watchList" element={<WatchList />}></Route>
                </Routes>
            </MemoryRouter>
        </Provider>,
    );

    const watchListPageLink = screen.getByTestId('watchListPageLink');
    fireEvent.click(watchListPageLink);
    await waitFor(() => expect(screen.getByTestId('watchListPage')));

    expect(screen.getByTestId('watchListPage').children.length).toBe(2);
});
