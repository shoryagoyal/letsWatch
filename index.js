import ReactDOM from 'react-dom/client';

import Header from './Header/Header';

require('dotenv').config();

//console.log(process.env.REACT_APP_MOVIE_DB_API_KEY);

function Comp() {
    return (
        <div>
            <Header />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Comp />);
