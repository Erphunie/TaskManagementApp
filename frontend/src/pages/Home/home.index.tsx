import { Link } from "react-router-dom";
import CustomButton from "../../components/button";
import Header from "../../components/header.index";
import Content from "./content.index";

import HeroSection from "./heroSection.index";

export const HomePage = () => {
    return (
        <div className="bg-white-2 relative min-h-svh">
            <div className="relative z-10">
                <Header>
                    <Link to={"/auth?mode=sign-up"}>
                        <CustomButton text="Get started" />
                    </Link>
                </Header>
                <HeroSection />
            </div>
            <div className="surface-grid bg-transparent w-full h-110 absolute -top-px left-0 "></div>
            <Content />
        </div>
    );
};
