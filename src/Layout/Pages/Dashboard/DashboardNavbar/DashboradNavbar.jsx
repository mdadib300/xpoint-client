import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../assets/images/xpoint-full-logo.png';
import { useContext } from "react";
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../../../Providers/AuthProvider';
import useAdmin from '../../../../Hooks/useAdmin';

const DashboradNavbar = () => {

    const [isAdmin] = useAdmin();

    const { logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOutUser();
        navigate('/');
        Swal.fire({
            title: "Logout Successful",
            confirmButtonText: "Okay",
            customClass: {
                confirmButton: 'bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded'
            },
            buttonsStyling: false
        });
    }

    const links = <>{
        isAdmin ?
            <>
                <li><NavLink to="/dashboard/profile">Home</NavLink></li>
                <li><NavLink to="/dashboard/addProduct">Add Product</NavLink></li>
                <li><NavLink to="/dashboard/manageProducts">Manage Products</NavLink></li>
                <li><NavLink to="/dashboard/allOrders">Orders</NavLink></li>
                <li><NavLink to="/dashboard/users">Users</NavLink></li>
                <li><button onClick={handleLogOut}>Logout</button></li>

            </>
            : <>
                <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
                <li><NavLink to="/dashboard/cart">Cart</NavLink></li>
                <li><NavLink to="/dashboard/orders">Orders</NavLink></li>
                <li><button onClick={handleLogOut}>Logout</button></li>
            </>

    }</>

    return (
        <div>
            <div className="navbar bg-neutral-800 text-white shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-neutral-800 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="ms-2 md:ms-5 w-30 md:w-40"><img src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/"><CustomButton text={'Home'}></CustomButton></Link>
                </div>
            </div>
        </div>
    );
};

export default DashboradNavbar;