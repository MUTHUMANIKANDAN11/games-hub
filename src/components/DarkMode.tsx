import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-white");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("bg-dark", "text-white");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Form.Check
      type="switch"
      id="dark-mode-switch"
      label="Dark Mode"
      checked={darkMode}
      onChange={() => setDarkMode(!darkMode)}
      className="mt-3"
    />
  );
};

export default DarkModeToggle;
