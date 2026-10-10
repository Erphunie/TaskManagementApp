import { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaCheck } from "react-icons/fa";

type DropdownProps = {
    onChange: (s: string) => void;
    options: string[];
};

const Dropdown = ({
    onChange,
    options,
    extraClassName,
}: DropdownProps & {
    extraClassName?: string;
}) => {
    const isFirstTime = useRef(true);
    const [priorities, setPriorities] = useState(options[0]);

    useEffect(() => {
        if (isFirstTime.current) {
            isFirstTime.current = false;
            return;
        }
        onChange(priorities);
    }, [priorities, onChange]);

    return (
        <div
            className={`min-w-35 relative h-full group cursor-pointer ${extraClassName ? extraClassName : ""}`}
        >
            <button className="w-full border border-border rounded-lg px-2  text-black-1 flex items-center justify-between gap-5 cursor-pointer  h-[34.9px] group-hover:border-primary/50 transition">
                {priorities}
                <FaAngleDown className="text-gray-1" />
            </button>
            <div className="absolute left-0 right-0  group-hover:visible transition group-hover:opacity-100 duration-300 invisible opacity-0">
                <div className="mt-1 border border-primary/50 rounded-xl bg-white flex flex-col p-0.5">
                    {options.map((option) => (
                        <div
                            key={option}
                            className={`p-1.5 hover:bg-primary/40 rounded-lg transition duration-200 flex items-center justify-between ${priorities === option ? "bg-primary/60" : ""}`}
                            onClick={(e) => {
                                setPriorities(
                                    (e.target as HTMLElement).innerHTML,
                                );
                            }}
                        >
                            {option}
                            {priorities === option ? (
                                <FaCheck
                                    className="text-black-1 mr-1"
                                    size={10}
                                />
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Dropdown;
