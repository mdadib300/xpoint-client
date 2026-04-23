import { useState } from "react";
import useUserProfile from "../../../../Hooks/useUserProfile";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

// Cloudinary config
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

const Profile = () => {

    const [profile, loading, setProfile] = useUserProfile();
    const axiosSecure = useAxiosSecure();
    const [editMode, setEditMode] = useState(false);

    if (loading) {
        return <div>
            <p className="text-center mb-3 mt-20"><span className="loading loading-spinner loading-md"></span></p>
            <p className="text-center">Loading profile...</p>
        </div>;
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;

        try {
            Swal.fire({
                title: "Updating...",
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading()
            });

            let photoURL = profile.photoURL;

            // -------- IMAGE UPLOAD --------
            if (form.photo.files[0]) {
                const formData = new FormData();
                formData.append("file", form.photo.files[0]);
                formData.append("upload_preset", uploadPreset);

                const res = await fetch(cloudinaryUrl, {
                    method: "POST",
                    body: formData
                });

                const data = await res.json();
                photoURL = data.secure_url;
            }

            const updatedData = {
                name: form.name.value,
                phone: form.phone.value,
                address: form.address.value,
                photoURL
            };

            const res = await axiosSecure.patch('/users/profile', updatedData);

            Swal.close();

            if (res.data.modifiedCount > 0) {
                setProfile(prev => ({ ...prev, ...updatedData }));
                setEditMode(false);

                Swal.fire("Updated", "Profile updated successfully", "success");
            }

        } catch (error) {
            console.error(error);
            Swal.close();
            Swal.fire("Error", "Update failed", "error");
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
                            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
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
                            name="name"
                            defaultValue={profile?.name}
                            className="input w-full bg-white border"
                            placeholder="Name"
                        />

                        <input
                            name="phone"
                            defaultValue={profile?.phone}
                            className="input w-full bg-white border"
                            placeholder="Phone"
                        />

                        <input
                            name="address"
                            defaultValue={profile?.address}
                            className="input w-full bg-white border"
                            placeholder="Address"
                        />

                        <input type="file" name="photo" className="file-input w-full" />

                        <button className="btn btn-neutral w-full">Save</button>

                        <button
                            type="button"
                            onClick={() => setEditMode(false)}
                            className="btn btn-outline w-full"
                        >
                            Cancel
                        </button>

                    </form>
                )}
            </div>
        </div>
    );
};

export default Profile;