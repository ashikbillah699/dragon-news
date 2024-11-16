
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";


const Login = () => {
    const {createLoginIn,err,setErr} = useContext(AuthContext);
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate();

    const handleLogIn = async event =>{
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
       
        try{
            await createLoginIn(email, password)
            navigate(location?.state || '/');
        }
        catch(error){
            setErr("Invalid email or password",error)
        }

    }
    return (
        <div className="flex items-center justify-center min-h-screen  bg-gray-100">
            <div className="w-full max-w-2xl px-20 py-16 space-y-4 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center pb-5">Login your account</h2>
                <hr className="py-4" />

                <form onSubmit={handleLogIn} className="space-y-6 p-4">
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
                       {err && <p className="text-red-500 mt-2">{err}</p>}
                    </div>


                    <button type="submit" className="w-full py-2 mt-4 font-semibold text-white bg-gray-800 rounded">
                        Login
                    </button>
                </form>
                <p className="font-semibold text-center mt-4 text-sm">
                    Don’t Have An Account?{" "}
                    <Link to="/auth/signup" className="text-red-500 font-medium">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;