const HomeMainContentComp = () => {
    return (
        <div className="container mx-auto pt-6">
            <div className="mb-5 border-gray-1 border-[0.5px] text-gray-1 py-1 px-3 rounded-3xl bg-white w-fit text-xs ">
                Built for you
            </div>
            <h1 className="text-5xl">
                A task board that stays{" "}
                <span className="highlight-text font-bold ">
                    out of your way
                </span>
            </h1>
            <p className="my-5 text-gray-1 text-[18px]">
                Capture everything. then cut through it with status filters,
                priorities and instant search. Private by default. Only you can
                see your tasks.
            </p>
            <div className="items-center gap-4 flex ">
                <button className="bg-primary rounded-xl py-3 px-4">
                    Create your board
                </button>
                <button className="border-gray-1 shadow-md px-4 py-3 border rounded-3xl">I already have board</button>
            </div>
        </div>
    );
};
export default HomeMainContentComp;
