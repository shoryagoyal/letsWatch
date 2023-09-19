import { useState } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import MenuContent from './Components/Header/Menu/MenuContent';
import store from './utils/store';
import Header from './Components/Header/Header';
import { hideStarRatingModal } from './utils/slices/starRatingModalShown';

function App() {
    const dispatch = useDispatch();
    const [menuVisible, setIsMenuVisible] = useState(false);
    const [isSearchedResultsShown, setIsSearchedResultsShown] = useState(true);

    function changeMenuVisibilityHandler(isVisible) {
        if (isVisible) setIsMenuVisible(true);
        else setIsMenuVisible(false);
    }

    return (
        <div>
            {menuVisible ? (
                <div>
                    <MenuContent changeMenuVisibility={changeMenuVisibilityHandler} />
                </div>
            ) : (
                <div
                    onClick={() => {
                        setIsSearchedResultsShown(false);
                        dispatch(hideStarRatingModal());
                    }}
                >
                    <Header
                        changeMenuVisibility={changeMenuVisibilityHandler}
                        searchedResultsShown={isSearchedResultsShown}
                        setSearchedResultsShown={setIsSearchedResultsShown}
                    />
                    <div className="px-[7%] bg-slate-900">
                        <Outlet />
                    </div>
                </div>
            )}
        </div>
    );
}

function AppWrapper() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default AppWrapper;
