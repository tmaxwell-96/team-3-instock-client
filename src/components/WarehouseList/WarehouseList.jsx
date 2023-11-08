const WarehouseList = () => {
  return (
    <div className="warehouse-list">
      <h2 className="warehouse-list__header">Warehouses</h2>
      <input
        className="warehouse-list__search"
        type="text"
        placeholder="Search"
      />
      <button className="warehouse-list__button">+ Add New Warehouse</button>
      <ul className="warehouse-list__wrapper"></ul>
    </div>
  );
};

export default WarehouseList;