import React from 'react';
import {LoaderCircleIcon} from "lucide-react";

const Loading = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <LoaderCircleIcon size={64} className="animate-spin"/>
        </div>
    );
};

export default Loading;