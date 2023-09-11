function Menu(props) {
    function makeMenuContentVisible() {
        props.changeMenuVisibility(true);
    }

    return (
        <div
            className="flex hover:bg-slate-700 hover:rounded h-8 px-6 pt-1 hover:cursor-pointer"
            onClick={makeMenuContentVisible}
            data-testid="menu"
        >
            <div className="mt-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                </svg>
            </div>
            <div>Menu</div>
        </div>
    );
}

export default Menu;
