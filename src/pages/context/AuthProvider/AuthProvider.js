import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../../firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoding(false)
        });

        return () => {
            unsubscribe()
        }
    }, [])
    

    const provderLogin = (provider) => {
        setLoding(true)
    return signInWithPopup(auth, provider)
    }

    const createUserWithEmail = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoding(true)
        return signOut(auth)
    };

    const updateUserPrifile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const authInfo = {
        user,
        loding,
        provderLogin,
        logOut,
        updateUserPrifile,
        createUserWithEmail,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;