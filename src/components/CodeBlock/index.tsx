"use client";

import "highlight.js/styles/github-dark.css";

import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import { SquareTerminalIcon } from "lucide-react";
import { Google_Sans_Code } from "next/font/google";
import clsx from "clsx";

const font = Google_Sans_Code({
  weight: "400",
});

type Props = {
  code: string;
  language: string;
};

export default function CodeBlock({ code, language }: Props) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 font-code p-4 flex items-center gap-1 text-blue-500">
        <SquareTerminalIcon size={20} />
        <div>bash</div>
      </div>

      <pre>
        <code ref={codeRef} className={clsx(language, font.className)}>
          {code}
        </code>
      </pre>
    </div>
  );
}
