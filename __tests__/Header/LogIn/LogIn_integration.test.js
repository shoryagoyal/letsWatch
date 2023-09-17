import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import SignIn from '../../../Components/Auth/SignIn';

import LogIn from '../../../Components/Header/LogIn/LogIn';

test('When user click on LogIn component then redirection to the logIn page should happen', async () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <Routes>
                <Route path="/" element={<LogIn />}></Route>
                <Route path="/user/login" element={<SignIn />}></Route>
            </Routes>
        </MemoryRouter>,
    );

    const logInLink = screen.getByTestId('logIn');
    fireEvent.click(logInLink);
    await waitFor(() => expect(screen.getByTestId('signInPage')));

    expect(screen.getByTestId('signInPage').children.length).toBe(2);
});
