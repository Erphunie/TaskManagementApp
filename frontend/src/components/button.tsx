import type { ComponentProps } from "react";

const CustomButton = ({
    text,
    className: classProps,
}: ComponentProps<"button"> & { text?: string }) => {
    return (
        <button
            className={`rounded-lg px-3 py-2 text-base cursor-pointer font-semibold duration-300 bg-primary hover:bg-primary/80 ${classProps ? classProps : ""}`}
        >
            {text}
        </button>
    );
};
export default CustomButton;
