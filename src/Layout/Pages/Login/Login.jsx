import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import logImg from '../../../assets/images/auth/login.svg';
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";
import hide from '../../../assets/images/icons/hide.png';
import view from '../../../assets/images/icons/view.png';


const Login = () => {
    const { logInUser, forgetPassEmail } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [showPassword, setShowPassword] = useState(false);

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
        <div className="hero py-5 md:py-10 px-0 md:px-7">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-semibold uppercase text-center">Login</h1>
                    <div className="py-10 mx-auto w-1/2 md:w-full">
                        <img src={logImg} className="w-lg" />
                    </div>
                </div>
                <div className="card w-full max-w-sm shrink-0 shadow-2xl ms-0 lg:ms-20">
                    <div className="card-body">
                        <SocialLogin></SocialLogin>
                        <div className="divider">Otherwise</div>
                        <fieldset className="fieldset">
                            <form onSubmit={handleLogin}>
                                <label className="label">Enter Your Email</label>
                                <input required type="email" className="input bg-white border-gray-200" placeholder="example@email.com" name="email" />
                                <label className="label mt-3">Enter Your Password</label>
                                <input required type={showPassword ? "text" : "password"} className="input border-gray-200 bg-white" placeholder="$Tr0nG_Pa$$W0rD" name="password" />
                                <button
                                    type="button"
                                    className="absolute right-13 top-[60%] -translate-y-1/2"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <img src={hide} className="w-4" /> : <img src={view} className="w-4" />}
                                </button>
                                <div className="mt-1"><p>Forget Password? <button onClick={handleForgotPassword} className="link link-hover font-semibold">Click here</button></p></div>
                                <div className="mt-5"><p>Don't have an account? <Link to='/register' className="link link-hover font-semibold">Register</Link></p></div>
                                <input type="submit" value="Login" className="btn mt-2 w-full bg-white text-black border-[#e5e5e5]" />
                            </form>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;