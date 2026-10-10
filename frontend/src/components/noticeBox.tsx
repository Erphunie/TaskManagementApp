const NoticeBox = (props: { title: string; desc: string }) => {
    return (
        <div className="mt-8 border border-border border-dotted p-8 flex items-center justify-center h-50 rounded-xl flex-wrap">
            <div className="flex flex-col text-center">
                <h2 className="text-xl font-semibold">{props.title}</h2>
                <p className="text-gray-1 text-sm">{props.desc}</p>
            </div>
        </div>
    );
};
export default NoticeBox;
