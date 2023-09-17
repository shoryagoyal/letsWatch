import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function MenuContent(props) {
    const headingStyle = 'text-2xl font-bold';
    const linkStyle = 'my-2 hover:underline';

    function makeMenuContentHidden() {
        props.changeMenuVisibility(false);
    }

    return (
        <div
            className="bg-slate-900 text-white flex-row"
            style={{ height: '100vh' }}
            data-testid="menuContentContainer"
        >
            <div className="w-[70%] ml-[15%]">
                <div className="flex justify-between py-8">
                    <div>
                        <Logo />
                    </div>
                    <div onClick={makeMenuContentHidden}>
                        <button className="bg-yellow-400 w-10 h-10 rounded-full text-black">&times;</button>
                    </div>
                </div>
                <div className="flex justify-between h-full">
                    <div>
                        <div>
                            <div className={headingStyle}>Movies</div>
                            <div className="flex-row justify-between">
                                <div className={linkStyle}>
                                    <Link to="#">Release calender</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">Top 250 movies</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">Most popular movies</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">Browse Movies By Genre</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">Top Box Office</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">Showtimes and tickets</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">India movie spotlight</Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={headingStyle}>Celebs</div>
                            <div>
                                <div className={linkStyle}>
                                    <Link to="#">Born toady</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">Most Popular Celebs</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">Celebrity News</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className={headingStyle}>TV Shows</div>
                            <div>
                                <div className={linkStyle}>
                                    <Link to="#">What's on TV and streaming</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">Top 250 TV Shows</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">Most Popular TV Shows</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">Browse TV Shows By Genre</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">TV News</Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={headingStyle}>Watch</div>
                            <div>
                                <div className={linkStyle}>
                                    <Link to="#">What To Watch</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">Latest Trailers</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className={headingStyle}>Awards & Event</div>
                            <div>
                                <div className={linkStyle}>
                                    <Link to="#">Oscar</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">Emmys</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">All Events</Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={headingStyle}>Community</div>
                            <div>
                                <div className={linkStyle}>
                                    <Link to="#">Help Center</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">Contribution Zone</Link>
                                </div>
                                <div className={linkStyle}>
                                    <Link to="#">Polls</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MenuContent;
