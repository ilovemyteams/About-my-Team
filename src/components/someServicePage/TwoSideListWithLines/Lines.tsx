export const Lines = () => {
    const lines = new Array(6).fill(null);
    const duration = 3000;

    return (
        <div
            className="inline-flex gap-4 tab:gap-5 justify-center h-[60px] tab:h-[90px] 
                    tab:items-center tab:justify-center text-purple-strokeLight dark:text-purple-stroke"
            aria-label="decoration"
        >
            {lines.map((_, index) => {
                const delay = (index + 1) * (duration / 6);
                return (
                    <div
                        key={index}
                        className={`h-full w-[1px] bg-current animate-linesColor`}
                        style={{ animationDelay: `${delay}ms` }}
                    />
                );
            })}
        </div>
    );
};
