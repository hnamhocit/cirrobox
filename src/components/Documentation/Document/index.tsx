import React, {FC, useState} from 'react';
import {IDocument} from "@/interfaces";
import {ClockIcon, CloudDownloadIcon, EyeIcon, HardDriveIcon, PresentationIcon, UserIcon} from "lucide-react";
import clsx from "clsx";

const Document: FC<IDocument> = () => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className="flex flex-col gap-3 items-center justify-center bg-white/50 dark:bg-neutral-900/50 backdrop-blue-2xl py-4 rounded-xl hover:-translate-y-2 transition-all">

            <div className="bg-cover bg-center bg-no-repeat w-12 h-12 rounded-full" style={{
                backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png")'
            }}></div>

            <div className="relative flex items-center w-full justify-center h-16 cursor-pointer"
                 onMouseEnter={() => setIsHover(true)}
                 onMouseLeave={() => setIsHover(false)}>
                <div
                    className="absolute top-1 left-4 right-4 h-[2px] overflow-hidden">
                    <div
                        className={clsx("absolute top-0 left-0 duration-300 bg-rose-500 shadow-rose-500/50 transition-all h-full w-0", isHover && "!w-full shadow-2xl")}></div>
                </div>

                <div className="absolute top-1 bottom-1 left-4 w-[2px]">
                    <div
                        className={clsx("absolute top-0 left-0 w-full h-0 duration-300 transition-all bg-orange-500 shadow-orange-500/50", isHover && "!h-full shadow-2xl")}></div>
                </div>

                <div className="font-code font-bold text-lg">C programming</div>


                <div className="absolute bottom-1 left-4 right-4 h-[2px]">
                    <div
                        className={clsx("absolute top-0 right-0 duration-300 h-full w-0 bg-blue-500 shadow-blue-500/50 transition-all", isHover && "!w-full shadow-2xl")}></div>
                </div>

                <div className="absolute bottom-1 right-4 top-1 w-[2px]">
                    <div
                        className={clsx("absolute bottom-0 duration-300 w-full bg-pink-500 shadow-pink-500 h-0 transition-all", isHover && "!h-full shadow-2xl")}></div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-3">
                    <PresentationIcon size={20}/>
                    <div className="font-code">14 lessons</div>
                </div>

                <div className="flex items-center gap-3">
                    <ClockIcon size={20}/>
                    <div className="font-code">5 hours</div>
                </div>

                <div className="flex items-center gap-3">
                    <EyeIcon size={20}/>
                    <div className="font-code">5.6k</div>
                </div>

                <div className="flex items-center gap-3">
                    <CloudDownloadIcon size={20}/>
                    <div className="font-code">7.2k</div>
                </div>

                <div className="flex items-center gap-3">
                    <HardDriveIcon size={20}/>
                    <div className="font-code">drive</div>
                </div>

                <div className="flex items-center gap-3">
                    <UserIcon size={20}/>
                    <div className="font-code">@hnamhocit</div>
                </div>
            </div>
        </div>
    );
};

export default Document;