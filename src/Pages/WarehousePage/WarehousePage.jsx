import "./WarehousePage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

import WarehouseDetail from "../../components/WarehouseDetail/WarehouseDetail";

// import MainNav from "../../components/MainNav/MainNav";

const WarehousePage = () => {
  return (
    <div className="WarehousePage">
      {/* <MainNav/> */}

      <WarehouseList />
    </div>
  );
};

export default WarehousePage;
