import { ReactNode, useEffect } from "react";
import Lottie from "lottie-react";

import { useUserStore } from "@/stores";
import loading from "@/assets/animations/ripple-loading.json";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { isLoading, getProfile } = useUserStore();

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        getProfile(user.uid);
      }
    });

    return () => {
      unsubscriber();
    };
  }, []);

  if (isLoading) {
    return (
      <Lottie
        animationData={loading}
        loop={true}
        style={{ width: 200, height: 200 }}
      />
    );
  }

  return children;
};

export default AuthProvider;
