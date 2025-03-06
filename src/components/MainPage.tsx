import Header from "./header/Header";
import GamesGrid from "./GameGrid/GamesGrid";
import "../styles/main-page.css";

const MainPage = () => {
  return (
    <div className="container-fluid text-center vh-100 d-flex flex-column">
      <div className="row fixed-top">
        <Header></Header>
      </div>
      <div className="row flex-grow-1 mt-5">
        <div className="col-2 d-none d-md-block right-bar">side bar</div>
        <div className="col container mt-2">
          <GamesGrid></GamesGrid>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
