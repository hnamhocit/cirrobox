"use client";

import {Image,} from "@heroui/react";


import {useProgress} from "@/contexts/ProgressProvider";
import ProgressLink from "../ProgressLink";
import Search from "./Search";
import ProgressBar from "./ProgressBar";
import Actions from "@/components/Header/Actions";

const Header = () => {
    const {progress} = useProgress();

    return (
        <header className="sticky top-0 left-0 w-full z-20 h-20 pt-4 px-4">
            <ProgressBar progress={progress}/>

            <div
                className="h-full container mx-auto flex items-center px-4 justify-between bg-white dark:bg-neutral-900/50 backdrop-blur-2xl rounded-xl">
                <div className="flex-1 flex items-center gap-3">
                    <ProgressLink href="/">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            className="hidden md:block w-10 h-10 bg-gray-900 dark:bg-transparent transition-colors rounded-full object-cover"
                        />
                    </ProgressLink>

                    <div className="text-lg font-semibold font-code">
                        Cirro<span className="text-blue-500">Box</span>
                    </div>
                </div>

                <Search/>

                <Actions/>
            </div>
        </header>
    );
};

export default Header;
