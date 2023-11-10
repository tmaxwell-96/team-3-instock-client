import "./WarehousePage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

import WarehouseDetail from "../../components/WarehouseDetail/WarehouseDetail";
import EditInventory from "../../components/EditInventory/EditInventory";

// import MainNav from "../../components/MainNav/MainNav";

const WarehousePage = () => {
  return (
    <div>
      {/* <MainNav/> */}
      <EditInventory />
      <WarehouseList />
    </div>
  );
};

export default WarehousePage;
