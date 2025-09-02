import { Button, ButtonProps } from "@heroui/react";
import { FC } from "react";

export const IconButton: FC<ButtonProps> = ({ children, className }) => {
  return (
    <Button
      isIconOnly
      radius="full"
      size="sm"
      variant="light"
      className="text-white"
    >
      {children}
    </Button>
  );
};
