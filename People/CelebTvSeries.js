import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { imagePrefixApi } from '../constants';

function CelebTvSeries() {
    const { celebId } = useParams();
    const [celebTvSeriesList, setCelebTvSeriesList] = useState('');

    async function getTvSeriesOfCeleb() {
        const celebTvSeriesData = await fetch(
            `https://api.themoviedb.org/3/person/${celebId}/tv_credits?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
        );
        const json = await celebTvSeriesData.json();
        setCelebTvSeriesList(json);
        console.log(json);
    }

    useEffect(() => {
        getTvSeriesOfCeleb();
    }, [celebId]);
    // Information important to us - poster_path, character, id, original_name
    return (
        <div>
            <h1>TV Series</h1>
            {celebTvSeriesList === ''
                ? [...Array(5)].map((value, index) => <div key={index}>Shimmer</div>)
                : celebTvSeriesList.cast.map((tv) => (
                      <div key={`${tv.id}+${tv.credit_id}`}>
                          <img src={`${imagePrefixApi}${tv.poster_path}`} style={{ width: '40px' }} />
                          <div>
                              <span>Character: </span>
                              <span>{tv.character}</span>
                          </div>
                          <div>{tv.original_name}</div>
                      </div>
                  ))}
        </div>
    );
}

export default CelebTvSeries;
