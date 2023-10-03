import { useEffect, useState } from 'react';

function ScrollBarNavigatorLeftButton(props) {
    const { element } = props;
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const renderingCondition = element != null && element.scrollWidth > element.clientWidth && scrollPercentage != 0;

    useEffect(() => {
        if (element != null) {
            element.addEventListener('scroll', () => {
                setScrollPercentage((element.scrollLeft / (element.scrollWidth - element.clientWidth)) * 100);
            });
        }
    }, [element && element.scrollWidth]);

    return (
        <>
            {renderingCondition ? (
                <div className="text-white md:w-[5%] w-[8%] flex justify-center items-center">
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
                <div className="text-white md:w-[5%] w-[8%]"></div>
            )}
        </>
    );
}

export default ScrollBarNavigatorLeftButton;
