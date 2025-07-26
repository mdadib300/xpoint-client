import Swal from "sweetalert2";
import useCart from "../../../../Hooks/useCart";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import remove from '../../../../assets/images/icons/remove.png';
import { Link } from "react-router-dom";


const Cart = () => {

    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleRemove = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "This will remove the product from the cart",
            showCancelButton: true,
            confirmButtonColor: "#262626",
            cancelButtonColor: "#862222ff",
            confirmButtonText: "Yes"
        })
        .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/cart/${id}`)
                        .then(res => {
                            console.log(res);
                            if (res.data.deletedCount > 0) {
                                refetch();
                                Swal.fire({
                                    title: "Done",
                                    text: "Product removed from the cart",
                                    confirmButtonColor: "#262626",
                                });
                            }
                        })
                }
            });
    }

    return (
        <div>
            <h1 className="text-2xl"></h1>
            <div>
                <h1 className="text-2xl font-semibold mb-5">Cart</h1>
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl">Total items: {cart.length}</h2>
                        <h2 className="text-xl">Total price: {totalPrice} BDT</h2>
                    </div>
                    <div>
                        <Link to="/dashboard/checkout"><button className="btn btn-neutral">Checkout</button></Link>
                    </div>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <tbody>
                                {
                                    cart.slice().reverse().map(cartProduct =>
                                        <tr key={cartProduct._id}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={cartProduct.image1} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{cartProduct.productName}</div>
                                                        <div className="text-sm opacity-50">{cartProduct.category}</div>
                                                        <div className="text-sm opacity-50">Size: {cartProduct.size}</div>
                                                        <div className="text-sm opacity-50">Color: {cartProduct.color}</div>
                                                        <div className="text-sm opacity-50">Qty: {cartProduct.quantity}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Price: {cartProduct.price} BDT</td>
                                            <th>
                                                <button onClick={() => handleRemove(cartProduct._id)} className="btn btn-ghost btn-circle"><img src={remove} className="w-6" /></button>
                                            </th>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;