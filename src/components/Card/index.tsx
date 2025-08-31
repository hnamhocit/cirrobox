import { Button } from "@heroui/react";
import {
  AmbulanceIcon,
  ArrowBigDownDash,
  GithubIcon,
  HardDriveIcon,
  RocketIcon,
} from "lucide-react";

const Card = () => {
  return (
    <div className="shadow-md bg-neutral-950 rounded-xl overflow-hidden">
      <div
        className="bg-contain bg-center bg-no-repeat h-32 my-4"
        style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1200px-Google_Drive_icon_%282020%29.svg.png')`,
        }}
      ></div>

      <div className="p-4 space-y-4">
        <div className="text-2xl font-semibold font-code">GGD CLI</div>

        <div className="line-clamp-2 text-sm text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos debitis
          quibusdam omnis qui culpa cumque quas saepe quasi aliquam a.
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-[2px] rounded-full bg-neutral-700"></div>

          <div
            className="shrink-0 w-4 h-4 bg-blue-500"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          ></div>

          <div className="flex-1 h-[2px] rounded-full bg-neutral-700"></div>
        </div>

        <div className="text-sm grid grid-cols-2 gap-3">
          <div className="flex items-center gap-3 text-blue-500">
            <HardDriveIcon size={18} />

            <div className="font-code">50mb</div>
          </div>

          <div className="flex items-center gap-3 text-rose-500">
            <RocketIcon size={18} />

            <div className="font-code">2023-01-01</div>
          </div>

          <div className="flex items-center gap-3 text-amber-500">
            <AmbulanceIcon size={18} />

            <div className="font-code">2023-01-01</div>
          </div>

          <div className="flex items-center gap-3 text-purple-500">
            <GithubIcon size={18} />
            <div className="font-code">@hnamhocit</div>
          </div>
        </div>

        <Button
          color="primary"
          radius="full"
          className="mt-7"
          variant="bordered"
          startContent={<ArrowBigDownDash />}
          fullWidth
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default Card;
