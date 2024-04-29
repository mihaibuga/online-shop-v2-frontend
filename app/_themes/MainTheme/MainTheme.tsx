"use client";

import { ThemeProvider } from "next-themes";

const MainTheme = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            {children}
        </ThemeProvider>
    );
};

export default MainTheme;
