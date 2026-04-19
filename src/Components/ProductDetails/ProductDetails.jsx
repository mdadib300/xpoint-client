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
    const [, refetch] = useCart()

    const handleCart = (e) => {
        if (user && user.email) {
            e.preventDefault();
            const quantity = e.target.quantity.value;
            const unitPrice = discountPrice || price;
            const finalPrice = unitPrice * quantity;
            const cartData = {
                productId: _id,
                productName: name,
                quantity: quantity,
                price: finalPrice,
                email: user.email,
                image: images[0],
                category: category,
                size: e.target.size.value,
                color: e.target.color.value,
            }
            axiosSecure.post('/cart', cartData)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: `${name} added to your cart, checkout by clicking cart icon at the top-right corner of the website`,
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
                <div className="hero-content items-start gap-5 md:gap-10 flex-col lg:flex-row">
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
                            <div >
                                <ZoomImage src={images[0]}></ZoomImage>
                            </div>
                            <div >
                                <ZoomImage src={images[1]}></ZoomImage>
                            </div>
                            <div >
                                <ZoomImage src={images[2]}></ZoomImage>
                            </div>

                        </Carousel>
                    </div>
                    <div className="w-full">
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <div className="py-6">
                            <p className="text-xl mb-2"><b>Product Type:</b> {category}</p>
                            <p className="text-xl my-2"><b>Fit:</b> {fit || "Regular"}</p>
                            <p className="text-xl my-2"><b>Sizes:</b> {sizes?.map(size => <span className="inline">{size} | </span>)}</p>
                            <p className="text-xl my-2"><b>Colors:</b> {colors?.map(color => <span className="inline">{color} | </span>)}</p>
                            <div className="text-xl mt-2">
                                <b>Price:</b>{" "}
                                {discountPrice ? (
                                    <span>
                                        <span className="line-through text-gray-400 mr-2">
                                            {price} BDT
                                        </span>
                                        <span>
                                            {discountPrice} BDT
                                        </span>
                                    </span>
                                ) : (
                                    <span>{price} BDT</span>
                                )}
                            </div>
                            <p className="mt-2"><b>Product Description:</b> {description || "Description Unavailable."}</p>
                        </div>
                        <div>
                            <form onSubmit={handleCart}>
                                <fieldset className="fieldset">
                                    <label className="label">Size</label>
                                    <select defaultValue="" className="select bg-white w-full md:w-1/2" name="size">
                                        <option disabled value="">Select Size (If applicable)</option>
                                        {
                                            sizes?.map(size => <option>{size}</option>)
                                        }
                                    </select>
                                    <label className="label">Select the color</label>
                                    <select defaultValue="" className="select bg-white w-full md:w-1/2" name="color">
                                        <option disabled value="">Select Color (If applicable)</option>
                                        {
                                            colors?.map(color => <option>{color}</option>)
                                        }
                                    </select>
                                    <label className="label">Quantity</label>
                                    <input required defaultValue={1} type="number" className="input bg-white w-full md:w-1/2" name="quantity" />
                                    <input type="submit" value="Add to Cart" className="btn btn-neutral w-full md:w-1/2 mt-4" />
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