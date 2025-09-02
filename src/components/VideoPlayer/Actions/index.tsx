import { useVideo } from "@/contexts/VideoProvider";
import { Button } from "@heroui/react";
import { use } from "framer-motion/client";
import { FastForwardIcon, PauseIcon, PlayIcon, RewindIcon } from "lucide-react";

const Actions = () => {
  const { isPlaying, setIsPlaying } = useVideo();

  const toggleIsPlaying = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-3">
      <Button isIconOnly radius="full" variant="light" className="text-white">
        <RewindIcon />
      </Button>

      <Button
        isIconOnly
        radius="full"
        color="primary"
        onPress={toggleIsPlaying}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </Button>

      <Button isIconOnly radius="full" variant="light" className="text-white">
        <FastForwardIcon />
      </Button>
    </div>
  );
};

export default Actions;
