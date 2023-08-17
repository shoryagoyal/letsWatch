import { useState } from 'react';

function Pagination({ totalPageNumber, sendPageNumberToParent }) {
    if (totalPageNumber > 10) totalPageNumber = 10;
    const [pageNumber, setPageNumber] = useState(1);
    function prevButtonClickHandler() {
        if (pageNumber !== 1) {
            sendPageNumberToParent(pageNumber - 1);
            setPageNumber(pageNumber - 1);
        }
    }
    function nextButtonClickHandler() {
        if (pageNumber !== totalPageNumber) {
            sendPageNumberToParent(pageNumber + 1);
            setPageNumber(pageNumber + 1);
        }
    }
    function specificPageButtonClickHandler(pageNumber) {
        sendPageNumberToParent(pageNumber);
        setPageNumber(pageNumber);
    }
    return (
        <div className="flex justify-between my-5">
            <div>
                <button
                    className={`p-2 rounded bg-blue-500 text-white hover:bg-blue-700 ${
                        pageNumber === 1 ? 'invisible' : ''
                    }`}
                    onClick={prevButtonClickHandler}
                >
                    <span>&#8249; </span>
                    <span>Previous</span>
                </button>
            </div>
            <div>
                {[...Array(totalPageNumber)].map((val, index) => (
                    <button
                        className={`px-3 py-2 border ${
                            index + 1 === pageNumber ? 'bg-blue-500 text-white hover:bg-blue-700' : ''
                        }`}
                        key={index}
                        onClick={() => {
                            specificPageButtonClickHandler(index + 1);
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <div>
                <button
                    className={`p-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${
                        pageNumber === totalPageNumber ? 'invisible' : ''
                    }`}
                    onClick={nextButtonClickHandler}
                >
                    <span>Next</span>
                    <span> &#8250;</span>
                </button>
            </div>
        </div>
    );
}

export default Pagination;
