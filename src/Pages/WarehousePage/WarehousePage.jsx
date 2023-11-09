import "./WarehousePage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseDetail from "../../components/WarehouseDetail/WarehouseDetail";

const WarehousePage = () => {
  return (
    <div>
      <WarehouseDetail />
      <WarehouseList />
    </div>
  );
};

export default WarehousePage;
