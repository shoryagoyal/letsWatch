import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import LogIn from '../../../Components/Header/LogIn/LogIn';
import store from '../../../utils/store';

test('LogIn page link should load when the header is rendered for the first time', () => {
    render(
        <StaticRouter>
            <Provider store={store}>
                <LogIn />
            </Provider>
        </StaticRouter>,
    );

    const logInComponent = screen.getByTestId('logIn');

    expect(logInComponent.href).toBe('http://localhost/user/login');
    expect(logInComponent.children[0].innerHTML).toBe('Sign In');
});
