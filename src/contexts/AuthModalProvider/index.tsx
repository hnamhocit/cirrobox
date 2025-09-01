import { auth } from "@/config/firebase";
import { createUserIfNotExists } from "@/utils";
import {
  Button,
  ButtonGroup,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { signInAnonymously } from "firebase/auth/web-extension";
import { User } from "lucide-react";
import { createContext, ReactNode, useContext, useState } from "react";

interface AuthModalContextType {
  isOpen: boolean;
  onOpen: () => void;
}

export const AuthModalContext = createContext<AuthModalContextType>({
  isOpen: false,
  onOpen: () => {},
});

const AuthModalProvider = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [disabled, setDisabled] = useState(false);

  const handleGuestSignIn = async () => {
    try {
      setDisabled(true);

      const { user } = await signInAnonymously(auth);

      await createUserIfNotExists(
        user.uid,
        user.displayName,
        user.email,
        user.emailVerified,
      );
    } catch (error) {
      console.log("Guest sign in error:", error);
    } finally {
      setDisabled(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setDisabled(true);

      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      await createUserIfNotExists(
        user.uid,
        user.displayName,
        user.email,
        user.emailVerified,
      );
    } catch (error) {
      console.log("Google sign in error:", error);
    } finally {
      setDisabled(false);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      setDisabled(true);

      const provider = new FacebookAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      await createUserIfNotExists(
        user.uid,
        user.displayName,
        user.email,
        user.emailVerified,
      );
    } catch (error) {
      console.log("Facebook sign in error:", error);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <AuthModalContext.Provider value={{ isOpen, onOpen }}>
      {children}

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>Authentication</ModalHeader>
          <ModalBody className="pb-">
            <Button
              fullWidth
              variant="faded"
              radius="full"
              isLoading={disabled}
              onPress={handleGuestSignIn}
              startContent={<User size={20} />}
            >
              Sign in with guest
            </Button>

            <Button
              variant="faded"
              fullWidth
              radius="full"
              isLoading={disabled}
              onPress={handleGoogleSignIn}
              startContent={
                <Image src="/google.webp" alt="Google" width={20} height={20} />
              }
            >
              Sign in with Google
            </Button>

            <Button
              variant="faded"
              fullWidth
              radius="full"
              isLoading={disabled}
              onPress={handleFacebookSignIn}
              startContent={
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              }
            >
              Sign in with Facebook
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => {
  const ctx = useContext(AuthModalContext);
  if (!ctx) {
    throw new Error("useAuthModal must be used within AuthModalProvider");
  }
  return ctx;
};

export default AuthModalProvider;
