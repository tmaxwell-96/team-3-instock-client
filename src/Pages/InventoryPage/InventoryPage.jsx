import "./InventoryPage.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryItemDetail from "../../components/InventoryItemDetail/InventoryItemDetail";
import MainNav from "../../components/MainNav/MainNav";

function InventoryPage() {
  return (
    <div>
      <MainNav/>
      <InventoryItemDetail />
      <InventoryList />
    </div>
  );
}

export default InventoryPage;
