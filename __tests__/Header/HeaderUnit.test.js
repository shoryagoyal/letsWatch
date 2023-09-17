import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { render, screen } from '@testing-library/react';

import store from '../../utils/store';
import Header from '../../Components/Header/Header';

test('Header should be rendered when the page is loaded', () => {
    render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>,
    );

    const headerContainer = screen.getByTestId('headerContainer');

    expect(headerContainer.children.length).toBe(5);
});
