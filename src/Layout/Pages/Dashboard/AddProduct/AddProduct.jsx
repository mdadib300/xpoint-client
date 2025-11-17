import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const AddProduct = () => {
    const axiosSecure = useAxiosSecure();

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const sizesTogether = e.target.sizes.value;
        const sizes = sizesTogether.split(',').map(size => size.trim());
        const colorsTogether = e.target.colors.value;
        const colors = colorsTogether.split(',').map(color=>color.trim());
        const priceString = form.price.value;
        const priceInt = parseInt(priceString);
        const productInfo = {
            name: form.name.value,
            category: form.category.value,
            price: priceInt,
            fit: form.fit.value,
            sizes: sizes,
            colors: colors,
            stock: form.stock.value,
            image1: form.image1.value,
            image2: form.image2.value,
            image3: form.image3.value
        };
        axiosSecure.post('/products', productInfo)
            .then(res => {
                console.log(res.data);
                console.log(typeof(priceInt))
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
            })
    }

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
                        <option>Basic T-shirt</option>
                        <option>Drop-shoulder</option>
                        <option>Boxers</option>
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
                    <label className="label">Stock</label>
                    <input type="number" className="input bg-white border-gray-200" name="stock" />
                    <br />
                    <label className="label">Product Image URL 1</label>
                    <input required type="text" className="input bg-white border-gray-200" name="image1" />
                    <br />
                    <label className="label">Product Image URL 2</label>
                    <input type="text" className="input bg-white border-gray-200" name="image2" />
                    <br />
                    <label className="label">Product Image URL 3</label>
                    <input type="text" className="input bg-white border-gray-200" name="image3" />
                    <br />
                    <input className="btn btn-wide btn-outline btn-neutral" type="submit" value="Add" />
                </fieldset>
            </form>
        </div>
    );
};

export default AddProduct;