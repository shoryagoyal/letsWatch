import Search from './Search/Search';
import Logo from './Logo/Logo';
import LogIn from './LogIn/LogIn';
import Menu from './Menu/Menu';
import WatchList from './WatchList/WatchList';

function Header(props) {
    return (
        <div className="text-base font-bold bg-black text-white">
            <div className="w-[85%] ml-[7%] flex justify-center pt-2">
                <div className="w-[7%]">
                    <Logo />
                </div>
                <div className="mr-2">
                    <Menu changeMenuVisibility={props.changeMenuVisibility} />
                </div>
                <div className="w-[45%]">
                    <Search />
                </div>
                <div className="ml-2">
                    <WatchList />
                </div>
                <div>
                    <LogIn />
                </div>
            </div>
        </div>
    );
}
export default Header;
