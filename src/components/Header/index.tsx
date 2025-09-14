"use client";

import { useAuthModal } from "@/contexts/AuthModalProvider";
import { useProgress } from "@/contexts/ProgressProvider";
import { Theme } from "@/interfaces";
import { useThemeStore, useUserStore } from "@/stores";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Link,
} from "@heroui/react";
import {
  BellIcon,
  LanguagesIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  UserIcon,
} from "lucide-react";
import ProgressLink from "../ProgressLink";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  const { onOpen } = useAuthModal();
  const { progress } = useProgress();
  const { user, logout } = useUserStore();

  return (
    <header className="sticky top-0 left-0 w-full z-20 h-16 bg-[rgba(255,255,255,.7)] dark:bg-[rgba(0,0,0,.7)] backdrop-blur-2xl">
      <div className="absolute bottom-0 h-[2px] w-full left-0 bg-neutral-200 dark:bg-neutral-700 transition-colors">
        <div
          className="absolute top-0 left-0 h-full transition-all bg-linear-65 from-purple-500 to-pink-500 shadow-lg shadow-blue-500"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>

      <div className="h-full container mx-auto flex items-center px-4 justify-between">
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

          {user ? (
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly variant="light">
                  <UserIcon size={20} />
                </Button>
              </DropdownTrigger>

              <DropdownMenu>
                <DropdownItem onClick={logout} key="logout">
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Button onPress={onOpen} color="primary" radius="full">
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
