import type { ComponentProps } from "react";

const CustomButton = (props: ComponentProps<"button">) => {
    return (
        <button
            className={`rounded-lg px-3 py-2 text-base cursor-pointer font-semibold duration-300 bg-primary hover:bg-primary/80 ${props.className ? props.className : ""}`}
        >
            {props.children}
        </button>
    );
};
export default CustomButton;
