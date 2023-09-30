function ScrollBarNavigatorLeftButton(props) {
    const { scrollPercentageVal, element } = props;

    return (
        <>
            {scrollPercentageVal != 0 ? (
                <div className="text-white w-[4%] flex justify-center items-center">
                    <button
                        className="px-[39%] py-[50%] rounded z-10 bg-slate-950/[.40] border"
                        onClick={() => {
                            element.scrollLeft -= 400;
                        }}
                    >
                        &lt;
                    </button>
                </div>
            ) : (
                <div className="text-white w-[4%]"></div>
            )}
        </>
    );
}

export default ScrollBarNavigatorLeftButton;
