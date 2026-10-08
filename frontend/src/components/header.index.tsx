import type { ReactNode } from "react";
import { CiLight } from "react-icons/ci";

const Header = ({ children }: { children?: ReactNode }) => {
    return (
        <div className="flex items-center justify-between py-5 container mx-auto">
            <div className="text-primary text-xl font-bold mr-auto">
                <span className="sm:hidden">TM</span>
                <span className="hidden sm:block">Task Management</span>
            </div>
            <div className="flex items-center gap-5">
                <div className="hover:bg-primary/40 duration-300 rounded-lg px-2 py-2 cursor-pointer">
                    <CiLight size={20} />
                    {/* <CiDark size={20} /> */}
                </div>
                {children}
            </div>
        </div>
    );
};
export default Header;
