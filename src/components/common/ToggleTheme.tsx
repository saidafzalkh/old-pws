import { ReactElement, useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { SunFill, MoonStarsFill } from "react-bootstrap-icons";

const ToggleTheme = (): ReactElement => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    localStorage.setItem("theme", isCurrentDark ? "light" : "dark");
    console.log(theme);
  };

  return (
    <button
      name="theme-btn"
      type="button"
      aria-label={"switch theme to " + theme == "dark" ? "light" : "dark"}
      className="theme-btn"
      onClick={handleThemeChange}
    >
      {theme === "dark" ? <SunFill /> : <MoonStarsFill />}
    </button>
  );
};

export default ToggleTheme;
