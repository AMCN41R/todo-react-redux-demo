import * as React from "react";

export interface ILinkProps {
    active: boolean;
    children: React.ReactNode;
    onClick: () => void;
}

const Link = ({ active, children, onClick }: ILinkProps) => {

    if (active) {
        return <span>{children}</span>
    }

    return (
        <a
            href=""
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </a>
    )
}

export default Link;