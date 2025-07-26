import { useContext, useState } from "react";
import useCart from "../../../../Hooks/useCart";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const Checkout = () => {

    const { user } = useContext(AuthContext);
    const [cart] = useCart();
    const [deliveryCharge, setDeliveryCharge] = useState(150);
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const finalPrice = totalPrice + deliveryCharge;
    const axiosSecure = useAxiosSecure();

    const handlePlaceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const order = {
            name: form.name.value,
            email: user.email,
            phone: form.phoneNumber.value,
            address: form.address.value,
            deliveryLocation: form.deliveryLocation.value,
            amount: finalPrice,
            paymentMethod: form.paymentMethod.value,
            cartItems: cart,
            status: "pending",
            orderTime: new Date(),
        };
        Swal.fire({
            title: "Confirm Placing the order?",
            showCancelButton: true,
            confirmButtonColor: "#262626",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post("/orders", order)
                    .then(res => {
                        if (res.data.insertedId) {
                            form.reset();
                            Swal.fire({
                                title: "Order Placed",
                                confirmButtonColor: "#262626"
                            });
                        }
                    })
            }
        });
    }

    const handlePaymentMethod = (e) => {
        const selected = e.target.value;
        if (selected === "Cash On Delivery") {
            Swal.fire({
                title: "Important Alert!",
                text: "অর্ডার কনফার্ম হয়েছে কিনা দেখার জন্য ১ কর্মদিবসের মধ্যে 'Orders' পেইজে 'Order Status' চেক করুন। অর্ডার ক্যান্সেল হওয়ার মূল কারণের মধ্যে আপনার কাঙ্ক্ষিত সাইজ বা কালার স্টকে না থাকা, অথবা 'Checkout' ফর্ম সঠিকভাবে পূরণ না করা অন্যতম।",
                confirmButtonColor: "#262626"
            });
        } 
        // else if (selected === "Online Payment") {
        //     Swal.fire({
        //         title: "Important Alert!",
        //         text: "অনলাইন পেমেন্ট করার পূর্বে আপনার কাঙ্ক্ষিত সাইজ এবং কালারটি আমাদের স্টকে আছে কিনা সেটি আমাদের সাথে যোগাযোগ করে কনফার্ম হয়ে নিন। যেহেতু আমরা এক্সপোর্ট প্রোডাক্ট সেল করি তাই প্রোডাক্ট সাইজ এন্ড কালার এভেলেবিলিটি নিয়ে অনেক ইস্যু থাকে।",
        //         confirmButtonColor: "#262626"
        //     });
        // }
    }

    const handleDeliveryLocation = (e) => {
        const selected = e.target.value;
        if (selected === "Inside Dhaka") {
            setDeliveryCharge(100);
        } else if (selected === "Outside Dhaka") {
            setDeliveryCharge(150);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-2">Checkout</h1>
            <div role="alert" className="alert mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-neutral h-6 w-6 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>We have already your Email as you logged in to our website, now fill the form below accurately. Your order will be confirmed or cancelled by our Web Team. We cancel orders mainly due to product's size or color availability or if you don't fill this form properly.</span>
            </div>
            <div>
                <form onSubmit={handlePlaceOrder}>
                    <fieldset className="fieldset">
                        <label className="label">Your Full Name</label>
                        <input required type="text" className="input" placeholder="Full Name" name="name" />
                        <label className="label">Your Phone Number</label>
                        <input required type="text" className="input" placeholder="Phone Number" name="phoneNumber" />
                        <label className="label">Your Full address</label>
                        <input required type="text" className="input" placeholder="Address" name="address" />
                        <label className="label">Delivery Location</label>
                        <select required defaultValue="" className="select" name="deliveryLocation" onChange={handleDeliveryLocation}>
                            <option disabled value="">Select Delivery Location</option>
                            <option>Inside Dhaka</option>
                            <option>Outside Dhaka</option>
                        </select>
                        <p className="font-bold mt-2">
                            Amount To Pay: {totalPrice} BDT + {deliveryCharge} (Delivery Charge) = {finalPrice} BDT
                        </p>
                        <select required defaultValue="" className="select" name="paymentMethod" onChange={handlePaymentMethod}>
                            <option disabled value="">Select Payment Method</option>
                            <option>Cash On Delivery</option>
                            {/* <option>Online Payment</option> */}
                        </select>
                        <input type="submit" value="Place Order" className="btn btn-neutral btn-wide mt-3" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Checkout;