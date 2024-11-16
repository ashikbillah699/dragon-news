import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";




// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true);
    const [err, setErr] = useState()

    const createNewUser = (email, password) => {
        setLoader(true)
         createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setErr(`${error.code}`);

            })
    }

    const createLoginIn = (email, password) => {
        setLoader(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                console.log(result.user)
                setLoader(false)
            })
            .catch(error => {
                setErr(error.message )
                setLoader(false)
            })
    }

    const createLogOut = () => {
        setLoader(true)
        signOut(auth)
            .then(() => {
                alert("your successfully log-Out.")
            })
            .catch((error) => {
                alert(error.code)
            });
    } 
    
    const userProfileUpdate = (updateData) =>{
        setLoader(true)
        return updateProfile(auth.currentUser, updateData)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])

   

    const authInfo = {
        user,
        createNewUser,
        createLoginIn,
        createLogOut,
        loader,
        setErr,
        err,
        userProfileUpdate
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;