import { useState } from "react";
import useUserProfile from "../../../../Hooks/useUserProfile";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Profile = () => {

    const [profile, loading, setProfile] = useUserProfile();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const [editMode, setEditMode] = useState(false);

    if (loading) {
        return <p className="text-center mt-20">Loading profile...</p>;
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;

        try {
            let photoURL = profile.photoURL;

            // IMAGE UPLOAD
            if (form.photo.files[0]) {
                const formData = new FormData();
                formData.append("image", form.photo.files[0]);

                const res = await axiosPublic.post(image_hosting_api, formData, {
                    headers: { "content-type": "multipart/form-data" }
                });

                photoURL = res.data.data.display_url;
            }

            const updatedData = {
                name: form.name.value,
                phone: form.phone.value,
                address: form.address.value,
                photoURL
            };

            const res = await axiosSecure.patch('/users/profile', updatedData);

            if (res.data.modifiedCount > 0) {
                setProfile(prev => ({ ...prev, ...updatedData }));
                setEditMode(false);

                Swal.fire({
                    title: "Profile Updated",
                    confirmButtonColor: "#262626"
                });
            }

        } catch (error) {
            console.error(error);
            Swal.fire("Error updating profile");
        }
    };

    return (
        <div className="min-h-screen">
            <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">

                <h2 className="text-2xl font-semibold mb-4">My Profile</h2>

                {!editMode ? (
                    <>
                        <img
                            src={profile?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                            alt="profile"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />

                        <p><b>Name:</b> {profile?.name}</p>
                        <p><b>Email:</b> {profile?.email}</p>
                        <p><b>Phone:</b> {profile?.phone || "Not added"}</p>
                        <p><b>Address:</b> {profile?.address || "Not added"}</p>

                        <button
                            onClick={() => setEditMode(true)}
                            className="btn btn-neutral w-full mt-4"
                        >
                            Edit Profile
                        </button>
                    </>
                ) : (
                    <form onSubmit={handleUpdate} className="space-y-4">

                        <input
                            type="text"
                            name="name"
                            defaultValue={profile?.name}
                            className="input w-full bg-white border"
                            placeholder="Name"
                        />

                        <input
                            type="text"
                            name="phone"
                            defaultValue={profile?.phone}
                            className="input w-full bg-white border"
                            placeholder="Phone"
                        />

                        <input
                            type="text"
                            name="address"
                            defaultValue={profile?.address}
                            className="input w-full bg-white border"
                            placeholder="Address"
                        />

                        <label className="label">Upload Profile Image</label>
                        <input type="file" name="photo" className="file-input" />

                        <div>
                            <button className="btn btn-neutral w-full mb-2">Save</button>
                            <button
                                type="button"
                                onClick={() => setEditMode(false)}
                                className="btn btn-outline w-full"
                            >
                                Cancel
                            </button>
                        </div>

                    </form>
                )}
            </div>
        </div>
    );
};

export default Profile;