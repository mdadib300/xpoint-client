import { useContext } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import { Carousel } from 'react-responsive-carousel';
import ScrollToTop from "../ScrollToTop";
import ZoomImage from "../ZoomImage/ZoomImage";

const ProductDetails = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const { _id, images, name, category, price, discountPrice, fit, sizes, colors, description } = useLoaderData();
    const [, refetch] = useCart();

    const handleCart = (e) => {
        e.preventDefault();

        if (user && user.email) {

            const quantity = parseInt(e.target.quantity.value);
            const unitPrice = discountPrice || price;

            const cartData = {
                productId: _id,
                productName: name,
                quantity: quantity,
                price: unitPrice, // ✅ store unit price (important)
                email: user.email,
                image: images[0],
                category: category,
                size: e.target.size.value,
                color: e.target.color.value,
            };

            axiosSecure.post('/cart', cartData)
                .then(res => {

                    // ✅ NEW ITEM ADDED
                    if (res.data.message === "item_added") {
                        Swal.fire({
                            toast: true,
                            position: "top-end",
                            icon: "success",
                            title: "Product added to cart",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }

                    // ✅ EXISTING ITEM → QUANTITY INCREASED
                    else if (res.data.message === "quantity_updated") {
                        Swal.fire({
                            toast: true,
                            position: "top-end",
                            icon: "info",
                            title: "Already in cart, quantity increased",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }

                    // fallback (in case message missing)
                    else if (res.data.insertedId) {
                        Swal.fire({
                            toast: true,
                            position: "top-end",
                            icon: "success",
                            title: "Added to cart",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }

                    refetch();
                    e.target.reset();
                })
                .catch(err => {
                    console.error(err);
                    Swal.fire({
                        icon: "error",
                        title: "Something went wrong",
                        text: "Please try again"
                    });
                });

        } else {
            Swal.fire({
                title: `Please login first`,
                confirmButtonText: "Okay",
                customClass: {
                    confirmButton: 'bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded'
                },
                buttonsStyling: false
            });
            navigate('/login', { state: { from: location } });
        }
    };

    return (
        <div className="bg-white text-black">
            <ScrollToTop />
            <CategoryTitle titleText={category} />

            <div className="hero pb-10">
                <div className="hero-content items-start gap-5 md:gap-10 flex-col lg:flex-row">

                    {/* Images */}
                    <div className="w-full">
                        <Carousel
                            infiniteLoop
                            showThumbs={true}
                            showArrows={true}
                            emulateTouch={true}
                            swipeable={true}
                            renderThumbs={() =>
                                images.map((img, i) => (
                                    <img key={i} src={img} alt={`thumb-${i}`} />
                                ))
                            }
                        >
                            {images.map((img, i) => (
                                <div key={i}>
                                    <ZoomImage src={img} />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    {/* Product Info */}
                    <div className="w-full">
                        <h1 className="text-3xl font-bold">{name}</h1>

                        <div className="py-6">
                            <p className="text-xl mb-2"><b>Product Type:</b> {category}</p>
                            <p className="text-xl my-2"><b>Fit:</b> {fit || "Regular"}</p>

                            <p className="text-xl my-2">
                                <b>Sizes:</b>{" "}
                                {sizes?.map((size, i) => (
                                    <span key={i}>{size} | </span>
                                ))}
                            </p>

                            <p className="text-xl my-2">
                                <b>Colors:</b>{" "}
                                {colors?.map((color, i) => (
                                    <span key={i}>{color} | </span>
                                ))}
                            </p>

                            <div className="text-xl mt-2">
                                <b>Price:</b>{" "}
                                {discountPrice ? (
                                    <>
                                        <span className="line-through text-gray-400 mr-2">
                                            {price} BDT
                                        </span>
                                        <span>{discountPrice} BDT</span>
                                    </>
                                ) : (
                                    <span>{price} BDT</span>
                                )}
                            </div>

                            <p className="mt-2">
                                <b>Product Description:</b>{" "}
                                {description || "Description Unavailable."}
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleCart}>
                            <fieldset className="fieldset">

                                <label className="label">Size</label>
                                <select defaultValue="" className="select bg-white w-full md:w-1/2" name="size">
                                    <option disabled value="">Select Size</option>
                                    {sizes?.map((size, i) => (
                                        <option key={i}>{size}</option>
                                    ))}
                                </select>

                                <label className="label">Color</label>
                                <select defaultValue="" className="select bg-white w-full md:w-1/2" name="color">
                                    <option disabled value="">Select Color</option>
                                    {colors?.map((color, i) => (
                                        <option key={i}>{color}</option>
                                    ))}
                                </select>

                                <label className="label">Quantity</label>
                                <input
                                    required
                                    min={1}
                                    defaultValue={1}
                                    type="number"
                                    className="input bg-white w-full md:w-1/2"
                                    name="quantity"
                                />

                                <input
                                    type="submit"
                                    value="Add to Cart"
                                    className="btn btn-neutral w-full md:w-1/2 mt-4"
                                />
                            </fieldset>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;