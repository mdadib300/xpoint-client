import { useState } from "react";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import imageCompression from "browser-image-compression";

// Cloudinary config
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

const AddProduct = () => {

    const axiosSecure = useAxiosSecure();

    const [loading, setLoading] = useState(false);

    // store uploaded image urls
    const [images, setImages] = useState([null, null, null]);

    // loader per image
    const [imgLoading, setImgLoading] = useState([false, false, false]);

    // -------- HANDLE IMAGE UPLOAD (instant) --------
    const handleImageUpload = async (file, index) => {
        if (!file) return;

        const newLoading = [...imgLoading];
        newLoading[index] = true;
        setImgLoading(newLoading);

        const compressedFile = await imageCompression(file, {
            maxSizeMB: 1.5,
            maxWidthOrHeight: 2200,
            useWebWorker: true,
            initialQuality: 0.9,
            fileType: "image/webp"
        });

        const formData = new FormData();
        formData.append("file", compressedFile);
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

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const form = e.target;

        try {
            setLoading(true);

            Swal.fire({
                title: "Adding Product...",
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading()
            });

            const uploadedImages = images.filter(Boolean);

            if (uploadedImages.length === 0) {
                Swal.fire({
                    title: "Upload at least one image.",
                    text: "Click anywhere to continue."
                });
                return;
            }

            const sizes = form.sizes.value
                ? form.sizes.value.split(',').map(s => s.trim())
                : [];

            const colors = form.colors.value
                ? form.colors.value.split(',').map(c => c.trim())
                : [];

            const productInfo = {
                name: form.name.value,
                category: form.category.value,
                price: parseInt(form.price.value),
                fit: form.fit.value,
                sizes,
                colors,
                description: form.description.value || "Not Available",
                images: uploadedImages
            };

            const res = await axiosSecure.post('/products', productInfo);

            Swal.close();

            if (res.data.insertedId) {
                form.reset();
                setImages([null, null, null]);

                Swal.fire({
                    title: "Product Added Successfully",
                    confirmButtonText: "Okay",
                    customClass: {
                        confirmButton: 'bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded'
                    },
                    buttonsStyling: false
                });
            }

        } catch (error) {
            Swal.close();
            Swal.fire("Error adding product");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-5'>Add Product</h1>

            <form onSubmit={handleAddProduct}>
                <fieldset className="fieldset pb-10">

                    <label className="label">Give a unique Product Title</label>
                    <input required type="text" className="input bg-white border-gray-200" name="name" />
                    <br />

                    <select defaultValue="" className="select bg-white border-gray-200" name="category">
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
                    <input required type="number" className="input bg-white border-gray-200" name="price" />
                    <br />

                    <label className="label">Enter Sizes</label>
                    <input type="text" name="sizes" className="input bg-white border-gray-200" />

                    <label className="label mt-5">Enter Colors</label>
                    <input type="text" name="colors" className="input bg-white border-gray-200" />
                    <br />

                    <label className="label">Add the Fit type</label>
                    <input type="text" className="input bg-white border-gray-200" name="fit" />
                    <br />

                    <label className="label">Product Description</label>
                    <input type="text" className="input bg-white border-gray-200" name="description" />
                    <br />

                    <label className="label">Product Images</label>

                    {[0, 1, 2].map((i) => (
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
                        className="btn btn-wide btn-outline btn-neutral"
                        type="submit"
                        value={loading ? "Adding..." : "Add"}
                        disabled={loading}
                    />

                </fieldset>
            </form>
        </div>
    );
};

export default AddProduct;