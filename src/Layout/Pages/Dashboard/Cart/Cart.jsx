import Swal from "sweetalert2";
import useCart from "../../../../Hooks/useCart";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import remove from '../../../../assets/images/icons/remove.png';
import { Link } from "react-router-dom";

const Cart = () => {

    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();

    // ✅ FIXED total price (with quantity)
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0
    );

    // ✅ REMOVE ITEM
    const handleRemove = (id) => {
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
    };

    // ✅ QUANTITY UPDATE FUNCTION
    const handleQuantityChange = (id, type, currentQty = 1) => {
        let newQty = currentQty;

        if (type === "inc") {
            newQty = currentQty + 1;
        } else if (type === "dec" && currentQty > 1) {
            newQty = currentQty - 1;
        }

        axiosSecure.patch(`/cart/${id}`, { quantity: newQty })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-2xl font-semibold mb-5">Cart</h1>

            {/* Summary */}
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h2 className="text-xl">Total items: {cart.length}</h2>
                    <h2 className="text-xl font-semibold">
                        Total price: {totalPrice} BDT
                    </h2>
                </div>
                <div>
                    <Link to="/dashboard/checkout">
                        <button className="btn btn-neutral">Checkout</button>
                    </Link>
                </div>
            </div>

            {/* Cart Table */}
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {
                            cart.slice().reverse().map(cartProduct => (
                                <tr key={cartProduct._id}>
                                    {/* Product Info */}
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="h-16 w-16">
                                                    <img src={cartProduct.image} alt="product" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {cartProduct.productName}
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    Size: {cartProduct.size}
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    Color: {cartProduct.color}
                                                </div>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-2 mt-2">
                                                    <button
                                                        onClick={() =>
                                                            handleQuantityChange(
                                                                cartProduct._id,
                                                                "dec",
                                                                cartProduct.quantity
                                                            )
                                                        }
                                                        disabled={cartProduct.quantity <= 1}
                                                        className="btn btn-xs btn-ghost text-lg"
                                                    >
                                                        -
                                                    </button>

                                                    <span className="font-medium">
                                                        {cartProduct.quantity || 1}
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            handleQuantityChange(
                                                                cartProduct._id,
                                                                "inc",
                                                                cartProduct.quantity
                                                            )
                                                        }
                                                        className="btn btn-xs btn-ghost text-lg"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* ✅ Price with quantity */}
                                    <td className="font-semibold">
                                        {cartProduct.price * (cartProduct.quantity || 1)} BDT
                                    </td>

                                    {/* Remove Button */}
                                    <td>
                                        <button
                                            onClick={() => handleRemove(cartProduct._id)}
                                            className="btn btn-ghost btn-circle"
                                        >
                                            <img src={remove} className="w-6" alt="remove" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;