import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'


const Register = () => {
    const { registerUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState('')


    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name, email, photo, password);

        if (/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
            setError(Swal.fire({
                title: 'Success!',
                text: 'User Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            }));
            registerUser(email, password)
                .then(() => {
                    // navigate(location?.state ? location.state : '/')
                    // updateUserProfile(name, photo)
                })
        }

        else {
            setError(
                // alert('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.')
                // Swal.fire("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.")
                Swal.fire({
                    title: "The Internet?",
                    text: "That thing is still around?",
                    icon: "question"
                })
            );
// setError(alert('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.'));
return;

        }
setError('')
    }

return (
    <div>
        {
            error && <div>{error}</div>
        }
        <div className="mx-auto max-w-md p-4 rounded-md shadow sm:p-8 mt-4 dark:bg-green-50 dark:text-gray-800">
            <h2 data-aos="fade-up" data-aos-delay='300' className="mb-3 text-3xl font-bold text-center bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Please Register Now</h2>
            <p data-aos="fade-up" data-aos-delay='600' className="text-sm text-center dark:text-gray-600">you have account?
                <a href="#" rel="noopener noreferrer" className="focus:underline hover:underline text-blue-600 font-bold"><Link to={'/login'}>Login here</Link></a>
            </p>


            <form onSubmit={handleRegister} noValidate="" action="" className="space-y-8">
                <div className="space-y-4">
                    <div data-aos="fade-up" data-aos-delay='900' className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Name</label>
                        <input type="text" name="name" placeholder="Your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <div data-aos="fade-up" data-aos-delay='1200' className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email address</label>
                        <input type="text" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <div data-aos="fade-up" data-aos-delay='1500' className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Photo URL</label>
                        <input type="text" name="photo" id="" placeholder="photo url" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                    <div data-aos="fade-up" data-aos-delay='1800' className="space-y-2 relative ">
                        <label htmlFor="email" className="block text-sm">Password</label>
                        <input type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            placeholder="*****"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />

                        <span className="cursor-pointer absolute top-8 -ml-7" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>

                    </div>

                </div>
                <button data-aos="fade-up" data-aos-delay='2100' className="btn btn-primary w-full">Register Now</button>
            </form>
        </div>
    </div>
);
};

export default Register;