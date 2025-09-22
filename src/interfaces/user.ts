import {IRecord} from "@/interfaces/record";

export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN",
}

export interface IUser extends IRecord {
    email: string | null;
    isEmailVerified: boolean;
    displayName: string | null;
    photoURL: string | null;
    backgroundURL: string | null;
    bio: string | null;
    role: UserRole;
}
