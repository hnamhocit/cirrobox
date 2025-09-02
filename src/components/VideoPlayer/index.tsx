import { Button, Spinner } from "@heroui/react";
import {
  FastForwardIcon,
  Pause,
  PauseIcon,
  PlayIcon,
  RewindIcon,
} from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import { formatTime } from "@/utils";
import { useVideo, VideoProvider } from "@/contexts/VideoProvider";
import Overlay from "./Overlay";
import Actions from "./Actions";
import Controllers from "./Controllers";

interface VideoClassNames {
  container?: string;
  video?: string;
}

interface VideoPlayerProps {
  src: string;
  classNames?: VideoClassNames;
}

const VideoPlayer = ({ src, classNames }: VideoPlayerProps) => {
  const {
    videoRef,
    isPlaying,
    setIsHover,
    isLoading,
    setIsLoading,
    setCurrentTime,
  } = useVideo();

  useEffect(() => {
    if (!videoRef.current) return;
    const el = videoRef.current;

    isPlaying ? el.play() : el.pause();
  }, [isPlaying]);

  return (
    <div
      className="relative rounded-xl bg-neutral-950 w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Overlay>
        <Actions />

        <Controllers />
      </Overlay>

      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[9999]">
          <Spinner size="lg" />
        </div>
      )}

      <video
        className={clsx(classNames?.video, "block w-full h-full")}
        ref={videoRef}
        onLoad={() => setIsLoading(true)}
        onLoadedMetadata={() => setIsLoading(false)}
        onTimeUpdate={(e) => {
          setCurrentTime(e.currentTarget.currentTime);
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default memo(VideoPlayer);
