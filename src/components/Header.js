
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-between">
            <div>
                <img className="w-[100px] h-[70px]" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4" alt="logo" />
            </div>
            <ul className="flex px-[70px]">
                <li className="p-3">
                    <Link to="/">Lodaing</Link>
                </li>
                <li className="p-3">
                    <Link to="/">Home</Link>
                </li>
                <li className="p-3">
                    <Link to="/">Gailery</Link>
                </li>
                <li className="p-3">
                    <Link to="/">Shop</Link>
                </li>
                <li className="p-3">
                    <Link to="/">Blog</Link>
                </li>
                <li className="p-3">
                    <Link to="/">About</Link>
                </li>
                <li className="p-3">
                    <Link to="/">Team</Link>
                </li>
                <li className="p-3">
                    <Link to="/">Contact</Link>
                </li>
                <li className="p-3">
                <Link to="/"><i className="fa-solid fa-cart-shopping"></i></Link>

                </li>
            </ul>
        </div>
    );
}

export default Header;
