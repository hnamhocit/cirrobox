import { useVideo } from "@/contexts/VideoProvider";
import { formatTime } from "@/utils";
import { Button } from "@heroui/react";
import {
  CaptionsIcon,
  ExpandIcon,
  PauseIcon,
  PlayIcon,
  SettingsIcon,
  ShrinkIcon,
  Volume2,
  Volume2Icon,
} from "lucide-react";
import { IconButton } from "./IconButton";

const Controllers = () => {
  const {
    isPlaying,
    setIsPlaying,
    videoRef,
    currentTime,
    isFullscreen,
    setIsFullscreen,
  } = useVideo();

  const toggleIsPlaying = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleIsFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="absolute bottom-0 left-0 h-12 w-full">
      <div className="px-4 w-full h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconButton onPress={toggleIsPlaying}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </IconButton>

          <IconButton>
            <Volume2Icon />
          </IconButton>

          <div className="text-sm font-code">
            {formatTime(currentTime)} / {formatTime(videoRef.current?.duration)}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <IconButton>
            <CaptionsIcon />
          </IconButton>

          <IconButton>
            <SettingsIcon />
          </IconButton>

          <IconButton onPress={toggleIsFullscreen}>
            {isFullscreen ? <ShrinkIcon /> : <ExpandIcon />}
          </IconButton>
        </div>
      </div>

      <div className="absolute top-0 left-0 h-[2px] hover:h-1 transition-all bg-neutral-700 w-full">
        <div
          className="absolute top-0 left-0 h-full w-3/5 bg-blue-500"
          style={{
            width: `${((currentTime / videoRef.current?.duration) as number) * 100}%`,
          }}
        >
          <div className="absolute w-3 h-3 right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Controllers;
