import { Link, NavLink } from "react-router-dom";
import fullLogo from "../../../../assets/images/xpoint-full-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import profilePic from '../../../../assets/images/icons/user.png';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const navbarLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About & Contact</NavLink></li>
        <li><NavLink to="/return">Return & Exchange</NavLink></li>
    </>



    return (
        <div className="navbar bg-neutral-800 shadow-sm text-white md:py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-neutral-800 text-white rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                        {navbarLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/"><img src={fullLogo} className="w-30 md:w-40" /></Link>
            </div>
            <div className="navbar-end">
                <div>
                    {
                        user?.email
                            ? <Link to="/dashboard/profile">
                                <div className="avatar tooltip tooltip-left" data-tip="Your Cart and Other Info.">
                                    <div className="w-12 rounded-full">
                                        <img src={profilePic} />
                                    </div>
                                </div></Link>
                            : <button className="btn"><NavLink to="/login">Login</NavLink></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;