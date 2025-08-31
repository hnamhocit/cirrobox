export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface IUser {
  id: string;
  email: string;
  isEmailVerified: boolean;
  displayName: string;
  photoURL: string | null;
  backgroundURL: string | null;
  bio: string | null;
  role: UserRole;
  createdAt: number;
  updatedAt: number;
}
