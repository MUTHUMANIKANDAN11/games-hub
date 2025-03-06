import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="input-group">
      <button className="btn btn-light border-0 d-flex justify-content-center align-items-center search-hover">
        <IoIosSearch color="black" size={"20px"} />
      </button>

      <input className="form-control" type="text" placeholder="Search sames" />
    </div>
  );
};

export default SearchBar;
