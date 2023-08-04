import React, { FC } from "react";
import Subheading from "./Subheading";

interface Props {
    children?: React.ReactNode;
    className?: string;
    style?: any;
    header: string;
}

const Subsection: FC<Props> = ({ children, className = "", header, style }) => {
    return (
        <div className={`gap-y-4 ${className}`} style={style}>
            <Subheading className="mb-4">{header}</Subheading>
            {children}
        </div>
    );
};

export default Subsection;
