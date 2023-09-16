import { useState } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import MenuContent from './Components/Header/Menu/MenuContent';
import store from './utils/store';
import Header from './Components/Header/Header';

function App() {
    const [menuVisible, setIsMenuVisible] = useState(false);
    const [isSearchedResultsShown, setIsSearchedResultsShown] = useState(true);

    function changeMenuVisibilityHandler(isVisible) {
        if (isVisible) setIsMenuVisible(true);
        else setIsMenuVisible(false);
    }

    return (
        <Provider store={store}>
            <div>
                {menuVisible ? (
                    <div>
                        <MenuContent changeMenuVisibility={changeMenuVisibilityHandler} />
                    </div>
                ) : (
                    <div
                        onClick={() => {
                            setIsSearchedResultsShown(false);
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
        </Provider>
    );
}

export default App;
