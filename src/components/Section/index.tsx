import {FC, ReactNode} from "react";
import clsx from "clsx";

interface SectionProps {
    title: string;
    className?: string;
    children: ReactNode;
}

const Section: FC<SectionProps> = ({title, className, children}) => (
    <div className={clsx("relative min-h-60 space-y-7", className)}>
        <h2 className="text-3xl font-bold font-code text-center">{title}</h2>

        {children}
    </div>
);

export default Section;
