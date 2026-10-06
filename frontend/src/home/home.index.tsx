import Header from "./header.index";
import HeroSection from "./heroSection.index";

export const HomePage = () => {
    return (
        <div className="bg-white-2 relative">
            <div className="relative z-10">
                <Header />
                <HeroSection />
            </div>
            <div className="surface-grid bg-transparent w-full h-110 absolute -top-px left-0 "></div>
        </div>
    );
};
