import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Header/Logo/Logo';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function emailChangeHandler(e) {
        setEmail(e.target.value);
    }
    function passwordChangeHandler(e) {
        setPassword(e.target.value);
    }
    function signInHandler(e) {
        e.preventDefault();
    }

    return (
        <div className="flex justify-center">
            <div className="w-[25%]">
                <div className="flex justify-center my-2">
                    <Logo />
                </div>
                <div className="border-2 rounded-lg py-2">
                    <div className="mx-[8%]">
                        <div className="text-3xl my-2">Sign In</div>
                        <form>
                            <div>
                                <div>
                                    <label>Email</label>
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        className="border-2 w-[100%] focus:bg-cyan-50 rounded p-1"
                                        onChange={emailChangeHandler}
                                        value={email}
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Password</label>
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        className="border-2 w-[100%] focus:bg-cyan-50 rounded p-1"
                                        onChange={passwordChangeHandler}
                                        value={password}
                                    ></input>
                                </div>
                            </div>
                            <button
                                onClick={signInHandler}
                                className="w-[100%] border-white-2 rounded my-5 bg-yellow-400 py-1 hover:brightness-90"
                            >
                                Sign In
                            </button>
                        </form>
                        <div>New to IMDb?</div>
                        <Link to="/user/register">
                            <button className="w-[100%] border-2 rounded my-3 py-1 hover:brightness-90">
                                Create your IMDb Account
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
