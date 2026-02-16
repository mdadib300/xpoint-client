import { Link, NavLink } from "react-router-dom";
import fullLogo from "../../../../assets/images/xpoint-full-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import profilePic from '../../../../assets/images/icons/user.png';
import Marquee from "react-fast-marquee";
import CustomButton from "../../../../Components/CustomButton/CustomButton";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const pantLinks = <>
        <NavLink to='/denimpants'><li className='hover:underline p-1'><a>Denim Pant</a></li></NavLink>
        <NavLink to='/twillpants'><li className='hover:underline p-1'><a>Twill Pant</a></li></NavLink>
        <NavLink to='/shorts'><li className='hover:underline p-1'><a>Shorts</a></li></NavLink>
    </>;
    const upperWear = <>
        <NavLink to='/fullshirts'><li className='hover:underline p-1'><a>Full Sleeve Shirt</a></li></NavLink>
        <NavLink to='/halfshirts'><li className='hover:underline p-1'><a>Half Sleeve Shirt</a></li></NavLink>
        <NavLink to='/polotshirts'><li className='hover:underline p-1'><a>Polo Tee</a></li></NavLink>
        <NavLink to='/basictshirts'><li className='hover:underline p-1'><a>Basic Tee</a></li></NavLink>
        <NavLink to='/dropshoulders'><li className='hover:underline p-1'><a>Drop-Shoulder</a></li></NavLink>
    </>;


    const accessoriesLinks = <>
        <NavLink to='/caps'><li className='hover:underline p-1'><a>Cap</a></li></NavLink>
        <NavLink to='/belts'><li className='hover:underline p-1'><a>Belt</a></li></NavLink>
        <NavLink to='/wallets'><li className='hover:underline p-1'><a>Wallet</a></li></NavLink>
        <NavLink to='/boxers'><li className='hover:underline p-1'><a>Underwear</a></li></NavLink>



    </>;
    const navbarLinks = <>
        {/* <li><NavLink to="/">Home</NavLink></li> */}
        {/* <li><NavLink to="/about">About & Contact</NavLink></li> */}
        {/* <li><NavLink to="/return">Return & Exchange</NavLink></li> */}
        <li>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="">
                    Upper Fit
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-neutral-800 text-white rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                    {upperWear}
                </ul>
            </div>
        </li>
        <li>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="">
                    Lower Fit
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-neutral-800 text-white rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                    {pantLinks}
                </ul>
            </div>
        </li>
        <li>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="">
                    Accessories
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-neutral-800 text-white rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                    {accessoriesLinks}
                </ul>
            </div>
        </li>
    </>



    return (
        <div>
            {/* <div className="navbar bg-neutral-800 shadow-sm text-white md:py-3">
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
            </div> */}
            {/* New Navbar */}
            <div className="navbar bg-neutral-800 shadow-sm text-white px-2 md:px-10 md:py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-neutral-800 text-white rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                            {navbarLinks}
                        </ul>
                    </div>
                    <Link to="/"><img src={fullLogo} className="w-30 md:w-40" /></Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[15px]">
                        {navbarLinks}
                    </ul>
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
                                : <div><NavLink to="/login"><CustomButton text="Login"></CustomButton>  </NavLink> </div>
                        }
                    </div>
                </div>
            </div>
            {/* Announcements */}
            {/* <div className="bg-white text-black">
                <p className="text-center py-2">
                    <Marquee
                        pauseOnHover={true}
                    >
                        <p><pre><b>📢 Announcement:</b> Our shop location has been changed — New Location: Minnat Plaza, Shop no.: 101, 102, 103, Abdullahpur Bazar, South Keraniganj, Dhaka - 1310. </pre></p>
                    </Marquee>
                </p>
            </div> */}
        </div>
    );
};

export default Navbar;