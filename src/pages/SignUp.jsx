import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import auth from "../firebase/firebase.init";


const SignUp = () => {
    const { createNewUser, user, userProfileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user)


    const handleSignUp = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const photoUrl = event.target.photoUrl.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name, photoUrl, email, password)

        await createNewUser(email, password);

        // Check if user is authenticated and wait for the user to be fully loaded
        if (auth.currentUser) {
            await userProfileUpdate({ displayName: name, photoURL: photoUrl });
            navigate('/'); // Navigate after successful profile update
        } else {
            console.error("User is not authenticated yet");
        }

    }
    return (
        <div className="flex items-center justify-center   bg-gray-100 my-10">
            <div className="w-full max-w-2xl px-20 py-16 space-y-4 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center pb-5">Register your account</h2>
                <hr className="py-4" />

                <form onSubmit={handleSignUp} className="space-y-6 p-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Your Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="input rounded-sm w-full bg-gray-100 mt-4"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Photo Url</label>
                        <input
                            name="photoUrl"
                            type="text"
                            placeholder="Enter your photo url"
                            className="input rounded-sm w-full bg-gray-100 mt-4"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Email address</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="input rounded-sm w-full bg-gray-100 mt-4"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="input rounded-sm w-full bg-gray-100 mt-4"
                        />
                    </div>
                    <button type="submit" className="w-full py-2 mt-4 font-semibold text-white bg-gray-800 rounded">
                        Sign Up
                    </button>
                </form>
                <p className="font-semibold text-center mt-4 text-sm">
                    If You Have An Account?{" "}
                    <Link to="/auth/login" className="text-red-500 font-medium">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;