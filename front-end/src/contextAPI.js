import React, { createContext } from "react";
import useLocalStorage from "use-local-storage";


export const ThemeContext = createContext();


export const ThemeContextElement = ({children}) => {
    const [theme, setTheme] = useLocalStorage("dark");

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{switchTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}
