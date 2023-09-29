import { Link } from 'react-router-dom';

function DetailsPagePhotoVideoHeader(props) {
    const { videoKey, videosCount, imagesCount } = props;

    return (
        <div className="h-[55%] flex justify-between py-2">
            <div className="w-[20%] mr-[1%] border-slate-800 hover:brightness-[110%] hover:cursor-pointer">
                <img src={props.poster} />
            </div>
            <div className="w-[58%]">
                <iframe
                    className="w-[100%] h-[100%]"
                    src={`https://www.youtube.com/embed/${
                        videoKey === null ? 'H3_ZqnqLyVo' : videoKey
                    }?si=vngVLDGuLvJXa4-r&autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>
            <div className="w-[20%] ml-[1%] flex-col justify-between">
                <div className="w-[100%] h-[49%] bg-slate-600 flex items-center justify-center hover:brightness-[110%]">
                    <div>
                        <div className="flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                width="16"
                                height="16"
                                className="bi bi-play-btn-fill"
                            >
                                <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                            </svg>
                        </div>
                        <div className="text-center text-white mt-2">
                            {videosCount} {videosCount <= 1 ? ' video' : 'videos'}
                        </div>
                    </div>
                </div>
                <Link
                    to="#"
                    className="h-[49%] mt-[3%] bg-slate-600 flex items-center justify-center hover:brightness-[110%] w-[100%]"
                >
                    <div>
                        <div className="flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="white"
                                className="bi bi-image-fill"
                            >
                                <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                            </svg>
                        </div>
                        <div className="flex justify-center items-center mt-2 text-white">
                            {imagesCount > 99 ? '99+' : imagesCount} {imagesCount <= 1 ? 'Image' : 'Images'}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default DetailsPagePhotoVideoHeader;
