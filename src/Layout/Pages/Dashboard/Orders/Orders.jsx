import Swal from "sweetalert2";
import useOrders from "../../../../Hooks/useOrders";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const Orders = () => {
    const [orders, refetch] = useOrders();
    const axiosSecure = useAxiosSecure();
    const handleCancel = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You are cancelling the order.",
            showCancelButton: true,
            confirmButtonColor: "#262626",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/orders/${id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Done",
                                text: "Your order has been cancelled.",
                                confirmButtonColor: "#262626"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-2'>Orders</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            {
                                orders.slice().reverse().map(order =>
                                    <tr key={order._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                {/* <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={order.image} />
                                                    </div>
                                                </div> */}
                                                <div>
                                                    <div className="font-bold">Order Status: {order.status}</div>
                                                    {
                                                        order.cartItems.map(cartItem => <div className="text-sm opacity-50">
                                                            <p>Product: {cartItem.productName}</p>
                                                            <p>Size: {cartItem.size}</p>
                                                            <p>Color: {cartItem?.color}</p>
                                                            <p>Quantity: {cartItem.quantity}</p>
                                                            <p>Price: {cartItem.price}</p>
                                                            <hr />
                                                        </div>)
                                                    }
                                                </div>
                                            </div>
                                        </td>
                                        <td>Total Amount: {order.amount} BDT</td>
                                        <th>
                                            <button onClick={() => handleCancel(order._id)} className="btn btn-ghost btn-xs" disabled={order.status !== 'pending'}>Cancel Order</button>
                                        </th>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;