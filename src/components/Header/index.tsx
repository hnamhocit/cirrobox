"use client";

import { AuthModalContext } from "@/contexts/AuthModalProvider";
import { Theme } from "@/interfaces";
import { useThemeStore } from "@/stores";
import { Button, Image } from "@heroui/react";
import {
  BellIcon,
  LanguagesIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "lucide-react";
import { useContext } from "react";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  const { onOpen } = useContext(AuthModalContext);

  return (
    <header className="sticky top-0 left-0 w-full z-20 h-16 bg-white dark:bg-neutral-950 border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="flex-1 flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo"
            className="hidden md:block w-10 h-10 bg-gray-900 dark:bg-transparent transition-colors rounded-full object-cover"
          />

          <div className="text-lg font-semibold font-code">
            Cirro<span className="text-blue-500">Box</span>
          </div>
        </div>

        <div className="flex-1 hidden md:flex items-center gap-3 py-2 px-3 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors">
          <SearchIcon />

          <input
            type="text"
            placeholder="Search..."
            className="outline-none block bg-transparent w-full h-full"
          />
        </div>

        <div className="flex-1 flex items-center gap-3 justify-end">
          <Button isIconOnly variant="light" onPress={toggleTheme}>
            {theme === Theme.LIGHT ? (
              <SunIcon size={20} />
            ) : (
              <MoonIcon size={20} />
            )}
          </Button>

          <Button isIconOnly variant="light">
            <LanguagesIcon size={20} />
          </Button>

          <Button isIconOnly variant="light">
            <BellIcon size={20} />
          </Button>

          <Button onPress={onOpen} color="primary" radius="full">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
