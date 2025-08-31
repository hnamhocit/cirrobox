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
import { User } from "lucide-react";
import { createContext, ReactNode, useState } from "react";

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
              startContent={<User size={20} />}
            >
              Sign in with guest
            </Button>

            <Button
              variant="faded"
              fullWidth
              radius="full"
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

export default AuthModalProvider;
