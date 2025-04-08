import { FaPlus } from "react-icons/fa";

interface Props {
  total: number;
  isDark: boolean;
}

const Added = ({ total, isDark }: Props) => {
  return (
    <button
      type="button"
      className={`btn btn-${isDark ? "dark" : "light"}`}
      data-bs-toggle="button"
      aria-pressed="true"
    >
      {" "}
      <FaPlus></FaPlus> {total}
    </button>
  );
};

export default Added;
