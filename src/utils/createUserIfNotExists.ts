import { auth, db } from "@/config/firebase";
import { IUser, UserRole } from "@/interfaces";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { count, doc, getDoc, setDoc } from "firebase/firestore";

export const createUserIfNotExists = async (
  uid: string,
  displayName: string | null,
  email: string | null,
  isEmailVerified: boolean,
) => {
  try {
    const snapshot = await getDoc(doc(db, "users", uid));

    if (!snapshot.exists()) {
      const now = Date.now();

      const user: IUser = {
        uid,
        displayName,
        email,
        isEmailVerified,
        photoURL: null,
        backgroundURL: null,
        bio: null,
        role: UserRole.USER,
        createdAt: now,
        updatedAt: now,
      };

      await setDoc(doc(db, "users", uid), user);
    }
  } catch (error) {
    console.log("Create user error:", error);
    throw error;
  }
};
