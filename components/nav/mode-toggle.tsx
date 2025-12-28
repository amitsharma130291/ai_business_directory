"use client"

import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

function ModeToggle() {
     const [mounted, setMounted] = useState(false)
     const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null
   
    return (
        <Button
            variant="link"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
    )
}

export default ModeToggle;
