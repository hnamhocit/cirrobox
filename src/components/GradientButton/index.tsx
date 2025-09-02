import clsx from "clsx";
import { ButtonHTMLAttributes, FC, HTMLProps, memo } from "react";

const GradientButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  const defaultClassName =
    "flex items-center gap-3 justify-center py-2 px-3 w-full mt-7 transition-all duration-300 rounded-lg font-code font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-gradient-x text-white border-2 border-transparent shadow-lg hover:-translate-y-1 hover:shadow-xl";

  return (
    <button {...props} className={clsx(defaultClassName, className)}>
      {children}
    </button>
  );
};

export default memo(GradientButton);
