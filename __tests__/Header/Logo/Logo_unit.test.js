import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';

import Logo from '../../../Components/Header/Logo/Logo';

test('Logo image should be displayed when the logo component is rendered', () => {
    render(
        <StaticRouter>
            <Logo />
        </StaticRouter>,
    );

    const logoImage = screen.getByTestId('logoImage');

    expect(logoImage.src).toBe(
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png',
    );
});

test('Logo should contain link to home page when the component is rendered', () => {
    render(
        <StaticRouter>
            <Logo />
        </StaticRouter>,
    );

    const logo = screen.getByTestId('logo');

    expect(logo.href).toBe('http://localhost/');
});
