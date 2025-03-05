import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/example.css";

const items = [
  { id: 1, size: "small" },
  { id: 2, size: "large" },
  { id: 3, size: "medium" },
  { id: 4, size: "small" },
  { id: 5, size: "large" },
  { id: 6, size: "medium" },
];

const MasonryGrid = () => {
  return (
    <div className="container mt-4">
      <div className="masonry-grid">
        {items.map((item) => (
          <div key={item.id} className={`masonry-item ${item.size}`}>
            <p>Item {item.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;
