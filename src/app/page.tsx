"use client";

import Apps from "@/components/Apps";
import Hero from "@/components/Hero";
import Libraries from "@/components/Libraries";
import Documentation from "@/components/Documentation";

export default function Home() {
    return (
        <>
            <Hero/>

            <Apps/>

            <Libraries/>

            <Documentation/>
        </>
    );
}
