import { NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

const CategoryTitle = ({ titleText }) => {
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
        <div className='my-5 md:my-10 uppercase flex flex-col md:flex-row justify-between mx-5 md:mx-20'>
            <div className='text-2xl md:text-3xl text-center font-semibold md:font-bold mb-5 md:mb-0'>
                <Typewriter
                    words={[`${titleText}`]}
                    loop={5}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={70}
                    delaySpeed={3000}
                />
            </div>
            <div className='mx-auto md:mx-0'>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-neutral btn-outline" onClick={() => document.getElementById('my_modal_3').showModal()}>Show More Categories</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
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
    );
};

export default CategoryTitle;