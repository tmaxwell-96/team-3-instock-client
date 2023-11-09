import "./InventoryPage.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryItemDetail from "../../components/InventoryItemDetail/InventoryItemDetail";

function InventoryPage() {
  return (
    <div>
      <InventoryItemDetail />
      <InventoryList />
    </div>
  );
}

export default InventoryPage;
