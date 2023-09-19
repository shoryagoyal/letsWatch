function Genres(props) {
    return (
        <div className="border text-white rounded-full px-2 py-1 mr-2 hover:cursor-pointer hover:bg-slate-700">
            {props.name}
        </div>
    );
}

export default Genres;
