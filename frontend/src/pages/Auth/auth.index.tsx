import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/header.index";
import SignIn from "./signin/signin.index";
import SignUp from "./signup/signup.index";

const AuthPage = () => {
    const [searchParams] = useSearchParams();
    const [isLogin, setIsLogin] = useState(
        searchParams.get("mode") == "sign-in" ? true : false,
    );
    return (
        <div className="bg-white-2 relative min-h-svh">
            <div className="z-10 relative">
                <Header link="/" />
                <div className="flex items-center justify-center container mx-auto min-h-[calc(100svh-76px-40px)] mb-10">
                    <div className="border border-border rounded-lg bg-white p-6 px-8 shadow-2xl">
                        <h1 className="text-xl font-bold text-black-1">
                            Your tasks, your space
                        </h1>
                        <p className="text-gray-1 mb-5">
                            One private board, filter by status, search in
                            keystroke.
                        </p>
                        <div className="bg-border rounded-lg p-1 flex items-center relative gap-2 text-sm">
                            <div
                                className="rounded-lg p-1 w-1/2 text-center font-semibold relative z-10 cursor-pointer hover:bg-white/60 transition"
                                onClick={() => setIsLogin(true)}
                            >
                                Sign in
                            </div>
                            <div
                                className="rounded-lg p-1 w-1/2 text-center font-semibold relative z-10 cursor-pointer hover:bg-white/60 transition"
                                onClick={() => setIsLogin(!true)}
                            >
                                Sign up
                            </div>
                            <div
                                className={`bg-white absolute w-[calc(50%-8px)] top-1 bottom-1 rounded-lg transition-all duration-300
                                ${isLogin ? "left-1" : "left-[calc(50%+4px)]"}
                                `}
                            ></div>
                        </div>
                        <div className="mt-5">
                            {isLogin ? <SignIn /> : <SignUp />}
                        </div>
                    </div>
                </div>
            </div>
            <div className="surface-grid bg-transparent w-full h-svh absolute -top-px left-0"></div>
        </div>
    );
};
export default AuthPage;
