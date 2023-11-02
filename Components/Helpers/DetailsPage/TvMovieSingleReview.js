import useToGetImageSrc from '../../../hooks/useToGetImageSrc';

function TvMovieSingleReview(props) {
    const { profilePictureUrl, username, content } = props;

    return (
        <div>
            <div className="mb-[-3rem] flex justify-center items-center z-10">
                <img src={useToGetImageSrc(profilePictureUrl)} className="h-[6rem] w-[6rem] rounded-full" />
            </div>
            <div className="border pt-[4rem] rounded px-6 bg-slate-800">
                <div className="text-center text-blue-400 text-lg mb-3">{username}</div>
                <div className="text-white mb-3 h-64 overflow-auto">{content}</div>
            </div>
        </div>
    );
}

export default TvMovieSingleReview;
