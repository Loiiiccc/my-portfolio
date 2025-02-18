"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function ThemeToggle() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Prevents hydration mismatch
    
    return (
        <Button variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}> {theme === "light"? <Sun color="#3e9392" size={20} /> : <Moon size={20} />}
        </Button>
    );
}
    