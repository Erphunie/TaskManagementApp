import { CiLight } from "react-icons/ci";

const Header = () => {
    return (
        <div className="flex items-center justify-between p-5 container mx-auto">
            <div className="text-primary text-xl font-bold">
                <span className="sm:hidden">TM</span>
                <span className="hidden sm:block">Task Management</span>
            </div>
            <div className="flex items-center gap-5">
                <div className="hover:bg-primary/40 duration-300 rounded-lg px-2 py-2 cursor-pointer">
                    <CiLight size={20} />
                    {/* <CiDark size={20} /> */}
                </div>
                <button className="bg-primary rounded-lg px-3 py-2 text-base cursor-pointer font-semibold hover:bg-primary/80 duration-300">
                    Get Started
                </button>
            </div>
        </div>
    );
};
export default Header;
