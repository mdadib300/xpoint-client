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
        <div className="min-h-screen">
            <h1 className='text-2xl font-semibold mb-2'>Orders</h1>
            {
                orders.length > 0 && (
                    <div role="alert" className="alert mb-2 bg-white text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-neutral h-6 w-6 shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>After we confirm your order, you need to pay 200 BDT in advance using Bkash Payment. Our Bkash number is attached with the email you receive after placing the order. After the advance payment, please send us the Bkash number you paid with in the reply of the email.</span>
                    </div>
                )
            }
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            {
                                orders.slice().map(order =>
                                    <tr key={order._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div>
                                                    <div className="badge badge-outline badge-neutral mb-1">{order.status}</div>
                                                    {
                                                        order.cartItems.map(cartItem => <div className="text-sm opacity-50">
                                                            <p>Product: {cartItem.productName}</p>
                                                            <p>Size: {cartItem.size}</p>
                                                            <p>Color: {cartItem?.color}</p>
                                                            <p>Quantity: {cartItem.quantity}</p>
                                                            <p>Unit Price: {cartItem.price} BDT</p>
                                                            <p>Total: {cartItem.price * cartItem.quantity} BDT</p>
                                                            <hr />
                                                        </div>)
                                                    }
                                                </div>
                                            </div>
                                        </td>
                                        <td>Total Amount: {order.amount} BDT</td>
                                        <th>
                                            <button onClick={() => handleCancel(order._id)} className="btn btn-outline btn-sm" disabled={order.status !== 'Pending'}>Cancel Order</button>
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