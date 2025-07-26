import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import deleteImg from '../../../../assets/images/icons/remove.png';


const Users = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    const handleRemove = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone.",
            showCancelButton: true,
            confirmButtonColor: "#262626",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted",
                                text: "User has been deleted.",
                                confirmButtonColor: "#262626"
                            });
                        }
                    })
            }
        });
    }

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You are making ${user.name} the admin of XPoint Website`,
            showCancelButton: true,
            confirmButtonColor: "#262626",
            cancelButtonColor: "#d33",
            confirmButtonText: "Make Admin"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Done",
                                text: `${user.name} is now the admin of XPoint Website`,
                                confirmButtonColor: "#262626"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-2'>Users</h1>
            <h1 className="mb-5">Total Users: {users.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            {
                                users.slice().reverse().map(user =>
                                    <tr key={user._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div>
                                                    <div className="font-bold">{user.name}</div>
                                                    <div className="text-sm opacity-50">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {
                                                user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs">Make Admin</button>
                                            }

                                        </td>
                                        <th>
                                            <button onClick={() => handleRemove(user)} className="btn btn-ghost btn-circle"><img src={deleteImg} className="w-5" /></button>
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

export default Users;