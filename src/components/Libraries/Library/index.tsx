import {
  AmbulanceIcon,
  CloudDownload,
  DownloadCloudIcon,
  GithubIcon,
  HardDriveIcon,
  RocketIcon,
  StarIcon,
} from "lucide-react";

const Library = () => {
  return (
    <div
      className="bg-neutral-950 rounded-xl overflow-hidden
                    shadow-[0_10px_25px_rgba(0,0,0,0.5)]
                    hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]
                    transition-shadow duration-300"
    >
      <div className="p-6 space-y-5">
        <div className="text-2xl font-bold text-blue-500 font-code text-center">
          GGD CLI
        </div>

        <div className="line-clamp-2 text-sm text-gray-200">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos debitis
          quibusdam omnis qui culpa cumque quas saepe quasi aliquam a.
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-[2px] rounded-full bg-neutral-700"></div>

          <div
            className="shrink-0 w-4 h-4 bg-blue-500
                       shadow-[0_0_8px_rgba(59,130,246,0.6)]
                       transition-shadow duration-300"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          ></div>

          <div className="flex-1 h-[2px] rounded-full bg-neutral-700"></div>
        </div>

        <div className="text-sm grid grid-cols-2 gap-3">
          <button
            className="flex items-center gap-3 transition-all duration-300
                             hover:text-blue-500 hover:translate-y-[-2px] hover:shadow-[0_6px_15px_rgba(59,130,246,0.4)]
                             rounded-md px-2 py-1 font-code bg-neutral-900 shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
          >
            <HardDriveIcon size={18} />
            <div className="font-code">50mb</div>
          </button>

          <button
            className="flex items-center gap-3 transition-all duration-300
                             hover:text-rose-500 hover:translate-y-[-2px] hover:shadow-[0_6px_15px_rgba(255,0,100,0.4)]
                             rounded-md px-2 py-1 font-code bg-neutral-900 shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
          >
            <RocketIcon size={18} />
            <div className="font-code">2023-01-01</div>
          </button>

          <button
            className="flex items-center gap-3 transition-all duration-300
                             hover:text-amber-500 hover:translate-y-[-2px] hover:shadow-[0_6px_15px_rgba(255,200,0,0.4)]
                             rounded-md px-2 py-1 font-code bg-neutral-900 shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
          >
            <AmbulanceIcon size={18} />
            <div className="font-code">2023-01-01</div>
          </button>

          <button
            className="flex items-center gap-3 transition-all duration-300
                             hover:text-purple-500 hover:translate-y-[-2px] hover:shadow-[0_6px_15px_rgba(150,50,255,0.4)]
                             rounded-md px-2 py-1 font-code bg-neutral-900 shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
          >
            <GithubIcon size={18} />
            <div className="font-code">@hnamhocit</div>
          </button>

          <button
            className="flex items-center gap-3 transition-all duration-300
                             hover:translate-y-[-2px] hover:shadow-[0_6px_15px_rgba(255,255,0,0.4)]
                             rounded-md px-2 py-1 font-code bg-neutral-900 shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
          >
            <StarIcon size={18} />
            <div className="font-code">5.2k</div>
          </button>

          <button
            className="flex items-center gap-3 transition-all duration-300
                             hover:translate-y-[-2px] hover:shadow-[0_6px_15px_rgba(0,255,255,0.4)]
                             rounded-md px-2 py-1 font-code bg-neutral-900 shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
          >
            <DownloadCloudIcon size={18} />
            <div className="font-code">5.2k</div>
          </button>
        </div>

        <button
          className="
            flex items-center gap-3 justify-center py-2 px-3
            w-full mt-7 transition-all duration-300
            rounded-lg font-code font-medium
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            bg-[length:200%_200%] animate-gradient-x
            text-white border-2 border-transparent
            shadow-lg hover:-translate-y-1 hover:shadow-xl
          "
        >
          <CloudDownload size={20} />
          Download
        </button>
      </div>
    </div>
  );
};

export default Library;
