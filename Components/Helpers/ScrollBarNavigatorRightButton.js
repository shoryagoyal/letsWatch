function ScrollBarNavigatorRightButton(props) {
    const { scrollPercentageVal, element } = props;

    return (
        <>
            {scrollPercentageVal < 98 && (
                <div className="text-white md:w-[5%] w-[8%] flex justify-center items-center">
                    <button
                        className="px-[39%] py-[50%] rounded z-10 bg-slate-950/[.40] border"
                        onClick={() => {
                            element.scrollLeft += 400;
                        }}
                    >
                        &gt;
                    </button>
                </div>
            )}
        </>
    );
}

export default ScrollBarNavigatorRightButton;
