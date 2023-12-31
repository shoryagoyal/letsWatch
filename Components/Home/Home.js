import HomeWatchList from './HomeWatchList';
import UpcomingMovies from './UpcomingMovies';

function Home() {
    return (
        <div data-testid="home">
            <div>Home</div>
            <HomeWatchList />
            <UpcomingMovies />
        </div>
    );
}

export default Home;
