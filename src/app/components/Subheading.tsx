import React, { FC } from "react";

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Subheading: FC<Props> = ({ children, className = "" }) => {
    return (
        <div className={`font-regular text-base text-zinc-300 self-start ${className}`}>
            {children}
        </div>
    );
};

export default Subheading;
