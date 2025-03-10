import logo from "../../assets/react.svg";
import SearchBar from "./SearchBar";
import DarkModeToggle from "../DarkMode";
import { useState, useEffect } from "react";
import UserProfile from "./UserProfile";

interface Props {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const Header = ({ isDark, setIsDark }: Props) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.scroll]);

  return (
    <div
      className={`row ${isFixed ? "fixed-top" : "fixed-top"}`}
      style={{ transition: "all 0.3s ease-in-out" }}
    >
      <div
        className={`px-3 py-2 border-mark d-flex justify-content-between align-items-center ${
          isDark ? "bg-dark text-white" : "bg-light text-dark"
        }`}
      >
        <div className="left-header">
          <img src={logo} />
        </div>
        <div className="middle-header flex-fill">
          <SearchBar />
        </div>
        <div className="right-header d-flex justify-content-around">
          <UserProfile />
          <DarkModeToggle onThemeChange={setIsDark} />
        </div>
      </div>
    </div>
  );
};

export default Header;
