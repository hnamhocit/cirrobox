"use client";

import { useEffect, useState, useTransition } from "react";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
	Image
} from "@heroui/react";
import { setLocale } from "@/actions/setLocale";

const flagMap: Record<string, string> = {
	en: "GB",
	vi: "VN"
};

export default function LanguageSwitcher() {
	const [locale, setLocaleState] = useState<"en" | "vi">("en");
	const [isPending, startTransition] = useTransition();

	// đọc cookie hiện tại từ browser
	useEffect(() => {
		const match = document.cookie.match(/locale=(\w+)/);
		if (match && (match[1] === "en" || match[1] === "vi")) {
			setLocaleState(match[1] as "en" | "vi");
		}
	}, []);

	const changeLang = (lang: "en" | "vi") => {
		if (lang !== locale) {
			startTransition(async () => {
				await setLocale(lang);
				window.location.reload();
			});
		}
	};

	return (
		<Dropdown>
			<DropdownTrigger>
				<Button isIconOnly variant="light" disabled={isPending}>
					<Image
						src={`https://flagsapi.com/${flagMap[locale]}/flat/32.png`}
						alt={locale}
						className="w-6 h-6 rounded-full"
					/>
				</Button>
			</DropdownTrigger>

			<DropdownMenu
				aria-label="Change language"
				onAction={(key) => changeLang(key as "en" | "vi")}
				selectedKeys={[locale]}
				selectionMode="single"
			>
				<DropdownItem key="en" startContent={
					<Image
						src="https://flagsapi.com/GB/flat/24.png"
						alt="English"
					/>
				}>
					English
				</DropdownItem>
				<DropdownItem key="vi" startContent={
					<Image
						src="https://flagsapi.com/VN/flat/24.png"
						alt="Vietnamese"
					/>
				}>
					Tiếng Việt
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
