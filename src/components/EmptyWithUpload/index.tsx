import React, {FC} from 'react';
import ProgressLink from "@/components/ProgressLink";
import {Button} from "@heroui/react";
import {Upload} from "lucide-react";

interface EmptyWithUploadProps {
    name: string;
}

const EmptyWithUpload: FC<EmptyWithUploadProps> = ({name}) => {
    return (
        <div className='flex flex-col items-center justify-center gap-3'>
            <div>No {name} have been uploaded</div>

            <ProgressLink
                href={`/uploads/${name === 'apps' ? 'app' : name === 'libs' ? 'lib' : 'document'}`}
            >
                <Button
                    startContent={<Upload size={20}/>}
                    color="primary"
                >
                    Upload
                </Button>
            </ProgressLink>
        </div>
    );
};

export default EmptyWithUpload;