import profileImage from "../../assets/profile.png";
import "../../styles/header.css";

const UserProfile = () => {
  return (
    <div className="dropdown">
      <img
        src={profileImage}
        className="user-box dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="true"
        role="button"
        alt=""
      />
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Profile
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            My Library
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
