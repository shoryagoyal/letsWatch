function DetailsPagePhotoVideoHeader(props) {
    let videoKeyVal = 'H3_ZqnqLyVo';
    if (props.videoKey.length !== 0) {
        videoKeyVal = props.videoKey[0].key;
    }

    return (
        <div className="h-[55%] flex justify-between py-2">
            <div className="w-[20%] mr-[1%] border-slate-800 hover:brightness-[110%] hover:cursor-pointer">
                <img src={props.poster} />
            </div>
            <div className="w-[58%]">
                <iframe
                    className="w-[100%] h-[100%]"
                    src={`https://www.youtube.com/embed/${videoKeyVal}?si=vngVLDGuLvJXa4-r&autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>
            <div className="w-[20%] ml-[1%] flex-col justify-between">
                <div className="h-[49%] bg-slate-600 flex items-center justify-center hover:brightness-[110%]">
                    Videos
                </div>
                <div className="h-[49%] mt-[3%] bg-slate-600 flex items-center justify-center hover:brightness-[110%]">
                    Images
                </div>
            </div>
        </div>
    );
}

export default DetailsPagePhotoVideoHeader;
