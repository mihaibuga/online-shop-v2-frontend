"use client";

import { useTheme } from "next-themes";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useClient } from "@/app/(private)/_hooks/useClient";

const ThemeToggle = () => {
    const isMounted = useClient();
    const { theme, setTheme } = useTheme();
    
    if (isMounted === false) {
        return null;
    }

    return (
        <button
            className={`w-full h-full hover:scale-110 hover:text-indigo-500 dark:hover:text-[#EAB308] duration-200`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
                {theme === "light" ? <MdDarkMode size={"100%"} /> : <MdOutlineLightMode size={"100%"} />}
        </button>
    );
};

export default ThemeToggle;
