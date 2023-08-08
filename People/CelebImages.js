import { useState, useEffect } from 'react';
import { imagePrefixApi } from '../constants';
import { useParams } from 'react-router-dom';

function CelebImages() {
    const [celebImages, setCelebImages] = useState('');
    const { celebId } = useParams();
    console.log('component rendered images');
    async function getCelebImages() {
        const celebImageData = await fetch(
            `https://api.themoviedb.org/3/person/${celebId}/images?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
        );
        const json = await celebImageData.json();
        setCelebImages(json);
    }
    useEffect(() => {
        getCelebImages();
    }, [celebId]);

    return (
        <div>
            <h1>Images</h1>
            {celebImages === ''
                ? [...Array(5)].map((value, index) => <div key={index}>Shimmer</div>)
                : celebImages.profiles.map((image) => (
                      <img
                          style={{ width: '40px' }}
                          src={`${imagePrefixApi}${image.file_path.substring(1)}`}
                          key={image.file_path}
                      ></img>
                  ))}
        </div>
    );
}

export default CelebImages;
