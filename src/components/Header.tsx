import logo from "../assets/react.svg";
import DarkModeToggle from "./DarkMode";

const Header = () => {
  return (
    <div className="d-flex justify-content-between">
      <img src={logo} />
      <DarkModeToggle />
    </div>
  );
};

export default Header;
