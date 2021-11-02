import { useEffect, useState } from "react"
import initializeAuthentication from "../FireBase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


initializeAuthentication();
const useFireBase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            }) .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
            setIsLoading(false);
        })
    }, [logOut]);


    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        isLoading,
        setIsLoading,
        setUser,
    }
}


export default useFireBase;