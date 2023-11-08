import "./InventoryList.scss";
import InventoryCard from "../InventoryCard/InventoryCard";

const InventoryList = () => {
  return (
    <div className="inventory-list">
      <h2 className="inventory-list__header">inventory</h2>
      <input
        className="inventory-list__search"
        type="text"
        placeholder="Search"
      />
      <button className="inventory-list__button">+ Add New inventory</button>
      <ul className="inventory-list__wrapper">
        <InventoryCard />
      </ul>
    </div>
  );
};

export default InventoryList;
