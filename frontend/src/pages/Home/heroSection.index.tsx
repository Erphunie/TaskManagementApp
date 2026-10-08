import { Link } from "react-router-dom";
import CustomButton from "../../components/button";

const HeroSection = () => {
    return (
        <div className="container mx-auto mt-8 md:mt-12">
            <div className="border rounded-3xl w-fit py-1 px-2.5 text-xs border-border text-gray-600 font-semibold bg-white mb-4 sm:mb-8">
                Build for one person: You
            </div>
            <h1 className="text-5xl font-semibold mb-4 max-w-125 sm:mb-7">
                A task board that stays
                <span className="w-fit highlight-text pb-2">
                    {" "}
                    out of your way
                </span>
            </h1>
            <p className="text-gray-1 text-lg sm:text-xl">
                Capture everything, then cut through it with status filters,
                priorities and instant search. Private by default only you can
                see your tasks.
            </p>
            <div className="flex g-4 flex-col md:flex-row items-start gap-3 mt-8 md:gap-4 pb-5">
                <Link to={"/auth?mode=sign-up"}>
                    <CustomButton
                        text="Create your board"
                        className="px-8 w-full  min-[450px]:w-fit shadow-md  border border-transparent"
                    />
                </Link>
                <Link to={"/auth?mode=sign-in"}>
                    <CustomButton
                        text="I already have an account"
                        className="px-8 bg-white border-border border shadow-md  w-full  min-[450px]:w-fit hover:bg-primary/30! hover:border-primary/30!"
                    />
                </Link>
            </div>
        </div>
    );
};
export default HeroSection;
