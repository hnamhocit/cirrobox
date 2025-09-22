"use client";

import CodeBlock from "@/components/CodeBlock";
import {Avatar, Button} from "@heroui/react";
import {CloudDownloadIcon, MessageCircleIcon, Send, StarIcon,} from "lucide-react";
import {usePathname} from "next/navigation";

const LibraryDetails = () => {
    const slug = usePathname();

    return (
        <div className="space-y-12 py-12">
            <div className="flex-1 space-y-4">
                <div className="text-5xl text-blue-500 font-bold font-code">
                    drive-cli
                </div>

                <div className="text-lg">
                    Simple and easy to use CLI tool for managing Google Drive files.
                </div>

                <div className="flex items-center gap-7">
                    <div className="flex items-center gap-3">
                        <div>4.8</div>
                        <StarIcon size={20}/>
                    </div>

                    <div className="h-6 w-[2px] bg-neutral-700"></div>

                    <div className="flex items-center gap-3">
                        <CloudDownloadIcon size={20}/>
                        <div>3.75k</div>
                    </div>

                    <div className="h-6 w-[2px] bg-neutral-700"></div>

                    <div className="flex items-center gap-3">
                        <MessageCircleIcon size={20}/>
                        <div>3.75k</div>
                    </div>
                </div>
            </div>

            <CodeBlock
                code={`

        #!/bin/bash
        # ==== Demo bash script for syntax highlighting ====

        # set variables
        NAME="Nam"
        COUNT=5

        echo "Hello $NAME! This is a bash syntax highlight test."
        echo

        # loop example
        for ((i=1; i<=COUNT; i++)); do
          echo "Iteration $i"
          if [ $i -eq 3 ]; then
            echo "This is the third loop!"
          fi
        done

        # conditional
        if [ "$NAME" == "Nam" ]; then
          echo "Name matched."
        else
          echo "Name not matched."
        fi

        # function example
        say_hello() {
          echo "Hello from function with arg: $1"
        }

        say_hello "world"

        # call external command
        ls -1
        `}
                language="bash"
            />

            <div className="space-y-4">
                <div className="text-2xl font-semibold font-code text-center">
                    Additional info
                </div>

                <div>
                    <span className="font-semibold font-code">Description: </span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                    cupiditate necessitatibus optio vel. Repudiandae pariatur blanditiis
                    optio, explicabo labore iste.
                </div>

                <div className="flex items-center gap-3">
                    <div className="font-semibold font-code">Repository</div>
                    <div className="py-1 px-3 text-pink-500 rounded-xl bg-pink-500/10">
                        https://github.com/hnamhocit/drive-cli
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="font-semibold font-code">Release date</div>
                    <div>{new Date().toLocaleDateString()}</div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="font-semibold font-code">Recently updated</div>
                    <div>{new Date().toLocaleDateString()}</div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="text-2xl font-semibold font-code text-center">
                    Comments (5.8k)
                </div>

                <div className="flex gap-3">
                    <div className="shrink-0">
                        <Avatar src="" alt=""/>
                    </div>

                    <div className="flex-1 space-y-2">
                        <div>Hoang Nam</div>

                        <div className="flex flex-col gap-3 bg-neutral-950 min-h-40 py-2 px-3 rounded-xl">
              <textarea
                  className="flex-1 block outline-none resize-none"
                  placeholder="Enter here..."
              ></textarea>

                            <div className="flex items-center justify-end">
                                <Button color="primary" radius="full" startContent={<Send/>}>
                                    Send
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryDetails;
