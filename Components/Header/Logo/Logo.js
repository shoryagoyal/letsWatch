import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                alt="let's watch logo"
                className="h-8"
            ></img>
        </Link>
    );
}

export default Logo;
