import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";


export const AuthContext = createContext(null)


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();



    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        googleLogin,
        user,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;