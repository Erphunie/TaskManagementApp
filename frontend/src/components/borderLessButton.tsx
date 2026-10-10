import type { ReactNode } from "react";

const BorderLessButton = (
    props: Partial<{
        children: ReactNode;
        className: string;
    }>,
) => {
    return (
        <div
            className={`hover:bg-primary/40 x duration-300 rounded-lg px-2 py-2 cursor-pointer flex items-center gap-1.5 text-sm ${props.className ? props.className : ""}`}
        >
            {props.children}
        </div>
    );
};
export default BorderLessButton;
