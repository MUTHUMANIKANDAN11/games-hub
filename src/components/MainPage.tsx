import Header from "./Header";

const MainPage = () => {
  return (
    <div className="container-fluid text-center vh-100 d-flex flex-column">
      <div className="row" style={{ height: "50px" }}>
        <div className="col-12 bottom-bar">
          <Header></Header>
        </div>
      </div>
      <div className="row flex-grow-1 d-flex">
        <div className="col-3 d-none d-md-block right-bar">side bar</div>
        <div className="col-9 flex-grow-1">main page</div>
      </div>
    </div>
  );
};

export default MainPage;
