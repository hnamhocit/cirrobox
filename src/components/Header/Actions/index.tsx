import React from 'react';

import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@heroui/react";
import {BellIcon, LayoutGridIcon, LibraryIcon, LogOutIcon, MoonIcon, SunIcon, UserIcon} from "lucide-react";

import {useThemeStore, useUserStore} from "@/stores";
import {useAuthModal} from "@/contexts/AuthModalProvider";
import {Theme} from "@/interfaces";
import LanguageSwitcher from "./LanguageSwitcher";
import {useRouter} from "next/navigation";

const Actions = () => {
    const {theme, toggleTheme} = useThemeStore();
    const {onOpen} = useAuthModal();
    const {user, logout} = useUserStore();
    const router = useRouter();

    return (
        <div className="flex-1 flex items-center gap-3 justify-end">
            <Button isIconOnly variant="light" onPress={toggleTheme}>
                {theme === Theme.LIGHT ? (
                    <SunIcon size={20}/>
                ) : (
                    <MoonIcon size={20}/>
                )}
            </Button>

            <LanguageSwitcher/>

            <Button isIconOnly variant="light">
                <BellIcon size={20}/>
            </Button>

            {user ? (
                <Dropdown>
                    <DropdownTrigger>
                        <Button isIconOnly variant="light">
                            <UserIcon size={20}/>
                        </Button>
                    </DropdownTrigger>

                    <DropdownMenu onAction={key => {
                        switch (key) {
                            case "upload-app":
                                router.push("/uploads/app")
                                break
                            case "upload-lib":
                                router.push("/uploads/lib")
                                break
                            case "logout":
                                logout().then(r => r);
                                break
                        }
                    }}>
                        <DropdownItem key="upload-app" startContent={
                            <LayoutGridIcon size={20}/>
                        }>
                            Upload App
                        </DropdownItem>

                        <DropdownItem key="upload-lib" startContent={
                            <LibraryIcon size={20}/>
                        }>
                            Upload Lib
                        </DropdownItem>

                        <DropdownItem key="logout" startContent={
                            <LogOutIcon size={20}/>
                        }>
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
    );
};

export default Actions;