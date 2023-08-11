import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import Header from './Header/Header';
import Home from './Home/Home';
import People from './People/People';
import TvSeries from './TVSeries/TvSeries';
import TvSeriesAllImages from './TVSeries/TvSeriesAllImages';
import TvSeriesDiscover from './Components/Discover/TvSeriesDiscover';

require('dotenv').config();

//console.log(process.env.REACT_APP_MOVIE_DB_API_KEY);

function Comp() {
    return (
        <div>
            <Header />
            <Outlet />
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
                path: 'tv/discover',
                element: <TvSeriesDiscover />,
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
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
