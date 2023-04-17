import { ReactElement, useState } from "react";
import { ThemeContext } from "../contexts/theme-context";
import { ThemeProps } from "../types/LayoutTheme.type";

const LayoutTheme = ({ children }: ThemeProps): ReactElement => {
  const isBrowserDefaultDark = (): boolean =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem("theme");
    const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <main className="main-wrapper">{children}</main>
      </div>
    </ThemeContext.Provider>
  );
};

export default LayoutTheme;
