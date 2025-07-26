import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAdmin from "../../../../Hooks/useAdmin";


const Profile = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();

    return (
        <div>
            {
                isAdmin ?
                    <>
                        <h1 className="text-2xl font-semibold mb-5">Welcome Admin {user.displayName}!</h1>
                        <p>You can add products, update products' information, delete products, see, confirm and delete customers' orders, see, delete and make admin the website users and also logout from this website using our XPoint Admin's Dashboard.</p>
                        <div role="alert" className="alert mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-neutral h-6 w-6 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>New interactive features will be added to this section in our next update.</span>
                        </div>
                    </> :
                    <>
                        <h1 className="text-2xl font-semibold mb-5">Welcome {user.displayName}!</h1>
                        <p>You can see the products which you've been added to your cart, the orders you placed and also logout from this website using our XPoint Customer's Dashboard.</p>
                        <div role="alert" className="alert mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-neutral h-6 w-6 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>New interactive features will be added to this section in our next update.</span>
                        </div>
                    </>
            }
        </div>
    );
};

export default Profile;