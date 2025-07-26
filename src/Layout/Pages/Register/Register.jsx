import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import regImg from '../../../assets/images/auth/register.svg';
import hide from '../../../assets/images/icons/hide.png';
import view from '../../../assets/images/icons/view.png';
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState } from "react";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";



const Register = () => {
    const { createUser, updateUser, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const passwordFormat = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!passwordFormat.test(password)) {
            Swal.fire({
                title: "Sorry :(",
                text: "Password must be at least 8 characters long and include both letters and numbers",
                confirmButtonText: "Okay",
                customClass: {
                    confirmButton: 'bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded'
                },
                buttonsStyling: false
            });
            return;
        }
        const newUser = { name, email, password };
        console.log(newUser);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUser(name)
                    .then(() => {
                        // Send user info to DB
                        const user = {
                            name: name,
                            email: email
                        };
                        axiosPublic.post('/users', user)
                            .then(res => {
                                if (res.data.insertedId) {
                                    form.reset();
                                    Swal.fire({
                                        title: "Registration Successful.",
                                        confirmButtonText: "Okay",
                                        customClass: {
                                            confirmButton: 'bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded'
                                        },
                                        buttonsStyling: false
                                    });
                                }
                            })
                            .catch(err => console.log(err));
                    })
                    .catch(error => console.log(error))
                logOutUser()
                    .then(() => {
                        navigate("/login");
                    })
                    .catch(error => {
                        console.log(error);
                    })

            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    title: "Invalid Information",
                    confirmButtonText: "Okay",
                    customClass: {
                        confirmButton: 'bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded'
                    },
                    buttonsStyling: false
                });
            });
    }

    return (
        <div className="hero bg-base-200 py-5 lg:py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-semibold uppercase text-center">Register</h1>
                    <div className="py-10 w-full">
                        <img src={regImg} className="w-lg" />
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl me-0 lg:me-20">
                    <div className="card-body">
                        <SocialLogin></SocialLogin>
                        <p className="text-center">---------- Or ----------</p>
                        <fieldset className="fieldset">
                            <form onSubmit={handleRegister}>
                                <label className="label">Enter Your Full Name</label>
                                <input required type="text" className="input" name="name" />
                                <label className="label">Enter Your Email</label>
                                <input required type="email" className="input" name="email" />
                                <label className="label">Create a Password</label>
                                <input required type={showPassword ? "text" : "password"} className="input" name="password" />
                                <button
                                    type="button"
                                    className="absolute right-13 top-[58%] -translate-y-1/2"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <img src={hide} className="w-4" /> : <img src={view} className="w-4" />}
                                </button>
                                <div className="mt-2"><p>Already have an account? <Link to='/login' className="link link-hover font-semibold">Login</Link></p></div>
                                <input type="submit" value="Register" className="btn btn-neutral mt-4" />
                            </form>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;