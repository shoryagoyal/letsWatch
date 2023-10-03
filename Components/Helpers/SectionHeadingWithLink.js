import { Link } from 'react-router-dom';
import { useState } from 'react';

function SectionHeadings(props) {
    const [arrowColor, setArrowColor] = useState('white');
    return (
        <Link to={props.link}>
            <div
                className="text-white flex font-medium text-3xl my-5 max-w-max pr-2"
                onMouseEnter={() => {
                    setArrowColor('yellow-400');
                }}
                onMouseLeave={() => {
                    setArrowColor('white');
                }}
            >
                <div className="h-3xl w-2">
                    <div className="bg-yellow-400 text-yellow-400 h-[100%] w-[100%] rounded"></div>
                </div>
                <div className="pl-2 pr-1">{props.name}</div>
                <div className={`w-5 h-5 border-t-4 border-r-4 rotate-45 mt-2 border-${arrowColor}`}></div>
            </div>
        </Link>
    );
}

export default SectionHeadings;
