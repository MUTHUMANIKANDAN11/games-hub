import Header from "./Header";
import GamesGrid from "./GamesGrid";

const MainPage = () => {
  return (
    <div className="container-fluid text-center vh-100 d-flex flex-column">
      <div className="row" style={{ height: "50px" }}>
        <div className="col-12 bottom-bar">
          <Header></Header>
        </div>
      </div>
      <div className="row flex-grow-1">
        <div className="col-2 d-none d-md-block right-bar">side bar</div>
        <div className="col bg-success">
          <div className="container">
            <GamesGrid></GamesGrid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
