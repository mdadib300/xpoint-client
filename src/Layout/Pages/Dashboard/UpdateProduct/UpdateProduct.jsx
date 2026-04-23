import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

// Cloudinary config
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

const UpdateProduct = () => {

    const product = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    // store new uploaded images
    const [images, setImages] = useState([null, null, null]);

    // loading per image
    const [imgLoading, setImgLoading] = useState([false, false, false]);

    // -------- IMAGE UPLOAD --------
    const handleImageUpload = async (file, index) => {
        if (!file) return;

        const newLoading = [...imgLoading];
        newLoading[index] = true;
        setImgLoading(newLoading);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset);

        try {
            const res = await fetch(cloudinaryUrl, {
                method: "POST",
                body: formData
            }).then(res => res.json());

            const newImages = [...images];
            newImages[index] = res.secure_url;
            setImages(newImages);

        } catch (error) {
            console.error("Upload failed", error);
        }

        newLoading[index] = false;
        setImgLoading([...newLoading]);
    };

    // -------- UPDATE PRODUCT --------
    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        const form = e.target;

        try {

            // merge old + new images
            const finalImages = [...(product.images || [])];

            images.forEach((img, index) => {
                if (img) finalImages[index] = img;
            });

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
                price,
                discountPrice,
                fit: form.fit.value,
                sizes,
                colors,
                description: form.description.value || "Not Available",
                images: finalImages
            };

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

                    {/* -------- UPDATED IMAGE SECTION -------- */}
                    <label className="label">Product Images (optional)</label>

                    {[0,1,2].map((i) => (
                        <div key={i} className="flex items-center gap-2 mb-2">
                            <input
                                type="file"
                                className="file-input"
                                onChange={(e) => handleImageUpload(e.target.files[0], i)}
                            />
                            {imgLoading[i] && <span className="loading loading-spinner loading-sm"></span>}
                            {images[i] && !imgLoading[i] && <span className="text-green-600 text-sm">✓ Uploaded</span>}
                        </div>
                    ))}

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