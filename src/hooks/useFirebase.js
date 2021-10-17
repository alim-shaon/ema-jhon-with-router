import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    // const [error, setError] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider);

    };

    const logOUt = () => {
        signOut(auth).then(() => {
            setUser({})
            // Sign-out successful.
        });
    }


    // observer whether user auth state change or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                // User is signed out
                // ...
            }
        });
    }, []);


    return {
        user,
        signInUsingGoogle,
        logOUt
    }

}
export default useFirebase;