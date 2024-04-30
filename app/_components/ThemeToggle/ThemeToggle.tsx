"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            className={`w-10 p-2 rounded-md text-[#000000] hover:text-[#EAB308] dark:text-[#FFFFFF] active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <div className="w-full hover:scale-110">
                {theme === "light" ? <MdDarkMode size={"100%"} /> : <MdOutlineLightMode size={"100%"} />}
            </div>
        </button>
    );
};

export default ThemeToggle;
