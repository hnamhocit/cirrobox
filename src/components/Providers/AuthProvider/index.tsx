"use client";

import {ReactNode, useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";

import {useUserStore} from "@/stores";
import {auth} from "@/config/firebase";
import Loader from "@/components/Loader";

const AuthProvider = ({children}: { children: ReactNode }) => {
    const {isLoading, getProfile} = useUserStore();

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (user) => {
            if (user) {
                getProfile(user.uid).then(r => r);
            }
        });

        return () => unsubscriber();
    }, []);

    if (isLoading) {
        return <Loader/>;
    }

    return children;
};

export default AuthProvider;
