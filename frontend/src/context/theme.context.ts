import { createContext, useContext } from "react";

export type Theme = "LIGHT" | "DARK";

type ThemeContextValue = {
    tValue: Theme;
    changer: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within ThemeContextProvider");
    }

    return context;
};
