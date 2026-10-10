import { CiLogout } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import BorderLessButton from "../../components/borderLessButton";
import CustomButton from "../../components/button";
import Dropdown from "../../components/dropdown";
import Header from "../../components/header.index";

const TasksPage = () => {
    return (
        <div className="bg-white-2 min-h-svh">
            <div className="border-b border-border shadow-md/5">
                <Header link="">
                    <BorderLessButton>
                        <CiLogout size={20} className="rotate-180 mt-0.5" />{" "}
                        Sign out
                    </BorderLessButton>
                </Header>
            </div>
            <div className="container mx-auto mt-12">
                <div className="flex flex-col gap-6 md:flex-row">
                    <div className="flex-1">
                        <h1 className="text-3xl font-semibold">
                            Dashboard title
                        </h1>
                        <div className="text-sm text-gray-1">
                            1 open . 0 completed
                        </div>
                    </div>
                    <CustomButton className="md:w-40 h-10 w-full">
                        + New task
                    </CustomButton>
                </div>
                <div className="mt-8 border border-border bg-white rounded-lg p-2.5 shadow-xl/5 flex flex-col lg:flex-row gap-2 lg:items-center">
                    <div className="border border-border rounded-lg md:flex-1 flex items-center px-2 gap-2">
                        <FiSearch size={20} className="text-gray-1" />
                        <input
                            type="text"
                            className="outline-none text-gray-1 h-8 flex-1"
                            placeholder="Search tasks..."
                        />
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row">
                        <div className="flex flex-row flex-wrap gap-2 flex-1">
                            <button className="border border-border bg-white-2 text-sm rounded-4xl py-1.5 px-3 flex items-center gap-1.5 text-gray-1 hover:bg-primary hover:text-black-1 cursor-pointer w-[calc(50%-8px)] sm:w-fit">
                                All <span>0</span>
                            </button>
                            <button className="border border-border bg-white-2 text-sm rounded-4xl py-1.5 px-3 flex items-center gap-1.5 text-gray-1 hover:bg-primary hover:text-black-1 cursor-pointer w-[calc(50%-8px)] sm:w-fit">
                                To do <span>0</span>
                            </button>
                            <button className="border border-border bg-white-2 text-sm rounded-4xl py-1.5 px-3 flex items-center gap-1.5 text-gray-1 hover:bg-primary hover:text-black-1 cursor-pointer w-[calc(50%-8px)] sm:w-fit">
                                In progress <span>0</span>
                            </button>
                            <button className="border border-border bg-white-2 text-sm rounded-4xl py-1.5 px-3 flex items-center gap-1.5 text-gray-1 hover:bg-primary hover:text-black-1 cursor-pointer w-[calc(50%-8px)] sm:w-fit">
                                Done <span>0</span>
                            </button>
                        </div>
                        <Dropdown
                            onChange={() => {}}
                            options={[
                                "All priorities",
                                "High",
                                "Medium",
                                "Low",
                            ]}
                        />
                    </div>
                </div>
                <div className="mt-8 border border-border rounded-lg shadow-xl bg-white p-4 flex flex-col gap-2 md:flex-row justify-between md:items-center">
                    <div className="flex gap-2 items-center">
                        <h2 className="text-lg font-semibold">Title</h2>
                        <div className="rounded-4xl bg-white-1 py-1 px-2 border border-border text-xs flex items-center justify-center  mt-1 text-black-1">
                            TO DO
                        </div>
                        <div className="border border-border py-1 px-2 bg-white rounded-4xl text-xs mt-1">
                            Medium
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
                {/* <NoticeBox
                    title="No tasks yet."
                    desc="Add your first task to get the board rolling."
                />
                <NoticeBox
                    title="Nothing matches those filters."
                    desc="Try a different status, priority or search term.."
                /> */}
            </div>
        </div>
    );
};
export default TasksPage;
