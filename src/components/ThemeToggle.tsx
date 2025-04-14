
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`h-[1.2rem] w-[1.2rem] ${theme === "light" ? "text-primary" : "text-muted-foreground"} transition-colors duration-300`} />
      <Switch 
        checked={theme === "dark"} 
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-500 data-[state=checked]:to-violet-600"
      />
      <Moon className={`h-[1.2rem] w-[1.2rem] ${theme === "dark" ? "text-primary" : "text-muted-foreground"} transition-colors duration-300`} />
    </div>
  );
}

export function SimpleThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button 
      variant="ghost" 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative group p-2 rounded-full glass-card hover:bg-secondary/60 transition-all duration-300"
    >
      <div className="relative">
        <Sun className={`h-5 w-5 transition-all duration-300 ${theme === "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100"} absolute top-0 left-0 ${theme === "light" ? "text-primary" : "text-muted-foreground"}`} />
        <Moon className={`h-5 w-5 transition-all duration-300 ${theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"} absolute top-0 left-0 ${theme === "dark" ? "text-primary" : "text-muted-foreground"}`} />
      </div>
      <span className="sr-only">Toggle theme</span>
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Button>
  );
}
