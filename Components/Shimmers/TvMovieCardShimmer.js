function TvMovieCardShimmer() {
    const shimmerContentStyle = 'bg-slate-700 py-3 rounded';
    return (
        <div className="bg-slate-800 w-[14%] rounded-br-lg rounded-bl-lg mx-[1%] my-5" data-testid="tvMovieCardShimmer">
            <div className="py-24 bg-slate-700 w-[100%]"></div>
            <div className="mx-2" data-testid="tvMovieCardShimmerBody">
                <div className="my-2 flex justify-between">
                    <div className={`${shimmerContentStyle} px-6`}></div>
                    <div className={`${shimmerContentStyle} px-6`}></div>
                </div>
                <div className={`${shimmerContentStyle} my-3`}></div>
                <div className={`${shimmerContentStyle} my-3`}></div>
            </div>
        </div>
    );
}

export default TvMovieCardShimmer;
