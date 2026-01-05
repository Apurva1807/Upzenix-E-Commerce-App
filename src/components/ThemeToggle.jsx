import useThemeStore from "../store/themeStore";

const ThemeToggle = () => {
  const { dark, toggleTheme } = useThemeStore();

  return (
    <button onClick={toggleTheme}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;