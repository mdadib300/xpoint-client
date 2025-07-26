import Swal from "sweetalert2";
import useAllProducts from "../../../../Hooks/useAllProducts";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import update from '../../../../assets/images/icons/system-update.png';
import deleteImg from '../../../../assets/images/icons/remove.png';


const ManageProducts = () => {
    const [products, , refetch] = useAllProducts();
    const axiosSecure = useAxiosSecure();
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
                console.log(res.data);
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
    }
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-5'>Manage Products</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            {
                                products.slice().reverse().map(product =>
                                    <tr key={product._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={product.image1}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{product.name}</div>
                                                    <div className="text-sm opacity-50">{product.category}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Price: {product.price} BDT
                                            <br />
                                            <span>Stock: {product.stock}</span>
                                        </td>
                                        <td>
                                            <Link to={`/dashboard/updateProduct/${product._id}`}>
                                                <button className="btn btn-ghost btn-circle"><img src={update} className="w-5" /></button>
                                            </Link>
                                        </td>
                                        <th>
                                            <button onClick={() => handleDeleteProduct(product)} className="btn btn-ghost btn-circle"><img src={deleteImg} className="w-5" /></button>
                                        </th>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;