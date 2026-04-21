import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
    const product = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        const form = e.target;

        try {
            // ---------------- Images ----------------
            const imageFiles = [
                form.image1.files[0],
                form.image2.files[0],
                form.image3.files[0]
            ].filter(Boolean);

            let uploadedImages = [];

            if (imageFiles.length > 0) {
                const uploadPromises = imageFiles.map(file => {
                    const formData = new FormData();
                    formData.append("image", file);

                    return axiosPublic.post(image_hosting_api, formData, {
                        headers: { "content-type": "multipart/form-data" },
                    });
                });

                const responses = await Promise.all(uploadPromises);
                uploadedImages = responses.map(res => res.data.data.display_url);
            }

            const finalImages = [...(product.images || [])];

            // Replace images one by one
            uploadedImages.forEach((img, index) => {
                finalImages[index] = img;
            });

            // ---------------- Other Fields ----------------
            const sizes = form.sizes.value
                ? form.sizes.value.split(',').map(s => s.trim())
                : [];

            const colors = form.colors.value
                ? form.colors.value.split(',').map(c => c.trim())
                : [];

            const price = parseInt(form.price.value);
            const discountPrice = form.discountPrice.value
                ? parseInt(form.discountPrice.value)
                : null;

            const productInfo = {
                name: form.name.value,
                category: form.category.value,
                price: price,
                discountPrice: discountPrice,
                fit: form.fit.value,
                sizes,
                colors,
                description: form.description.value || "Not Available",
                images: finalImages
            };

            // ---------------- Update DB ----------------
            const res = await axiosSecure.patch(`/products/${product._id}`, productInfo);

            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    title: "Product Updated Successfully",
                    confirmButtonText: "Okay",
                    customClass: {
                        confirmButton: 'bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded'
                    },
                    buttonsStyling: false
                });

                navigate('/dashboard/manageProducts');
            }

        } catch (error) {
            console.error("Update Error:", error);
            Swal.fire({
                title: "Error",
                text: "Something went wrong while updating product.",
                icon: "error"
            });
        }
    };

    return (
        <div>
            <h1 className='text-2xl font-semibold pb-5'>Update Product</h1>

            <form onSubmit={handleUpdateProduct}>
                <fieldset className="fieldset pb-10">

                    <label className="label">Give a unique Product Title</label>
                    <input
                        required
                        type="text"
                        className="input bg-white border-gray-200"
                        name="name"
                        defaultValue={product?.name}
                    />
                    <br />

                    <select
                        className="select bg-white border-gray-200"
                        name="category"
                        defaultValue={product?.category}
                    >
                        <option disabled value="">Select Category</option>
                        <option>Denim Pants</option>
                        <option>Twill Pants</option>
                        <option>Formal Pants</option>
                        <option>Trousers</option>
                        <option>Shorts</option>
                        <option>Full Sleeve Shirts</option>
                        <option>Half Sleeve Shirts</option>
                        <option>Polo T-shirts</option>
                        <option>Basic T-shirts</option>
                        <option>Drop-shoulder</option>
                        <option>Underwears</option>
                        <option>Belts</option>
                        <option>Caps</option>
                        <option>Wallets</option>
                    </select>
                    <br />

                    <label className="label">Set the Price</label>
                    <input
                        required
                        type="number"
                        className="input bg-white border-gray-200"
                        name="price"
                        defaultValue={product?.price}
                    />
                    <br />

                    <label className="label">Set the Discount Price (Optional)</label>
                    <input
                        type="number"
                        className="input bg-white border-gray-200"
                        name="discountPrice"
                        defaultValue={product?.discountPrice || ""}
                    />
                    <br />

                    <label className="label">Enter Sizes</label>
                    <input
                        type="text"
                        name="sizes"
                        className="input input-bordered bg-white border-gray-200"
                        defaultValue={product?.sizes?.join(", ")}
                    />

                    <label className="label mt-5">Colors</label>
                    <input
                        type="text"
                        name="colors"
                        className="input input-bordered bg-white border-gray-200"
                        defaultValue={product?.colors?.join(", ")}
                    />
                    <br />

                    <label className="label">Fit</label>
                    <input
                        type="text"
                        className="input bg-white border-gray-200"
                        name="fit"
                        defaultValue={product?.fit}
                    />
                    <br />

                    <label className="label">Product Description</label>
                    <input
                        type="text"
                        className="input bg-white border-gray-200"
                        name="description"
                        defaultValue={product?.description}
                    />
                    <br />

                    <label className="label">Product Images (optional)</label>
                    <input type="file" name="image1" className="file-input" />
                    <input type="file" name="image2" className="file-input" />
                    <input type="file" name="image3" className="file-input" />
                    <br />

                    <input
                        className="btn btn-wide btn-neutral btn-outline"
                        type="submit"
                        value="Update"
                    />

                </fieldset>
            </form>
        </div>
    );
};

export default UpdateProduct;