export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface IUser {
  uid: string;
  email: string | null;
  isEmailVerified: boolean;
  displayName: string | null;
  photoURL: string | null;
  backgroundURL: string | null;
  bio: string | null;
  role: UserRole;
  createdAt: number;
  updatedAt: number;
}
