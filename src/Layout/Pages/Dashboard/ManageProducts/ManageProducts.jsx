import { useState } from "react";
import Swal from "sweetalert2";
import useAllProducts from "../../../../Hooks/useAllProducts";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import update from '../../../../assets/images/icons/system-update.png';
import deleteImg from '../../../../assets/images/icons/remove.png';

const ManageProducts = () => {
    const [products, , refetch] = useAllProducts();
    const axiosSecure = useAxiosSecure();
    const [searchText, setSearchText] = useState("");

    const handleDeleteProduct = (product) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone.",
            showCancelButton: true,
            confirmButtonColor: "#262626",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/products/${product._id}`);

                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted",
                        text: "Your product has been deleted.",
                        confirmButtonColor: "#262626"
                    });
                }
            }
        });
    };

    // SEARCH + REVERSE ORDER
    const filteredProducts = [...products]
        .filter((product) =>
            product.name?.toLowerCase().includes(searchText.toLowerCase()) ||
            product.category?.toLowerCase().includes(searchText.toLowerCase())
        );

    return (
        <div className="min-h-screen">
            <h1 className='text-2xl font-semibold mb-5'>Manage Products</h1>

            {/* SEARCH BAR */}
            <div className="mb-5 flex justify-center">
                <input
                    type="text"
                    placeholder="Search by product name or category..."
                    className="input input-bordered w-full max-w-md bg-white"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            {filteredProducts.map(product => (
                                <tr key={product._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={product.images?.[0]}
                                                        alt={product.name}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product.name}</div>
                                                <div className="text-sm opacity-50">{product.category}</div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* PRICE + DISCOUNT LOGIC (UNCHANGED) */}
                                    <td>
                                        {product.discountPrice ? (
                                            <div>
                                                <span className="line-through text-gray-400">
                                                    Price: {product.price} BDT
                                                </span>
                                                <br />
                                                <span>
                                                    Discount Price: {product.discountPrice} BDT
                                                </span>
                                            </div>
                                        ) : (
                                            <div>
                                                Price: {product.price} BDT
                                            </div>
                                        )}
                                    </td>

                                    {/* UPDATE */}
                                    <td>
                                        <Link to={`/dashboard/updateProduct/${product._id}`}>
                                            <button className="btn btn-ghost btn-circle">
                                                <img src={update} className="w-5" />
                                            </button>
                                        </Link>
                                    </td>

                                    {/* DELETE */}
                                    <td>
                                        <button
                                            onClick={() => handleDeleteProduct(product)}
                                            className="btn btn-ghost btn-circle"
                                        >
                                            <img src={deleteImg} className="w-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {filteredProducts.length === 0 && (
                                <tr>
                                    <td colSpan="4" className="text-center py-5 opacity-60">
                                        No products found.
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;