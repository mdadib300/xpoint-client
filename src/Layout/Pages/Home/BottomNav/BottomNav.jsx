import { NavLink } from "react-router-dom";

const BottomNav = () => {

    const pantLinks = <>
        <NavLink to='/denimpants'><li><a>DENIM - FULL</a></li></NavLink>
        <NavLink to='/twillpants'><li><a>TWILL - FULL</a></li></NavLink>
        <NavLink to='/shorts'><li><a>SHORTS</a></li></NavLink>
    </>;
    const shirtLinks = <>
        <NavLink to='/fullshirts'><li><a>FULL SLEEVE</a></li></NavLink>
        <NavLink to='/halfshirts'><li><a>HALF SLEEVE</a></li></NavLink>
    </>;
    const tShirtLinks = <>
        <NavLink to='/polotshirts'><li><a>POLO</a></li></NavLink>
        <NavLink to='/basictshirts'><li><a>BASIC</a></li></NavLink>
        <NavLink to='/dropshoulders'><li><a>DROP-SHOULDER</a></li></NavLink>
    </>;
    const accessoriesLinks = <>
        <NavLink to='/boxers'><li><a>BOXERS</a></li></NavLink>
        <NavLink to='/belts'><li><a>BELTS</a></li></NavLink>
        <NavLink to='/caps'><li><a>CAPS</a></li></NavLink>
        <NavLink to='/wallets'><li><a>WALLETS</a></li></NavLink>
    </>;

    return (
        <div className="">
            <div className="block lg:hidden">
                <div className="dock bg-neutral-800 text-white">
                    <div className="mx-auto">
                        <button className="" onClick={() => document.getElementById('my_modal_3').showModal()}>CATEGORIES</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box bg-neutral-800 text-white">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div>
                                    <h3 className="font-bold">PANTS</h3>
                                    <div>
                                        {pantLinks}
                                    </div>
                                    <h3 className="font-bold">SHIRTS</h3>
                                    <div>
                                        {shirtLinks}
                                    </div>
                                    <h3 className="font-bold">T-SHIRTS</h3>
                                    <div>
                                        {tShirtLinks}
                                    </div>
                                    <h3 className="font-bold">ACCESSORIES</h3>
                                    <div>
                                        {accessoriesLinks}
                                    </div>
                                </div>
                                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block">
                <div className="dock bg-neutral-800 text-white">
                    <button>
                        <div className="dropdown dropdown-top">
                            <div tabIndex={0} role="button" className="m-1">PANTS</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-neutral-800 rounded-box z-1 w-52 p-2 shadow-sm">
                                {pantLinks}
                            </ul>
                        </div>
                    </button>
                    <button>
                        <div className="dropdown dropdown-top">
                            <div tabIndex={0} role="button" className="m-1">SHIRTS</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-neutral-800 rounded-box z-1 w-52 p-2 shadow-sm">
                                {shirtLinks}
                            </ul>
                        </div>
                    </button>
                    <button>
                        <div className="dropdown dropdown-top">
                            <div tabIndex={0} role="button" className="m-1">T-SHIRTS</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-neutral-800 rounded-box z-1 w-52 p-2 shadow-sm">
                                {tShirtLinks}
                            </ul>
                        </div>
                    </button>
                    <button>
                        <div className="dropdown dropdown-top">
                            <div tabIndex={0} role="button" className="m-1">ACCESSORIES</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-neutral-800 rounded-box z-1 w-52 p-2 shadow-sm">
                                {accessoriesLinks}
                            </ul>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BottomNav;