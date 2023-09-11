import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <Link to="/user/login" data-testid="logIn">
            <div className="px-6 pt-1 h-8 hover:bg-slate-700 hover:rounded hover:cursor-pointer">Sign In</div>
        </Link>
    );
}

export default LogIn;
