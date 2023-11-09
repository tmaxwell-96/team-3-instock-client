import "./InventoryPage.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import AddInventory from "../../components/AddInventory/AddInventory";
import InventoryItemDetail from "../../components/InventoryItemDetail/InventoryItemDetail";

function InventoryPage() {
  return (
    <div>
      <AddInventory />
      <InventoryItemDetail />
      <InventoryList />
    </div>
  );
}

export default InventoryPage;
