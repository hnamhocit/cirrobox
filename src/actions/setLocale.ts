"use server";

import { cookies } from "next/headers";

export async function setLocale(locale: "en" | "vi") {
	const cookieStore = await cookies();

	cookieStore.set("locale", locale, {
		path: "/",
		httpOnly: false, // cho client đọc được
		sameSite: "lax",
		secure: process.env.NODE_ENV === "production",
		maxAge: 60 * 60 * 24 * 365, // 1 năm
	});
}
