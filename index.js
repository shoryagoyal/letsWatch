import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import Home from './Components/Home/Home';
import People from './Components/People/People';
import TvSeries from './Components/TVSeries/TvSeries';
import TvSeriesAllImages from './Components/TVSeries/TvSeriesAllImages';
import TvSeriesDiscover from './Components/Discover/TvSeriesDiscover';
import MoviesDiscover from './Components/Discover/MoviesDiscover';
import Movie from './Components/MovieDetailPage/Movie';
import SignIn from './Components/Auth/SignIn';
import CreateAccount from './Components/Auth/CreateAccount';
import WatchList from './Components/WatchList/WatchList';
import App from './App';

require('dotenv').config();

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'user/',
                children: [
                    {
                        path: 'login',
                        element: <SignIn />,
                    },
                    {
                        path: 'register',
                        element: <CreateAccount />,
                    },
                    {
                        path: 'watchList',
                        element: <WatchList />,
                    },
                ],
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
