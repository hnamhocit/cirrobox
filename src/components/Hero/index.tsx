"use client";

import { Button } from "@heroui/react";
import { Telescope } from "lucide-react";
import { useTranslations } from "next-intl";

const Hero = () => {
	const t = useTranslations("Hero");

	return (
		<div className="h-[calc(100vh-80px)] flex items-center gap-12">
			{/* Avatar + Info */}
			<div className="flex-1 hidden md:flex flex-col items-center gap-7 text-center">
				<div
					className="flex items-center justify-center w-48 h-48 rounded-xl bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage:
							'url("https://cdn.creazilla.com/digital-illustrations/1658859/background-color-light-illustration-lg.jpeg")',
					}}
				>
					<div
						className="h-32 w-32 rounded-full bg-cover border-2 bg-center bg-no-repeat"
						style={{
							backgroundImage: `url("https://avatars.githubusercontent.com/u/98753616?v=4")`,
						}}
					></div>
				</div>

				<div className="space-y-2">
					<div className="text-2xl font-bold">Nguyen Hoang Nam</div>
					<div className="text-xl font-code">@hnamhocit</div>
				</div>

				<Button
					color="primary"
					variant="shadow"
					radius="full"
					startContent={<Telescope />}
				>
					{t("button")}
				</Button>
			</div>

			{/* Intro Text */}
			<div className="flex-3 text-lg leading-relaxed space-y-6">
				<p>
					{t.rich("intro", {
						strong: (chunk) => <span className="font-semibold">{chunk}</span>,
						codePink: (chunk) => (
							<span className="text-pink-500 font-semibold font-code">{chunk}</span>
						),
						codeBlue: (chunk) => (
							<span className="text-blue-500 font-semibold font-code">{chunk}</span>
						),
					})}
				</p>

				<p>
					{t.rich("passion", {
						code: (chunk) => <span className="font-semibold font-code">{chunk}</span>,
						tech: (chunk) => (
							<span className="text-purple-500 font-medium font-code">{chunk}</span>
						),
						lang: (chunk) => (
							<span className="text-green-500 font-medium font-code">{chunk}</span>
						),
					})}
				</p>

				<p>
					{t.rich("mission", {
						codeFuchsia: (chunk) => (
							<span className="font-semibold font-code text-fuchsia-500">{chunk}</span>
						),
					})}
				</p>

				<p>
					{t("github")}{" "}
					<a
						href="https://github.com/hnamhocit"
						className="text-blue-500 font-semibold underline font-code"
					>
						github.com/hnamhocit
					</a>
				</p>
			</div>
		</div>
	);
};

export default Hero;

