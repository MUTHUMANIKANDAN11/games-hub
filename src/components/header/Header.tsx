import logo from "../../assets/react.svg";
import SearchBar from "./SearchBar";
import DarkModeToggle from "../DarkMode";
import { useState } from "react";
import UserProfile from "./UserProfile";

const Header = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );
  return (
    <div
      className={`px-3 py-2 border-mark d-flex justify-content-between align-items-center ${
        isDark ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <img src={logo} />
      <SearchBar />
      <UserProfile />
      <DarkModeToggle onThemeChange={setIsDark} />
    </div>
  );
};

export default Header;
