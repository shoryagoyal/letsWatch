import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';

import store from '../../../utils/store';
import App from '../../../App';

test('Menu content should be shown on the screen when we click on the menu component inside header', async () => {
    render(
        <StaticRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </StaticRouter>,
    );

    const menu = screen.getByTestId('menu');
    fireEvent.click(menu);
    await waitFor(() => expect(screen.getByTestId('menuContentContainer')));

    expect(screen.getByTestId('menuContentContainer').children.length).toBe(1);
});
