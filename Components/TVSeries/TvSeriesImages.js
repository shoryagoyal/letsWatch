import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { imagePrefixApi } from '../../constants';

function TvSeriesImages() {
    const { tvSeriesId } = useParams();
    const [tvSeriesImagesData, setTvSeriesImagesData] = useState('');
    async function getTvSeriesImageData() {
        const images = await fetch(
            `https://api.themoviedb.org/3/tv/${tvSeriesId}/images?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
        );
        const json = await images.json();
        setTvSeriesImagesData(json.backdrops.slice(0, 20));
    }
    useEffect(() => {
        getTvSeriesImageData();
    }, [tvSeriesId]);

    return (
        <div>
            {tvSeriesImagesData === ''
                ? [...Array(5)].map((val, index) => <div key={index}>Shimmer</div>)
                : tvSeriesImagesData.map((image) => (
                      <img
                          src={`${imagePrefixApi}${image.file_path}`}
                          style={{ width: '100px', margin: '10px' }}
                          key={image.file_path}
                      />
                  ))}
        </div>
    );
}
export default TvSeriesImages;
