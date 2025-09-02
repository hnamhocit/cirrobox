import { useVideo } from "@/contexts/VideoProvider";
import { AnimatePresence, motion } from "motion/react";
import { FC, ReactNode, memo } from "react";

interface OverlayProps {
  children: ReactNode;
}

const Overlay: FC<OverlayProps> = ({ children }) => {
  const { isHover, isPlaying } = useVideo();

  return (
    <AnimatePresence>
      {(!isPlaying || isHover) && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 24,
          }}
          className="absolute bg-neutral-950/50 inset-0 flex items-center justify-center"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(Overlay);
