import { MdDeleteOutline } from "react-icons/md";
import BorderLessButton from "./borderLessButton";
import Dropdown from "./dropdown";

const Task = () => {
    return (
        <div className="border border-border rounded-lg shadow-xl bg-bgBox p-4 flex flex-col gap-2 md:flex-row justify-between md:items-center">
            <div className="flex gap-2 items-center justify-between md:justify-start">
                <h2 className="text-lg font-semibold text-black-2">Title</h2>
                <div className="flex gap-2">
                    <div className="rounded-4xl py-1 px-2 border border-border text-xs flex items-center justify-center  mt-1 text-gray-1 bg-[#e0eaee] dark:bg-[#28353b]">
                        TO DO
                    </div>
                    <div className="border border-border py-1 px-2 bg-white-2 rounded-4xl text-xs mt-1">
                        Medium
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Dropdown
                    onChange={() => {}}
                    options={["To do", "In progress", "Done"]}
                    extraClassName="w-full"
                />
                <BorderLessButton>
                    <MdDeleteOutline size={20} color="red" />
                </BorderLessButton>
            </div>
        </div>
    );
};
export default Task;
