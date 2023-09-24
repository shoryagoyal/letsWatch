function TvMovieCardShimmer() {
    const shimmerContentStyle = 'bg-slate-700 py-4 rounded';
    return (
        <div className="bg-slate-800 w-[100%] rounded-br-lg rounded-bl-lg" data-testid="tvMovieCardShimmer">
            <div className="py-36 bg-slate-700 w-[100%]"></div>
            <div className="px-[4%] p-1" data-testid="tvMovieCardShimmerBody">
                <div className="py-5 flex justify-between">
                    <div className={`${shimmerContentStyle} px-6`}></div>
                    <div className={`${shimmerContentStyle} px-6`}></div>
                </div>
                <div className={`${shimmerContentStyle} my-2`}></div>
                <div className={`${shimmerContentStyle} my-2`}></div>
            </div>
        </div>
    );
}

export default TvMovieCardShimmer;
