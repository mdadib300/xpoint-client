import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';

// Image hosting
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const form = e.target;

        try {
            // Images
            const imageFiles = [
                form.image1.files[0],
                form.image2.files[0],
                form.image3.files[0]
            ].filter(Boolean);

            if (imageFiles.length === 0) {
                Swal.fire({
                    title: "Image Required",
                    text: "Please upload at least one product image.",
                    icon: "warning",
                    confirmButtonText: "Okay",
                    customClass: {
                        confirmButton: "bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded"
                    },
                    buttonsStyling: false
                });
                return;
            }

            // Upload images
            const uploadPromises = imageFiles.map(file => {
                const formData = new FormData();
                formData.append("image", file);

                return axiosPublic.post(image_hosting_api, formData, {
                    headers: { "content-type": "multipart/form-data" },
                });
            });

            const responses = await Promise.all(uploadPromises);
            const uploadedImages = responses.map(res => res.data.data.display_url);

            // Other Fields
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

            // Save to DB
            const res = await axiosSecure.post('/products', productInfo);

            if (res.data.insertedId) {
                form.reset();
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
            console.error("Add Product Error:", error);
            Swal.fire({
                title: "Error",
                text: "Something went wrong while adding product.",
                icon: "error"
            });
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
                    <input
                        type="text"
                        name="sizes"
                        placeholder="M, L, XL or 28, 30, 32"
                        className="input input-bordered bg-white border-gray-200"
                    />

                    <label className="label mt-5">Enter Colors</label>
                    <input
                        type="text"
                        name="colors"
                        placeholder="Black, Blue, Purple"
                        className="input input-bordered bg-white border-gray-200"
                    />
                    <br />

                    <label className="label">Add the Fit type</label>
                    <input type="text" className="input bg-white border-gray-200" name="fit" />
                    <br />

                    <label className="label">Product Description</label>
                    <input type="text" className="input bg-white border-gray-200" name="description" />
                    <br />

                    <label className="label">Product Images</label>
                    <input type="file" name="image1" required className="file-input" />
                    <input type="file" name="image2" className="file-input" />
                    <input type="file" name="image3" className="file-input" />
                    <br />

                    <input className="btn btn-wide btn-outline btn-neutral" type="submit" value="Add" />

                </fieldset>
            </form>
        </div>
    );
};

export default AddProduct;