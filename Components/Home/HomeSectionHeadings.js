import { Link } from 'react-router-dom';
import { useState } from 'react';

function HomeSectionHeadings(props) {
    const [arrowColor, setArrowColor] = useState('white');
    return (
        <Link to="/user/watchList">
            <div
                className="text-white flex font-semibold text-2xl my-3 max-w-max pr-2"
                onMouseEnter={() => {
                    setArrowColor('yellow-400');
                }}
                onMouseLeave={() => {
                    setArrowColor('white');
                }}
            >
                <div className="rounded bg-yellow-400 text-yellow-400">|</div>
                <div className="pl-2 pr-1">{props.name}</div>
                <div className={`w-4 h-4 border-t-4 border-r-4 rotate-45 mt-2 border-${arrowColor}`}></div>
            </div>
        </Link>
    );
}

export default HomeSectionHeadings;
