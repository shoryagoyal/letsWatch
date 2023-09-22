function SectionHeadingWithoutLink(props) {
    return (
        <div className="text-white flex font-semibold text-2xl my-3 max-w-max pr-2">
            <div className="rounded bg-yellow-400 text-yellow-400">|</div>
            <div className="pl-2 pr-1">{props.name}</div>
        </div>
    );
}

export default SectionHeadingWithoutLink;
