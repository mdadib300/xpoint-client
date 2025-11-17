import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAdmin from "../../../../Hooks/useAdmin";


const Profile = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();

    return (
        <div className="min-h-screen">
            {
                isAdmin ?
                    <>
                        <h1 className="text-2xl font-semibold mb-5">Welcome Admin {user.displayName}!</h1>
                        <p>You can add products, update products' information, delete products, see, confirm and delete customers' orders, see, delete and make admin the website users and also logout from this website using our XPoint Admin's Dashboard.</p>
                    </> :
                    <>
                        <h1 className="text-2xl font-semibold mb-5">Welcome {user.displayName}!</h1>
                        <p>You can see the products which you've been added to your cart, the orders you placed and also logout from this website using our XPoint Customer's Dashboard.</p>
                    </>
            }
        </div>
    );
};

export default Profile;