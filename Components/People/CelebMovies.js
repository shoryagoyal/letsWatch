import { useEffect, useState } from 'react';
import { imagePrefixApi } from '../../constants';
import { useParams } from 'react-router-dom';

function CelebMovies() {
    const [celebMovieList, setCelebMovieList] = useState('');
    const { celebId } = useParams();
    console.log('component rendered');
    async function getCelebMoviesList() {
        //Details we will take - poster_path,vote_average,title, character
        const celebMovieData = await fetch(
            `https://api.themoviedb.org/3/person/${celebId}/movie_credits?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
        );
        const json = await celebMovieData.json();
        setCelebMovieList(json);
    }
    useEffect(() => {
        getCelebMoviesList();
    }, [celebId]);
    return (
        <div>
            <h1>Movies</h1>
            {celebMovieList == ''
                ? [0, 0, 0, 0, 0].map((v, i) => <div key={i}>Shimmer</div>)
                : celebMovieList.cast.map((movie) => (
                      <div key={movie.id}>
                          <div>
                              <img src={`${imagePrefixApi}${movie.poster_path}`} style={{ width: '40px' }}></img>
                          </div>
                          <div>
                              <div>{movie.title}</div>
                              <div>{movie.vote_average}</div>
                              <div>{movie.character}</div>
                          </div>
                      </div>
                  ))}
        </div>
    );
}
export default CelebMovies;
