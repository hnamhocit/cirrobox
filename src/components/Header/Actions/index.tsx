import React, {Key} from 'react';

import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@heroui/react";
import {
    BellIcon,
    BookOpenTextIcon,
    LayoutGridIcon,
    LibraryIcon,
    LogOutIcon,
    MoonIcon,
    SunIcon,
    UserIcon
} from "lucide-react";

import {useThemeStore, useUserStore} from "@/stores";
import {useAuthModal} from "@/contexts/AuthModalProvider";
import {Theme} from "@/interfaces";
import LanguageSwitcher from "./LanguageSwitcher";
import {useRouter} from "next/navigation";

const items = [
    {
        name: "Upload app",
        key: "uploads/app",
        icon: <LayoutGridIcon size={20}/>
    },

    {
        name: "Upload library",
        key: "uploads/lib",
        icon: <LibraryIcon size={20}/>
    },

    {
        name: "Upload document",
        key: "uploads/document",
        icon: <BookOpenTextIcon size={20}/>
    },

    {
        name: "Logout",
        key: "logout",
        icon: <LogOutIcon size={20}/>
    }
]

const Actions = () => {
    const {theme, toggleTheme} = useThemeStore();
    const {onOpen} = useAuthModal();
    const {user, logout} = useUserStore();
    const router = useRouter();

    const handleAction = (key: Key) => {
        switch (key) {
            case "uploads/app":
                router.push(`/${key}`)
                break
            case "uploads/lib":
                router.push(`/${key}`)
                break
            case "uploads/document":
                router.push(`/${key}`)
                break
            case "logout":
                logout().then(r => r);
                break
        }
    }

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

                    <DropdownMenu onAction={handleAction}>
                        {items.map(item => (
                            <DropdownItem key={item.key} startContent={item.icon}>
                                {item.name}
                            </DropdownItem>
                        ))}
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