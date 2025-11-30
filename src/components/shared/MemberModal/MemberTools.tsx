import { Tools } from "@/types/Tools";
export const MemberTools = ({ tools }: { tools: Tools[] }) => {
    return (
        <ul className="overflow-hidden flex flex-wrap max-h-[80px] ml-3 tab:ml-[6px] tab:mb-10">
            {tools.map((tool, idx) => (
                <li
                    key={idx}
                    className="mx-1 my-2 tab:my-1 border border-greyLight dark:border-grey px-2 py-[4.5px] text-xs tab:text-base"
                >
                    {tool.name}
                </li>
            ))}
        </ul>
    );
};
