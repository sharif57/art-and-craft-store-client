// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth/cordova";
// import { createContext, useState } from "react";
// import { auth } from "../firebase/firebase.init";


// export const AuthContext = createContext(null)


// // eslint-disable-next-line react/prop-types
// const AuthProvider = ({ children }) => {

//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)

//     const googleProvider = new GoogleAuthProvider();

//     const registerUser = (email, password) => {
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password)
//         // .then(result => console.log(result.user))
//     }

//     const loginUser = (email, password) => {
//         setLoading(true)
//         return signInWithEmailAndPassword(auth, email, password)
//         //    .then(result => console.log(result.user))
//     }

//     const logOut = () => {
//         setLoading(true)
//         return signOut(auth)
//     }


//     const googleLogin = () => {
//         setLoading(true)
//         return signInWithPopup(auth, googleProvider)
//     }

//     const authInfo = {
//         googleLogin,
//         user,
//         registerUser,
//         loginUser,
//         logOut


//     }
//     return (
//         <div>
//             <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//         </div>
//     );
// };

// export default AuthProvider;

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init"

export const AuthContext = createContext(null)


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user))
    }

    //  update user with register

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }


    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        //    .then(result => console.log(result.user))
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current value of the current user, ', currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        registerUser,
        updateUserProfile,
        loginUser,
        googleLogin,
        githubLogin,
        user,
        logOut,
        loading

    }

    return (
        <div>

            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;