import { useEffect, useState } from "react";
import { THEMES } from "./themes";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem("pankaj-portfolio-theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === THEMES.LIGHT ? setMode(THEMES.DARK) : setMode(THEMES.LIGHT);
  };

  useEffect(() => {
    const setThemeByTime = () => {
      const hours = new Date().getHours();
      hours >= 18 || hours < 6 ? setMode(THEMES.DARK) : setMode(THEMES.LIGHT);
    };
    const localTheme = window.localStorage.getItem("pankaj-portfolio-theme");
    localTheme ? setTheme(localTheme) : setThemeByTime();
    setComponentMounted(true);
  }, []);
  return [theme, toggleTheme, componentMounted];
};
