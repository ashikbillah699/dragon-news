/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

    

const PrivetRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation()
    // console.log(location);

    if(loader){
        return <div className="text-center"><span className="loading loading-bars loading-lg mx-auto"></span></div>
    }

    if(user && user?.email){
        return children
    }
    return (
        <div>
            <Navigate state={location.pathname} to='/auth/login'></Navigate>
        </div>
    );
};

export default PrivetRoute;