import Header from "./header/Header";
import GamesGrid from "./GameGrid/GamesGrid";
import "../styles/main-page.css";
import { useState } from "react";

const MainPage = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  return (
    <div className="container-fluid text-center vh-100 d-flex flex-column ">
      <Header isDark={isDark} setIsDark={setIsDark}></Header>
      <div className="row flex-grow-1 mt-5">
        <div className="col-2 d-none mt-3 d-md-block right-bar">side bar</div>
        <div className="col container mt-3">
          <GamesGrid isDark={isDark}></GamesGrid>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
