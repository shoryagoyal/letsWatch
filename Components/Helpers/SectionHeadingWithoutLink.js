function SectionHeadingWithoutLink(props) {
    return (
        <div className="text-white flex font-semibold text-3xl my-3 max-w-max pr-2">
            <div className="h-3xl w-2">
                <div className="bg-yellow-400 text-yellow-400 h-[100%] w-[100%] rounded"></div>
            </div>
            <div className="pl-2 pr-1">{props.name}</div>
        </div>
    );
}

export default SectionHeadingWithoutLink;
