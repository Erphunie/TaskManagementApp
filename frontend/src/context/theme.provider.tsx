import { useCallback, useMemo, useState, type PropsWithChildren } from "react";
import { ThemeContext, type Theme } from "./theme.context";

const ThemeContextProvider = ({ children }: PropsWithChildren) => {
    const [tValue, setT] = useState<Theme>("LIGHT");

    const changer = useCallback(() => {
        setT((previous) => (previous === "DARK" ? "LIGHT" : "DARK"));
    }, []);

    const value = useMemo(() => ({ tValue, changer }), [tValue, changer]);

    return (
        <ThemeContext.Provider value={value}>
            <div className={tValue === "DARK" ? "dark" : ""}>{children}</div>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
