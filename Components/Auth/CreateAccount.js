import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Header/Logo/Logo';

function CreateAccount() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnteredPassword, setReRenderedPassword] = useState('');

    function nameChangeHandler(e) {
        setName(e.target.value);
    }
    function emailChangeHandler(e) {
        setEmail(e.target.value);
    }
    function passwordChangeHandler(e) {
        setPassword(e.target.value);
    }
    function reEnteredPasswordChangeHandler(e) {
        setReRenderedPassword(e.target.value);
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
                <div className="border-2 rounded-lg py-2 bg-white mb-5">
                    <div className="mx-[8%]">
                        <div className="text-3xl my-2">Create Account</div>
                        <form>
                            <div className="mt-3">
                                <div>
                                    <label>Your name</label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="border-2 w-[100%] focus:bg-cyan-50 rounded p-1"
                                        onChange={nameChangeHandler}
                                        value={name}
                                        placeholder="First and last name"
                                    ></input>
                                </div>
                            </div>
                            <div className="mt-3">
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
                            <div className="mt-3">
                                <div>
                                    <label>Password</label>
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        className="border-2 w-[100%] focus:bg-cyan-50 rounded p-1"
                                        onChange={passwordChangeHandler}
                                        value={password}
                                        placeholder="at least 8 characters"
                                    ></input>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div>
                                    <label>Re-enter Password</label>
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        className="border-2 w-[100%] focus:bg-cyan-50 rounded p-1"
                                        onChange={reEnteredPasswordChangeHandler}
                                        value={reEnteredPassword}
                                    ></input>
                                </div>
                            </div>
                            <button
                                onClick={signInHandler}
                                className="w-[100%] border-white-2 rounded my-5 bg-yellow-400 py-1 hover:brightness-90"
                            >
                                Create your IMDb Account
                            </button>
                        </form>
                        <div>
                            <span>Already have an account?</span>
                            <span className="text-cyan-400">
                                <Link to="/user/login"> Sign In</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
