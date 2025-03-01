const MainPage = () => {
  return (
    <div className="container-fluid text-center vh-100 d-flex flex-column">
      <div className="row" style={{ height: "50px" }}>
        <div className="col-12 bg-primary">header</div>
      </div>
      <div className="row flex-grow-1 d-flex">
        <div className="col-3 bg-warning d-none d-md-block">side bar</div>
        <div className="col-9 bg-danger flex-grow-1">main page</div>
      </div>
    </div>
  );
};

export default MainPage;
