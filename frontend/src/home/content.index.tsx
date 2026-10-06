import { IoIosMove, IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";

const Content = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col gap-4 pb-20 pt-15 md:flex-row flex-wrap">
                <div className="border bg-white rounded-lg p-4 flex flex-col border-border md:w-[calc(50%-8px)] lg:w-[calc(100%/3-32px/3)]">
                    <div className="rounded-xl bg-primary/30 w-fit p-2 mb-3">
                        <IoIosMove size={20} />
                    </div>
                    <h2 className="font-semibold">Status at a glance</h2>
                    <p className="text-gray-1 mt-1">
                        Move tasks between To do, In progress and Done with a
                        single click.
                    </p>
                </div>
                <div className="border bg-white rounded-lg p-4 flex flex-col border-border md:w-[calc(50%-8px)] lg:w-[calc(100%/3-32px/3)]">
                    <div className="rounded-xl bg-primary/30 w-fit p-2 mb-3">
                        <IoFilter size={20} />
                    </div>
                    <h2 className="font-semibold">Filter what matters</h2>
                    <p className="text-gray-1 mt-1">
                        Narrow the board by status and priority so today's work
                        stays in view.
                    </p>
                </div>
                <div className="border bg-white rounded-lg p-4 flex flex-col border-border md:w-[calc(50%-8px)] lg:w-[calc(100%/3-32px/3)]">
                    <div className="rounded-xl bg-primary/30 w-fit p-2 mb-3">
                        <IoIosSearch size={20} />
                    </div>
                    <h2 className="font-semibold">Instant search</h2>
                    <p className="text-gray-1 mt-1">
                        Type a word and find it across every title and
                        description right away.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Content;
