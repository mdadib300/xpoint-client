import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import logImg from '../../../assets/images/auth/login.svg';
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";


const Login = () => {
    const { logInUser, forgetPassEmail } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        console.log(user);
        logInUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Login Successful",
                    confirmButtonText: "Okay",
                    customClass: {
                        confirmButton: 'bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded'
                    },
                    buttonsStyling: false
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    title: "Wrong Email or Password!",
                    confirmButtonText: "Okay",
                    customClass: {
                        confirmButton: 'bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded'
                    },
                    buttonsStyling: false
                });
            });
    }

    const handleForgotPassword = async () => {
        const { value: email } = await Swal.fire({
            title: "Reset Password",
            input: "email",
            inputLabel: "Enter your registered email",
            inputPlaceholder: "example@gmail.com",
            confirmButtonColor: "#262626",
            showCancelButton: true,
        });

        if (email) {
            forgetPassEmail(email)
                .then(() => {
                    Swal.fire({
                        title: "Email Sent",
                        text: "Check your inbox (Spam folder also) for password reset link.",
                        confirmButtonColor: "#262626"
                    });
                })
                .catch((error) => {
                    Swal.fire("Error", error.message, "error");
                });
        }
    };

    return (
        <div className="hero py-5 lg:py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-semibold uppercase text-center">Login</h1>
                    <div className="py-10 w-full">
                        <img src={logImg} className="w-lg" />
                    </div>
                </div>
                <div className="card w-full max-w-sm shrink-0 shadow-2xl me-0 lg:me-20">
                    <div className="card-body">
                        <SocialLogin></SocialLogin>
                        <p className="text-center">---------- Or ----------</p>
                        <fieldset className="fieldset">
                            <form onSubmit={handleLogin}>
                                <label className="label">Enter Your Email</label>
                                <input required type="email" className="input bg-white border-gray-200" name="email" />
                                <label className="label">Enter Your Password</label>
                                <input required type="password" className="input bg-white border-gray-200" name="password" />
                                <div className="mt-2"><p>Forget Password? <button onClick={handleForgotPassword} className="link link-hover font-semibold">Click here</button></p></div>
                                <div className="mt-2"><p>Don't have an account? <Link to='/register' className="link link-hover font-semibold">Register</Link></p></div>
                                <input type="submit" value="Login" className="btn btn-neutral mt-4" />
                            </form>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;