import type { ReactNode } from "react";
import { CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";
import BorderLessButton from "./borderLessButton";

const Header = ({ children, link }: { children?: ReactNode; link: string }) => {
    return (
        <div className="flex items-center justify-between py-5 container mx-auto">
            <Link
                to={link}
                className="text-primary text-xl font-bold mr-auto cursor-pointer"
            >
                <span className="sm:hidden">TM</span>
                <span className="hidden sm:block">Task Management</span>
            </Link>
            <div className="flex items-center gap-5">
                <BorderLessButton>
                    <CiLight size={20} />
                    {/* <CiDark size={20} /> */}
                </BorderLessButton>
                {children}
            </div>
        </div>
    );
};
export default Header;
