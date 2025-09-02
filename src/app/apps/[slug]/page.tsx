"use client";

import GradientButton from "@/components/GradientButton";
import ProgressLink from "@/components/ProgressLink";
import VideoPlayer from "@/components/VideoPlayer";
import { VideoProvider } from "@/contexts/VideoProvider";
import { Avatar, Button } from "@heroui/react";
import {
  CloudDownload,
  CloudDownloadIcon,
  MessageCircleIcon,
  Send,
  StarIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const AppDetails = () => {
  const slug = usePathname();

  return (
    <div className="space-y-12 py-12">
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-7">
          <div
            className="shrink-0 w-24 h-24 bg-center bg-cover bg-no-repeat rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.logojoy.com/wp-content/uploads/20220329171710/telegram-app-logo.png")',
            }}
          ></div>

          <div className="space-y-2">
            <div className="text-4xl text-blue-500 font-bold font-code">
              Telegram
            </div>

            <div className="text-lg">
              Telegram is a messaging app with a focus on speed and security.
              It's superfast, simple and free. It is like SMS, but more
              powerful.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="flex items-center gap-3">
            <div>4.8</div>
            <StarIcon size={20} />
          </div>

          <div className="h-6 w-[2px] bg-neutral-700"></div>

          <div className="flex items-center gap-3">
            <CloudDownloadIcon size={20} />
            <div>3.75k</div>
          </div>

          <div className="h-6 w-[2px] bg-neutral-700"></div>

          <div className="flex items-center gap-3">
            <MessageCircleIcon size={20} />
            <div>3.75k</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-4 h-80">
        <div className="col-span-3 row-span-2 rounded-xl overflow-hidden">
          <VideoProvider>
            <VideoPlayer src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" />
          </VideoProvider>
        </div>

        <div
          className="bg-neutral-950 rounded-xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://e0.pxfuel.com/wallpapers/473/196/desktop-wallpaper-beautiful-sky-digital-art.jpg")',
          }}
        ></div>

        <div
          className="bg-neutral-950 rounded-xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?semt=ais_hybrid&w=740&q=80')",
          }}
        ></div>
      </div>

      <div className="flex items-center gap-3">
        <GradientButton>
          <CloudDownload size={20} />
          Download
        </GradientButton>
      </div>

      <div className="space-y-4">
        <div className="text-2xl font-semibold font-code text-center">
          Additional info
        </div>

        <div>
          <span className="font-semibold font-code">Description: </span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          cupiditate necessitatibus optio vel. Repudiandae pariatur blanditiis
          optio, explicabo labore iste.
        </div>

        <div className="flex items-center gap-3">
          <div className="font-semibold font-code">Author</div>

          <ProgressLink
            href={`/@hnamhocit`}
            className="py-1 px-3 text-blue-500 bg-blue-500/10 rounded-xl"
          >
            @hnamhocit
          </ProgressLink>
        </div>

        <div className="flex items-center gap-3">
          <div className="font-semibold font-code">Repository</div>
          <div className="py-1 px-3 text-pink-500 rounded-xl bg-pink-500/10">
            https://github.com/hnamhocit/drive-cli
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="font-semibold font-code">Languages</div>
          <div className="py-1 px-3 text-rose-500 rounded-xl bg-rose-500/10">
            Rust, Bash, Makefile
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="font-semibold font-code">Release date</div>
          <div>{new Date().toLocaleDateString()}</div>
        </div>

        <div className="flex items-center gap-3">
          <div className="font-semibold font-code">Recently updated</div>
          <div>{new Date().toLocaleDateString()}</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-2xl font-semibold font-code text-center">
          Comments (5.8k)
        </div>

        <div className="flex gap-3">
          <div className="shrink-0">
            <Avatar src="" alt="" />
          </div>

          <div className="flex-1 space-y-2">
            <div>Hoang Nam</div>

            <div className="flex flex-col gap-3 bg-neutral-950 min-h-40 py-2 px-3 rounded-xl">
              <textarea
                className="flex-1 block outline-none resize-none"
                placeholder="Enter here..."
              ></textarea>

              <div className="flex items-center justify-end">
                <Button color="primary" radius="full" startContent={<Send />}>
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
