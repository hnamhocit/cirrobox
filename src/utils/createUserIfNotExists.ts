import {db} from "@/config/firebase";
import {IUser, UserRole} from "@/interfaces";
import {doc, getDoc, setDoc} from "firebase/firestore";

export const createUserIfNotExists = async (
    id: string,
    displayName: string | null,
    email: string | null,
    isEmailVerified: boolean,
) => {
    try {
        const snapshot = await getDoc(doc(db, "users", id));

        if (!snapshot.exists()) {
            const now = Date.now();

            const user: IUser = {
                id,
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

            await setDoc(doc(db, "users", id), user);
        }
    } catch (error) {
        console.log("Create user error:", error);
        throw error;
    }
};
