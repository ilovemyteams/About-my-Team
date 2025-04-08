"use client";
import { usePathname } from "next/navigation";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

interface EasterCounterContextType {
    totalFoundEggs: number;
    incrementEggs: () => void;
    isCounterVisible: boolean;
    setIsCounterVisible: (counter: boolean) => void;
}

const EasterCounterContext = createContext<
    EasterCounterContextType | undefined
>(undefined);

export const EasterCounterProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [totalFoundEggs, setTotalFoundEggs] = useState<number>(0);
    const [isCounterVisible, setIsCounterVisible] = useState<boolean>(true);
    const pathname = usePathname();

    const incrementEggs = () => {
        setTotalFoundEggs(prev => prev + 1);
    };
    useEffect(() => {
        setTotalFoundEggs(0);
    }, [pathname]);

    return (
        <EasterCounterContext.Provider
            value={{
                totalFoundEggs,
                incrementEggs,
                isCounterVisible,
                setIsCounterVisible,
            }}
        >
            {children}
        </EasterCounterContext.Provider>
    );
};

export const useEasterCounter = () => {
    const context = useContext(EasterCounterContext);
    if (context === undefined) {
        throw new Error(
            "useEasterCounter must be used within an EasterCounterProvider"
        );
    }
    return context;
};
