import { NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

const CategoryTitle = ({ titleText }) => {

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

    return (
        <div className='py-5 md:py-10 uppercase flex flex-col md:flex-row justify-between mx-5 md:mx-20'>
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
                    <div className="modal-box bg-white text-black">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className='p-5'>
                            <h3 className="font-bold">Upper Fit</h3>
                            <div>
                                {upperWear}
                            </div>
                            <h3 className="font-bold">Lower Fit</h3>
                            <div>
                                {pantLinks}
                            </div>
                            <h3 className="font-bold">Accessories</h3>
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