import type { ComponentProps } from "react";

const BorderLessButton = (props: ComponentProps<"div">) => {
    return (
        <div
            onClick={props.onClick}
            className={`hover:bg-primary/40 text-black-2 duration-300 rounded-lg px-2 py-2 cursor-pointer flex items-center gap-1.5 text-sm ${props.className ? props.className : ""}`}
        >
            {props.children}
        </div>
    );
};
export default BorderLessButton;
