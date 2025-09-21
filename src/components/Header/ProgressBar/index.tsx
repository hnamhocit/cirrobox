import React, {FC, memo} from 'react';

interface ProgressBarProps {
    progress: number;
}

const ProgressBar:FC<ProgressBarProps> = ({progress}) => {
    return (
        <div className="absolute top-0 h-[2px] w-full left-0 bg-neutral-100 dark:bg-neutral-900 transition-colors">
            <div
                className="absolute top-0 left-0 h-full transition-all bg-linear-65 from-purple-500 to-pink-500 shadow-lg shadow-blue-500"
                style={{
                    width: `${progress}%`,
                }}
            ></div>
        </div>
    );
};

export default memo(ProgressBar);