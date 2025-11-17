import { useContext } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import { Carousel } from 'react-responsive-carousel';
import ScrollToTop from "../ScrollToTop";


const ProductDetails = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const { _id, image1, image2, image3, name, category, price, fit, sizes, colors } = useLoaderData();
    const [, refetch] = useCart()

    const handleCart = (e) => {
        if (user && user.email) {
            e.preventDefault();
            const quantity = e.target.quantity.value;
            const finalPrice = price * quantity;
            const cartData = {
                productId: _id,
                productName: name,
                quantity: quantity,
                price: finalPrice,
                email: user.email,
                image1: image1,
                image2: image2,
                image3: image3,
                category: category,
                size: e.target.size.value,
                color: e.target.color.value,
            }
            axiosSecure.post('/cart', cartData)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: `${name} added to your cart`,
                            confirmButtonText: "Okay",
                            customClass: {
                                confirmButton: 'bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded'
                            },
                            buttonsStyling: false
                        });
                        // Refetch the cart
                        refetch();
                        e.target.reset();
                    }
                })
        }
        else {
            Swal.fire({
                title: `Please login first`,
                confirmButtonText: "Okay",
                customClass: {
                    confirmButton: 'bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded'
                },
                buttonsStyling: false
            });
            navigate('/login', { state: { from: location } })
        }
    }

    return (
        <div className="bg-white text-black">
            <ScrollToTop></ScrollToTop>
            <CategoryTitle titleText={category}></CategoryTitle>
            <div className="hero pb-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-full">
                        <Carousel
                            autoPlay={true}
                            interval={5000}
                            infiniteLoop={true}
                            stopOnHover={false}
                            showThumbs={false}
                            showStatus={false}

                        >
                            <div >
                                <img src={image1} alt="" />
                            </div>
                            <div >
                                <img src={image2} alt="" />
                            </div>
                            <div >
                                <img src={image3} alt="" />
                            </div>

                        </Carousel>
                    </div>
                    <div className="w-full">
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <div className="py-6">
                            <p className="text-xl mb-2"><b>Product Type:</b> {category}</p>
                            <p className="text-xl my-2"><b>Fit:</b> {fit}</p>
                            <p className="text-xl my-2"><b>Sizes:</b> {sizes?.map(size => <p className="inline">{size} | </p>)}</p>
                            <p className="text-xl my-2"><b>Colors:</b> {colors?.map(color => <p className="inline">{color} | </p>)}</p>
                            <p className="text-xl mt-2"><b>Price:</b> {price} BDT</p>
                        </div>
                        <div>
                            <form onSubmit={handleCart}>
                                <fieldset className="fieldset">
                                    <label className="label">Size</label>
                                    <select defaultValue="" className="select bg-white" name="size">
                                        <option disabled value="">Select Size (If applicable)</option>
                                        {
                                            sizes?.map(size => <option>{size}</option>)
                                        }
                                    </select>
                                    <label className="label">Select the color</label>
                                    <select defaultValue="" className="select bg-white" name="color">
                                        <option disabled value="">Select Color (If applicable)</option>
                                        {
                                            colors?.map(color => <option>{color}</option>)
                                        }
                                    </select>
                                    <label className="label">Quantity</label>
                                    <input required defaultValue={1} type="number" className="input bg-white" name="quantity" />
                                    <input type="submit" value="Add to Cart" className="btn btn-neutral btn-outline btn-wide mt-4" />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;