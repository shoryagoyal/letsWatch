import { StaticRouter } from 'react-router-dom/server';
import { render } from '@testing-library/react';

import Menu from '../../../Components/Header/Menu/Menu';

test('Menu component should be loaded when the header is rendered', () => {
    const header = render(
        <StaticRouter>
            <Menu />
        </StaticRouter>,
    );

    const menu = header.getByTestId('menu');

    expect(menu.children.length).toBe(2);
    expect(menu.children[1].innerHTML).toBe('Menu');
});
