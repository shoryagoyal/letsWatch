import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { waitFor, screen, render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import Logo from '../../../Components/Header/Logo/Logo';
import Home from '../../../Components/Home/Home';
import store from '../../../utils/store';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return '';
        },
    });
});

test('When user clicks on the logo user should be redirected to home', async () => {
    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/test/logo']}>
                <Routes>
                    <Route path="/test/logo" element={<Logo />}></Route>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </MemoryRouter>
        </Provider>,
    );

    const logo = screen.getByTestId('logo');
    fireEvent.click(logo);
    await waitFor(() => expect(screen.getByTestId('home')));

    expect(screen.getByTestId('home').children.length).toBe(3);
});
