import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { useState } from 'react';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import People from './Components/People/People';
import TvSeries from './Components/TVSeries/TvSeries';
import TvSeriesAllImages from './Components/TVSeries/TvSeriesAllImages';
import TvSeriesDiscover from './Components/Discover/TvSeriesDiscover';
import MoviesDiscover from './Components/Discover/MoviesDiscover';
import Movie from './Components/MovieDetailPage/Movie';
import MenuContent from './Components/Header/Menu/MenuContent';

require('dotenv').config();

//console.log(process.env.REACT_APP_MOVIE_DB_API_KEY);

function Comp() {
    const [menuVisible, setIsMenuVisible] = useState(false);

    function changeMenuVisibilityHandler(isVisible) {
        if (isVisible) setIsMenuVisible(true);
        else setIsMenuVisible(false);
    }

    return (
        <div>
            {menuVisible ? (
                <div>
                    <MenuContent changeMenuVisibility={changeMenuVisibilityHandler} />
                </div>
            ) : (
                <div>
                    <Header changeMenuVisibility={changeMenuVisibilityHandler} />
                    <Outlet />
                </div>
            )}
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Comp />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'people/:celebId/',
                element: <People />,
            },
            {
                path: 'discover/',
                children: [
                    {
                        path: 'tv',
                        element: <TvSeriesDiscover />,
                    },
                    {
                        path: 'movies',
                        element: <MoviesDiscover />,
                    },
                ],
            },
            {
                path: 'tv/:tvSeriesId',
                children: [
                    {
                        path: '',
                        element: <TvSeries />,
                    },
                    {
                        path: 'allImages',
                        element: <TvSeriesAllImages />,
                    },
                ],
            },
            {
                path: 'movie/:movieId',
                children: [
                    {
                        path: '',
                        element: <Movie />,
                    },
                ],
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
