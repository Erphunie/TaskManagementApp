const CustomButton = ({
    text,
    classname,
}: {
    text: string;
    classname?: string;
}) => {
    return (
        <button
            className={`rounded-lg px-3 py-2 text-base cursor-pointer font-semibold duration-300 bg-primary hover:bg-primary/80 ${classname ? classname : ""}`}
        >
            {text}
        </button>
    );
};
export default CustomButton;
